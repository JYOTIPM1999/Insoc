import { db } from "../connect.js";
import jwt from "jsonwebtoken";

export const getRelationships = (req, res) => {
  const q = "SELECT followerUserId FROM relationships WHERE followedUserId = ?";

  db.query(q, [req.query.followedUserId], (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).json(err);
    }
    return res
      .status(200)
      .json(data.map((relationship) => relationship.followedUserId));
  });
};

// export const addRelationship = (req, res) => {
//   const token = req.cookies.accessToken;
//   if (!token) return res.status(401).json("Not logged in!");

//   jwt.verify(token, "secretkey", (err, userInfo) => {
//     if (err) return res.status(403).json("Token is not valid!");

//     const q =
//       "INSERT INTO relationships (`followerUserId`,`followedUserId`) VALUES (?,?)";

//     const values = [userInfo.id, req.body.userId];
//     // console.log(values);

//     db.query(q, [values], (err, data) => {
//       if (err) return res.status(500).json(err);

//       return res.status(200).json("Following User");
//     });
//   });
// };

export const addRelationship = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const checkQuery =
      "SELECT * FROM relationships WHERE `followerUserId` = ? AND `followedUserId` = ?";
    const checkValues = [userInfo.id, req.body.userId];

    db.query(checkQuery, checkValues, (checkErr, checkData) => {
      if (checkErr) return res.status(500).json(checkErr);

      if (checkData.length > 0) {
        return res.status(400).json("Relationship already exists!");
      }

      const q =
        "INSERT INTO relationships (`followerUserId`, `followedUserId`) VALUES (?, ?)";
      const insertValues = [userInfo.id, req.body.userId];

      db.query(q, insertValues, (err, data) => {
        if (err) return res.status(500).json(insertErr);

        return res.status(200).json("Following User");
      });
    });
  });
};

export const deleteRelationship = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const q =
      "DELETE FROM relationships WHERE `followerUserId`= ? AND `followedUserId`=?";

    db.query(q, [userInfo.id, req.query.userId], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("Unfollowed");
    });
  });
};
