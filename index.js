import express from 'express';
import Hello from "./Hello.js";
import Lab5 from "./Lab5/index.js";
import cors from "cors";
import UserRoutes from "./Kambaz/Users/routes.js";
import CourseRoutes from "./Kambaz/Courses/routes.js";
import "dotenv/config";
import session from "express-session";
import ModuleRoutes from "./Kambaz/Modules/routes.js";
import AssignmentRoutes from "./Kambaz/Assignments/routes.js";
import mongoose from "mongoose";

const CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || "mongodb://127.0.0.1:27017/kambaz"
mongoose.connect(CONNECTION_STRING);
const app = express();

app.use(
  cors({
    credentials: true,
    origin: (origin, callback) => {
      const allowedOrigins = [
        "http://localhost:5173",
        "http://localhost:5174",
        "http://localhost:5175",
        "https://a6--kambaz-react-web-app-sp25.netlify.app",
      ];

      const isNetlify = origin?.endsWith(".netlify.app");
      const isLocalhost = allowedOrigins.includes(origin);

      if (!origin || isNetlify || isLocalhost) {
        callback(null, true);
      } else {
        console.log("Blocked origin:", origin);
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);

const sessionOptions = {
  secret: process.env.SESSION_SECRET || "kambaz",
  resave: false,
  saveUninitialized: false,
};

if (process.env.NODE_ENV !== "development") {
  app.set("trust proxy", 1); // Needed for secure cookies on proxies like Render
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
    // domain: process.env.NODE_SERVER_DOMAIN,
  };
}

app.use(session(sessionOptions));
app.use(express.json()); 
UserRoutes(app);
CourseRoutes(app);
Lab5(app);
Hello(app);
ModuleRoutes(app);
AssignmentRoutes(app);
app.listen(process.env.PORT || 4000);
