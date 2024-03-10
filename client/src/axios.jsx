import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "http://localhost:9500/api/",
  // baseURL: "https://insoc-hkts.vercel.app/api/",
  withCredentials: true,
});
