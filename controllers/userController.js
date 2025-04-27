import axios from "axios"; // Add this import
import jwt from "jsonwebtoken";
import UserModel from "../model/User.model.js"; // Adjust the path as necessary

export async function isUserLoggedIn(req, res, next) {
    let userId = null;
    if (req.cookies?.uid) {
        const token = JSON.parse(req.cookies.uid).token;
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        userId = decoded.userId;
        console.log(userId);

    } else if ( req.get("User-Id") ){
        console.log("Verifying from User-Id header");
        const token = (JSON.parse(req.get("User-Id"))).token;
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        userId = decoded.userId;
        console.log(userId);
    } else {
        req.user = null;
        next();
        return;
    }
    
    // Find the user in the database
    const user = await UserModel.findOne({ discordId: userId });

    if (!user) {
        req.user = null;
        next();
        return;
    }
    console.log(user);

    // Send user data back to the client
    req.user = user;
    next();
}

export async function register(req, res) {
    try {
        const { code } = req.query; // Discord OAuth2 authorization code

        if (!code) {
            return res.status(400).json({ error: "Authorization code is required" });
        }

        // Exchange code for access token
        const tokenResponse = await axios.post(
            "https://discord.com/api/oauth2/token",
            new URLSearchParams({
                client_id: process.env.DISCORD_CLIENT_ID,
                client_secret: process.env.DISCORD_CLIENT_SECRET,
                grant_type: "authorization_code",
                code,
                redirect_uri: process.env.DISCORD_REDIRECT_URI,
            }),
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            }
        );

        const { access_token, refresh_token, expires_in } = tokenResponse.data;

        // Fetch user details from Discord
        const userResponse = await axios.get("https://discord.com/api/users/@me", {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        });

        // console.log(tokenResponse.data);
        // console.log(userResponse.data);

        const { id, username, email, avatar, global_name, discriminator } = userResponse.data;

        // Check if the user already exists
        const existingUser = await UserModel.findOne({ discordId: id });


        // Create a new user
        let user = {
            discordId: id,
            username,
            global_name,
            email,
            accessToken: access_token,
            refreshToken: refresh_token,
            accessTokenExpiresAt: new Date(Date.now() + expires_in * 1000),
            profile: {
                profile_photo: (avatar)? `https://cdn.discordapp.com/avatars/${id}/${avatar}.png` : `https://cdn.discordapp.com/embed/avatars/${discriminator % 5}.png`,
            },
        };

        const token = jwt.sign(
            {
                userId: user.discordId,
                username: user.username,
            },
            process.env.JWT_SECRET,
            { expiresIn: "24h" }
        );

        let query = { 'discordId': user.discordId };

        UserModel.findOneAndUpdate(query, user, { upsert: true }, function (err, doc) {
            if (err) { console.error(err) ; return res.status(500).json({ error: "Internal Server Error" });}
            // responseStr = (!responseStr)? { msg: `User registered successfully`, userId: savedUser._id } : responseStr;
            return;
        });
        
        res.cookie("uid", JSON.stringify({token, username: user.global_name, avatar: user.profile.profile_photo}), { maxAge: 24 * 60 * 60 * 1000, domain: ".gamedevutopia.in", secure: true, sameSite: "none" });
        res.cookie("uid", JSON.stringify({token, username: user.global_name, avatar: user.profile.profile_photo}), { maxAge: 24 * 60 * 60 * 1000, domain: "localhost", secure: false, sameSite: "none" });
        res.redirect(process.env.FRONTEND_URL || "http://localhost:3000/");

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export async function login(req, res) {
    if(req.cookies?.uid) {
        const token = JSON.parse(req.cookies.uid).token;
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decoded.userId;

        // Find the user in the database
        const user = await UserModel.findOne({ discordId: userId });

        if (!user) {
            return res.redirect(
                `https://discord.com/api/oauth2/authorize?prompt=none&client_id=${process.env.DISCORD_CLIENT_ID}&redirect_uri=${encodeURIComponent(process.env.DISCORD_REDIRECT_URI)}&response_type=code&scope=${encodeURIComponent("identify email guilds guilds.join guilds.members.read")}`
            )
        }

        // Send user data back to the client
        return res.redirect(process.env.FRONTEND_URL || "http://localhost:3000");
    }
    res.redirect(
        `https://discord.com/api/oauth2/authorize?prompt=none&client_id=${process.env.DISCORD_CLIENT_ID}&redirect_uri=${encodeURIComponent(process.env.DISCORD_REDIRECT_URI)}&response_type=code&scope=${encodeURIComponent("identify email guilds guilds.join guilds.members.read")}`
    );
}

export async function logout(req, res) {
    if(req.cookies?.uid) {
        res.clearCookie("uid", {domain: ".gamedevutopia.in", secure: true, sameSite: "none"});
        res.clearCookie("uid", {domain: "localhost", secure: false, sameSite: "none"});
    }
    return res.redirect(process.env.FRONTEND_URL || "http://localhost:3000");
}

export async function getUserData(req, res) {
    const ModalText = {};
    try {
        const user = req.user;
        if (!user) {
            return res.status(401).json({ error: "User not found" });
        }
        // check if user is part of the GameDevUtopia discord server
        const guildMemberResponse = await axios.get(`https://discord.com/api/v10/users/@me/guilds/${process.env.DISCORD_GUILD_ID}/member`, {
            headers: {
                Authorization: `Bearer ${user.accessToken}`
            }
        });
        const guildMember = guildMemberResponse.data;
        if (!guildMember || !guildMember.user) {
            ModalText.displayText = "You are missing out a lot not being a member of the GameDevUtopia Discord server!";
            ModalText.buttonText = "Join Server";
        }
        else {
            ModalText.displayText = `Proud member of the GameDevUtopia from ${new Date(guildMember.joined_at).toLocaleDateString()}!`;
            ModalText.buttonText = "Close";
        }
        return res.status(200).json(ModalText);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

export async function joinUserToGuild(req, res) {
    const user = req.user;
    if (!user) {
        return res.status(401).json({ error: "User not found" });
    }
    try {
        const response = await axios.put(`https://discord.com/api/guilds/${process.env.DISCORD_GUILD_ID}/members/${user.discordId}`, {
            access_token: user.accessToken,
            nick: user.global_name
        }, {
            headers: {
                Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}`,
                "Content-Type": "application/json",
            }
        });
        return res.status(200).json({ message: "User added to guild successfully", data: response.data });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

export async function getUser(req, res) {
    //   const { username } = req.params;
    //   try {
    //     if (!username) return res.status(501).send({ error: "Invalid Username" });

    //     UserModel.findOne({ username }, function (err, user) {
    //       if (err) return res.status(500).send({ err });
    //       if (!user)
    //         return res.status(501).send({ error: "Couldn't Find the User" });
    //       const { password, ...rest } = Object.assign({}, user.toJSON());

    //       return res.status(201).send(rest);
    //     });
    //   } catch (error) {
    //     return res.status(404).send({ error: "Cannot Find User Data" });
    //   }
}

export async function updateUser(req, res) {
    //   try {
    //     const { userId } = req.body;
    //     if (userId) {
    //       const body = req.body;
    //       UserModel.updateOne({ _id: userId }, body, function (err, data) {
    //         if (err) throw err;
    //         return res.status(201).send({ msg: "Record Updated...!" });
    //       });
    //     } else {
    //       return res.status(401).send({ error: "User Not Found...!" });
    //     }
    //   } catch (error) {
    //     return res.status(401).send({ error });
    //   }
}

export async function deleteUser(req, res) {
    //   try {
    //     const { userId } = req.params;

    //     if (userId) {
    //       UserModel.deleteOne({ _id: userId }, function (err, data) {
    //         if (err) throw err;

    //         return res.status(201).send({ msg: "Record Deleted...!" });
    //       });
    //     } else {
    //       return res.status(401).send({ error: "User Not Found...!" });
    //     }
    //   } catch (error) {
    //     return res.status(401).send({ error });
    //   }
}
