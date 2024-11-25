import axios from "axios";

const BASE_URL = "https://chat-app-backend-ten-sepia.vercel.app/api";

export const getToken = () => {
  return localStorage.getItem("token");
};

export const fetchUserProfile = async () => {
  const token = getToken();
  if (!token) return null;

  try {
    const response = await axios.get(`${BASE_URL}/fetch/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    return response.data;
  } catch (error) {
    console.error("Fetch profile error:", error);
    return null;
  }
}