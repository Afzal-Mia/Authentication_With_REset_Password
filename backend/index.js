import express from "express";
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser";
dotenv.config();

import {connectDb} from "./db/connectDB.js"
const app = express();
const port =  process.env.PORT||3000; 
import authRoutes from './routes/auth.route.js'

// middleware
app.use(
    cors({
      origin: "http://localhost:5173",
      credentials: true,               // Allow credentials (cookies, etc.)
    })
  );
app.use(express.json());
app.use(cookieParser());//this allows us to parse the cookie

// router handler
app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use("/api/auth",authRoutes);

// Start the server
app.listen(port, () => {
    connectDb();
    console.log(`Your app is running on http://localhost:${port}`);
});
