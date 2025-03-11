import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const register = async (email, password) => {
  return axios.post(`${API_URL}/auth/register`, { email, password });
};

export const login = async (email, password) => {
  const res = await axios.post(`${API_URL}/auth/login`, { email, password });
  localStorage.setItem("token", res.data.token);
  return res.data;
};

export const fetchListings = async () => {
  return axios.get(`${API_URL}/listings`);
};

export const createListing = async (title, description, price, imageUrl) => {
  return axios.post(
    `${API_URL}/listings`,
    { title, description, price, imageUrl },
    { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
  );
};
