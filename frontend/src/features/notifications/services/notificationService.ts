import backendApiAxiosInstance from "@/shared/services/backendApiAxiosInstance";
import type { NotificationResponse } from "../types/notificationTypes";

export const notificationService = {
  fetchMostRecentNotification: async () => {
    return (await backendApiAxiosInstance.get<NotificationResponse>(`/notifications/mostRecent`)).data
  }

}