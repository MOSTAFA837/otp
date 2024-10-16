import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();
const port = process.env.PORT || 5000;

dotenv.config();

connectDB();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

// app.use(express.static(path.join(__dirname, "../../frontend/dist")));

app.use("/api/users", userRoutes);

// app.get("*", (req: Request, res: Response) => {
//   res.sendFile(path.join(__dirname, "../../frontend/dist/index.html"));
// });

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
