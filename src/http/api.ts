import axios from "axios";
const api = axios.create({
  baseURL: "http://localhost:4000",
  headers: {
    "Content-Type": "application/json",
  },
});

const loginMethod = async (data: { email: string; password: string }) =>
  api.post("/api/v1/user/login", data);

const signupMethod = async (data: {
  name: string;
  email: string;
  password: string;
}) => api.post("/api/v1/user/create", data);

export default {
  loginMethod,
  signupMethod,
};
