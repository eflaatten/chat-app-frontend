import axios from "axios";

const BASE_URL = "https://chat-app-backend-ten-sepia.vercel.app/api";

export const getToken = () => {
  return localStorage.getItem("token");
};

export const login = async (username, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/login`, {
      username,
      password,
    });

    if (response.status === 200) {
      localStorage.setItem("token", response.data.token);
      return response.data;
    }
  } catch (error) {
    console.error("Login error:", error);
    return error.response ? error.response.data : { message: "Network error" };
  }
};

export const signup = async (username, email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/signup`, {
      username,
      email,
      password,
    });

    if (response.status === 201) {
      localStorage.setItem("token", response.data.token);
      return response.data;
    }
  } catch (error) {
    console.error("Signup error:", error);
    return error.response ? error.response.data : { message: "Network error" };
  }
};
