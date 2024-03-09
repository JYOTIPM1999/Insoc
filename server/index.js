import express from "express";
const app = express();

import userRoutes from "./src/routes/users.js";
import authRoutes from "./src/routes/auth.js";
import likeRoutes from "./src/routes/likes.js";
import commentRoutes from "./src/routes/comments.js";
import postRoutes from "./src/routes/posts.js";
import relationshipRoutes from "./src/routes/relationships.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import multer from "multer";

//MIDDLEWARE
app.use((req, res, next) => {
  //I have write it becuase in Authcontext(login) I have use withcredentials:true
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
app.use(express.json());
app.use(
  cors({
    // origin: ["http://localhost:3000"],
    origin: ["https://insoc.vercel.app/"],
    withCredentials: true,
  })
);
app.use(cookieParser());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});
const upload = multer({ storage: storage });

app.use(express.urlencoded({ extended: true }));

app.post("/api/upload", upload.single("file"), (req, res) => {
  const file = req.file;
  res.status(200).json(file.filename);
});

app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/likes", likeRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/relationships", relationshipRoutes);

app.listen(9500, () => {
  console.log("Api working");
});
