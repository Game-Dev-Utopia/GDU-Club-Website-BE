import UserModel from "../model/User.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function register(req, res) {
  try {
    const { username, password, firstName, lastName, email } = req.body;
    const existUsername = new Promise((resolve, reject) => {
      UserModel.findOne({ username }, function (err, user) {
        if (err) reject(new Error(err));
        if (user) reject({ error: "Please use unique username" });

        resolve();
      });
    });
    const existEmail = new Promise((resolve, reject) => {
      UserModel.findOne({ email }, function (err, email) {
        if (err) reject(new Error(err));
        if (email) reject({ error: "Please use unique Email" });

        resolve();
      });
    });
    Promise.all([existUsername, existEmail])
      .then(() => {
        if (password) {
          bcrypt
            .hash(password, 10)
            .then((hashedPassword) => {
              const user = new UserModel({
                username,
                password: hashedPassword,
                firstName,
                lastName,
                email,
              });
              user
                .save()
                .then((result) =>
                  res
                    .status(201)
                    .send({
                      msg: `User Register Successfully, userId is ${user._id}`,
                    })
                )
                .catch((error) => res.status(500).send({ error }));
            })
            .catch((error) => {
              return res.status(500).send({
                error: "Enable to hashed password",
              });
            });
        }
      })
      .catch((error) => {
        return res.status(500).send({ error });
      });
  } catch (error) {
    return res.status(500).send(error);
  }
}
export async function login(req, res) {
  const { username, password } = req.body;
  try {
    UserModel.findOne({ username })
      .then((user) => {
        bcrypt
          .compare(password, user.password)
          .then((passwordCheck) => {
            if (!passwordCheck)
              return res.status(400).send({ error: "Don't have Password" });
            const token = jwt.sign(
              {
                userId: user._id,
                username: user.username,
              },
              process.env.JWT_SECRET,
              { expiresIn: "24h" }
            );

            return res.status(200).send({
              msg: "Login Successful...!",
              username: user.username,
              token,
            });
          })
          .catch((error) => {
            return res.status(400).send({ error: "Password does not Match" });
          });
      })
      .catch((error) => {
        return res.status(404).send({ error: "Username not Found" });
      });
  } catch (error) {
    return res.status(500).send({ error });
  }
}

export async function getUser(req, res) {
  const { username } = req.params;
  try {
    if (!username) return res.status(501).send({ error: "Invalid Username" });

    UserModel.findOne({ username }, function (err, user) {
      if (err) return res.status(500).send({ err });
      if (!user)
        return res.status(501).send({ error: "Couldn't Find the User" });
      const { password, ...rest } = Object.assign({}, user.toJSON());

      return res.status(201).send(rest);
    });
  } catch (error) {
    return res.status(404).send({ error: "Cannot Find User Data" });
  }
}

export async function updateUser(req, res) {
  try {
    const { userId } = req.body;
    if (userId) {
      const body = req.body;
      UserModel.updateOne({ _id: userId }, body, function (err, data) {
        if (err) throw err;
        return res.status(201).send({ msg: "Record Updated...!" });
      });
    } else {
      return res.status(401).send({ error: "User Not Found...!" });
    }
  } catch (error) {
    return res.status(401).send({ error });
  }
}
export async function deleteUser(req, res) {
  try {
    const { userId } = req.params;

    if (userId) {
      UserModel.deleteOne({ _id: userId }, function (err, data) {
        if (err) throw err;

        return res.status(201).send({ msg: "Record Deleted...!" });
      });
    } else {
      return res.status(401).send({ error: "User Not Found...!" });
    }
  } catch (error) {
    return res.status(401).send({ error });
  }
}
