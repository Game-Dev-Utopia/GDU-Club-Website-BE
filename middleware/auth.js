import jwt from "jsonwebtoken";

export default function Auth(req, res, next) {
  try {
    const token = req.headers?.authorization?.split(" ")[1] ? req.headers.authorization.split(" ")[1] : null;
    // console.log('====================================');
    // console.log(token);
    // console.log('====================================');
    req.roles = [];
    if (token) {
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
      req.userId = decodedToken.userId;
      req.roles = decodedToken.roles;
    }
    if (req.roles.length == 0) {
      req.roles.push('user');
    }
    next();
  } catch (error) {
    res.status(401).json({ error: "Authentication Failed!" });
  }
}

