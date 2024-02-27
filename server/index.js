import express from "express";
const app = express();

import userRoutes from "./src/routes/users.js";
import authRoutes from "./src/routes/auth.js";
import likeRoutes from "./src/routes/likes.js";
import commentRoutes from "./src/routes/comments.js";
import postRoutes from "./src/routes/posts.js";
import cors from "cors";
import cookieParser from "cookie-parser";
//MIDDLEWARE
app.use((req, res, next) => {
  //I have write it becuase in Authcontext(login) I have use withcredentials:true
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));
app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/likes", likeRoutes);
app.use("/api/auth", authRoutes);

app.listen(9500, () => {
  console.log("Api working");
});
