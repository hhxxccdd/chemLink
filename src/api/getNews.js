import http from "@/utils/http";

// 通过id获取单个新闻
export async function apiGetNews(params = {}) {
  const res = await http.get("/news", { params });
  return res.data;
}

// 获取所有新闻
export async function apiGetNewsList() {
  const res = await http.get("/news");
  return res.data;
}