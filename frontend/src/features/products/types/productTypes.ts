export interface FetchProductChunkRequest {
  chunkIndex: number | null,
  chunkSize: number | null,
  sortByAscending: boolean | null
}
export interface Product {
  id: string,
  name: string,
  price: number,
  description: string,
  imageUrl: string
}
export interface FetchProductChunkResponse {
  products: Product[];
}