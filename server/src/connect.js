import mysql from "mysql";

import dotenv from "dotenv";
dotenv.config();
// console.log(process.env.DB_HOST);

export const db = mysql.createConnection({
  // host: "localhost",
  host: process.env.DB_HOST,
  // user: "root",
  user: process.env.DB_USERNAME,
  // password: "",
  password: process.env.DB_PASSWORD,
  // database: "social",
  database: process.env.DB_DBNAME,
});
