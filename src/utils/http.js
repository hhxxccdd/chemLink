import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost/wordpress/wp-json", // ✅ 你的 WP REST 根路径
  timeout: 10000,
});

// 可选：请求拦截器
http.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

// 可选：响应拦截器
http.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error?.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default http;