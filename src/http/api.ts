import useTokenStore from "@/store/store";

import axios from "axios";
import { error } from "console";
const api = axios.create({
  baseURL: "http://localhost:4000",
  headers: {
    "Content-Type": "application/json",
  },
});
const apiProduct = axios.create({
  baseURL: "https://fakestoreapi.com",
  headers: {
    "Content-Type": "application/json",
  },
});

apiProduct.interceptors.request.use(
  (config) => {
    const token = useTokenStore.getState().token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

const loginMethod = async (data: { email: string; password: string }) =>
  api.post("/api/v1/user/login", data);

const signupMethod = async (data: {
  name: string;
  email: string;
  password: string;
}) => api.post("/api/v1/user/create", data);

const getAllBooks = async () => api.get("/api/v1/book/list");

const getAllProducts = async (limit: number) =>
  apiProduct.get(`/products?limit=${limit}`);

const createProduct = async (data: { name: string; email: string }) =>
  api.post("/create", data, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + useTokenStore.getState().token,
    },
  });

export default {
  loginMethod,
  signupMethod,
  getAllBooks,
  getAllProducts,
  createProduct,
};
