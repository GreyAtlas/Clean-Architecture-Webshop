import { useInfiniteQuery } from "@tanstack/react-query"
import type { FetchProductChunkRequest, FetchProductChunkResponse } from "../types/productTypes"
import { productService } from "../services/productService"

export const useFetchProductChunk = ({ chunkIndex = 0, chunkSize = 15, sortByAscending = true }: FetchProductChunkRequest) => {

  return useInfiniteQuery<FetchProductChunkResponse>(
    {
      queryKey: ["fetchProductChunk", chunkIndex, chunkSize, sortByAscending],
      queryFn: async ({ pageParam }) => {
        const start = (pageParam as number)
        const result = await productService.fetchProductChunk({
          chunkIndex: start,
          chunkSize: chunkSize,
          sortByAscending: sortByAscending
        });
        return result;
      },
      initialPageParam: chunkIndex,
      getNextPageParam: (_lastPage, groups) => {
        if (!_lastPage.products.length) return undefined;

        return groups.length;
      },
      refetchOnWindowFocus: true
    }
  )
}