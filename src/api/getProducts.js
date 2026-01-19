import http from "@/utils/http";

// 通过id获取单个产品
export async function apiGetProducts(params = {}) {
  const res = await http.get("/chemlink/v1/products", { params });
  return res.data;
}

// 获取所有产品
export async function apiGetCatalog() {
  const res = await http.get("/chemlink/v1/catalog");
  return res.data;
}