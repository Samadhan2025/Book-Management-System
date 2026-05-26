// Import axios
import axios from "axios";

// Create axios instance
const api = axios.create({

  // Backend base URL
  baseURL: "https://book-management-system-t2q1.onrender.com/",
});

// Export api instance
export default api;