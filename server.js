import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import connect from "./database/conn.js";
import userRouter from "./router/user.js";
import swaggerDocs from "./swagger.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));
app.disable("x-powered-by");
const port = process.env.PORT || 8080;
app.get("/", (req, res) => {
  res.status(201).json("Home GET Request");
});

/** api routes */
app.use("/api/user", userRouter);

connect()
  .then(() => {
    try {
      app.listen(port, () => {
        console.log(`Server connected to http://localhost:${port}`);
      });
      swaggerDocs(app, port);
    } catch (error) {
      console.log("Cannot connect to the server");
    }
  })
  .catch((error) => {
    console.log("Invalid database connection...!");
  });
