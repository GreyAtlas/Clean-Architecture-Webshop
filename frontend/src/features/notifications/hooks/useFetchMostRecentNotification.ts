// authHooks.ts
import { useQuery } from "@tanstack/react-query";
import type { NotificationResponse } from "../types/notificationTypes";
import { notificationService } from "../services/notificationService";
import { useAuthenticationStore } from "@/features/authentication/store/authenticationStore";

export const useFetchMostRecentNotification = () => {
  const isAuthenticated = useAuthenticationStore((state) => state.isAuthenticated)
  return useQuery<NotificationResponse>(
    {
      queryKey: ["mostRecentNotification"],
      queryFn: () => notificationService.fetchMostRecentNotification(),
      refetchInterval: 5000,
      refetchOnWindowFocus: true,
      enabled: isAuthenticated
    }
  )
}

