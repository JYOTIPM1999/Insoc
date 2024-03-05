import { db } from "../connect.js";
import jwt from "jsonwebtoken";

export const getUser = (req, res) => {
  const userId = req.params.userId;
  console.log(req);
  const q = "SELECT * FROM users WHERE id= ? ";
  db.query(q, [userId], (err, data) => {
    console.log(data);
    if (err) return res.status(500).json(err);
    const { password, ...info } = data[0];
    return res.json(info);
  });
};
