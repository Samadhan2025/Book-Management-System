// Import axios
import axios from "axios";

// Create axios instance
const api = axios.create({

  // Backend base URL
  baseURL: "http://localhost:3000",
});

// Export api instance
export default api;