import express from "express";
import {
  getPosts,
  addPost,
  deletePost,
  // uploadFile,
} from "../controller/post.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/", addPost);
router.delete("/:id", deletePost);
// router.delete("/upload", uploadFile);

export default router;
