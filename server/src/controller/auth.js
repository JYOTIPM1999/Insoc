import { db } from "../connect.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = (req, res) => {
  //CHECK USER IF EXISTS
  const q = "SELECT * FROM users WHERE username=?";
  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(409).json("User already exits");
    //CREAT A NEW USER
    //HASH TEH PASSWORD

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);

    const q =
      "INSERT INTO users (`username`,`email`,`password`,`name`) VALUE (?,?,?,?)";
    // const values=[req.body.username,req.body.email,hashedPassword,req.body.name];

    db.query(
      q,
      [req.body.username, req.body.email, hashedPassword, req.body.name],
      (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("User has been created");
      }
    );
  });
};

export const login = (req, res) => {
  const q = "SELECT * FROM users WHERE username= ? ";

  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json("User not found");

    const checkPassword = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );
    if (!checkPassword)
      return res.status(400).json("Wrong password or username");

    //JWT & SECRET KEY
    const token = jwt.sign({ id: data[0].id }, "secretkey");

    // TOOK EVERYTHING EXCEPT PASSWORD
    const { password, ...others } = data[0];
    // console.log("Dattttta", data[0]);
    const expirationDate = new Date(Date.now() + 1000 * 7 * 24 * 60 * 60);
    res
      .cookie("accessToken", token, {
        expires: expirationDate,
        httpOnly: true,
        // secure: true,
        sameSite: "None",
      })
      .status(200)
      .json(others);
  });
};

// export const logout = (req, res) => {
//   res
//     .clearCookie("accessToken", { secure: true, sameSite: "none" })
//     .status(200)
//     .json("User logged out successfully");
// };
