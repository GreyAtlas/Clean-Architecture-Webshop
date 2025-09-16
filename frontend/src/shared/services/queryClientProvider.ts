import { QueryClient } from "@tanstack/react-query";

const queryClient: QueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      refetchOnReconnect: false,
    },
  },
});

export default queryClient;