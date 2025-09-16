import axios from "axios";
import { useAuthenticationStore } from "@/features/authentication/store/authenticationStore";

const BACKEND_BASE_URL = String(import.meta.env.VITE_BACKEND_BASE_URL);
const TIMEOUT = 2500; // 2,5 seconds

const backendApiAxiosInstance = axios.create({
  baseURL: BACKEND_BASE_URL,
  withCredentials: true,
});

backendApiAxiosInstance.interceptors.request.use((config) => {
  const accessToken = useAuthenticationStore.getState().accessToken;
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// backendApiAxiosInstance.interceptors.response.use(
//   (response) => response,

//   (error) => {

//     const originalRequest = error.config;
//     const refreshToken = useAuthenticationStore.getState().refreshToken;
//     if (
//       error.response?.status === 401 &&
//       refreshToken &&
//       originalRequest &&
//       !originalRequest._retry
//     ) {
//       originalRequest._retry = true;
//       try {
//         const data = authenticationService.refreshTokens({ refreshToken: refreshToken });

//         useAuthenticationStore.getState().setCredentials({ accessToken: });

//         originalRequest.headers.Authorization = `Bearer ${payload.accessToken}`;

//         return backendApiAxiosInstance(originalRequest);
//       } catch (error) {
//         if (error instanceof AxiosError && error.response?.status === 403) {
//           useAuthenticationStore.getState().removeCredentials();
//           return;
//         }
//       }
//     }

//     return Promise.reject(error);
//   }
// );

backendApiAxiosInstance.defaults.headers.common["Content-Type"] = "application/json";
backendApiAxiosInstance.defaults.timeout = TIMEOUT;
export default backendApiAxiosInstance;