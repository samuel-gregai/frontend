import axios from "axios";

const authInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 50000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

const waitListInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 50000,
  headers: {
    "Content-Type": "application/json",
  }
})

export { authInstance, waitListInstance };
