import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import userRouter from "./router/user.js";
import swaggerDocs from "./swagger.js";
import gameRouter from "./router/game.js";
import designRouter from "./router/design.js";
import timelineRouter from "./router/timeline.js";
import achievementRouter from "./router/achievement.js";
import aboutUsRouter from "./router/about-us.js";
import sponserRouter from "./router/sponsers.js";
import contactFormRouter from "./router/contactForm.js";
import eventRouter from "./router/event.js";
import heroRouter from "./router/hero.js";
import developerRouter from "./router/developer.js";
import connect from "./database/conn.js";
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors({
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204, // Response status for successful OPTIONS request
  maxAge: 86400 // Cache preflight response for 1 day
}));
app.use(morgan("tiny"));
app.disable("x-powered-by");
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.status(201).json("home page serverless deploy");
});


/** api routes */
// app.use("/api/user", userRouter);
app.use("/api/game", gameRouter);
app.use("/api/timeline", timelineRouter);
app.use("/api/design", designRouter);

app.use("/api/achievement", achievementRouter);
app.use("/api/aboutus", aboutUsRouter);
app.use("/api/sponser", sponserRouter);
app.use("/api/form", contactFormRouter);
app.use("/api/event", eventRouter)

app.use("/api/hero", heroRouter);
app.use("/api/developer", developerRouter);

// swaggerDocs(app, port);

// (async () => {
//   await connect().catch(err => {
//     console.log("Invalid database connection...!", err.message);
//   });
// })();

// // 
// //

connect()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server connected to http://localhost:${port}`);
      swaggerDocs(app, port); // Initialize Swagger after the server is up
    });
  })
  .catch((error) => {
    console.log("Invalid database connection...!", error.message);
  });


export default app;
