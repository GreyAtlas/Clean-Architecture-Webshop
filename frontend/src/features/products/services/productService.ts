import backendApiAxiosInstance from "@/shared/services/backendApiAxiosInstance";
import type { FetchProductChunkRequest, FetchProductChunkResponse } from "../types/productTypes";

export const productService = {
  fetchProductChunk: async (request: FetchProductChunkRequest) => {
    const { data } = await backendApiAxiosInstance.get<FetchProductChunkResponse>(`/products/pagedlist`, { params: request })
    return data;
  }
}