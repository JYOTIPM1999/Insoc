import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "http://localhost:9500/api/",
  // baseURL: "https://insoc-c8mljnz9r-jyotipm1999.vercel.app/",

  withCredentials: true,
});
