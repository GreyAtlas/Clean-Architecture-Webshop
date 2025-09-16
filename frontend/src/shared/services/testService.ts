import backendApiAxiosInstance from "@/shared/services/backendApiAxiosInstance";


export const testService = {
  weather: async () => {
    return (await backendApiAxiosInstance.get(`/weatherforecast`)).data
  },

}