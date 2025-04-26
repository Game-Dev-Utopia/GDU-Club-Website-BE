import axios from "axios"; // Add this import
import jwt from "jsonwebtoken";
import UserModel from "../model/User.model.js"; // Adjust the path as necessary

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

        const { id, username, email, avatar, global_name } = userResponse.data;

        // Check if the user already exists
        const existingUser = await UserModel.findOne({ discordId: id });

        let responseStr;

        if (existingUser) {
            responseStr = { error: "User already registered" };
        }

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
                profile_photo: `https://cdn.discordapp.com/avatars/${id}/${avatar}.png`,
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
        
        res.cookie("uid", JSON.stringify({token, username: user.global_name, avatar: user.profile.profile_photo}), { maxAge: 24 * 60 * 60 * 1000, domain: "."+(process.env.FRONTEND_DOMAIN || "http://localhost:3000").split("/")[2] });
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
        const user = await UserModel.findById(userId);

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
        res.clearCookie("uid");
    }
    return res.redirect(process.env.FRONTEND_URL || "http://localhost:3000");
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
