import backendApiAxiosInstance from "@/shared/services/backendApiAxiosInstance";
import type { LoginRequest, LoginResponse, RefreshRequest, RefreshResponse, RegisterRequest } from "../types/authTypes";


export const authenticationService = {
  login: async (request: LoginRequest) => {
    return (await backendApiAxiosInstance.post<LoginResponse>(`/identity/login`, request)).data
  },

  register: async (request: RegisterRequest) => {
    return (await backendApiAxiosInstance.post(`/identity/register`, request)).data
  },

  refreshTokens: async (request: RefreshRequest) => {
    return (await backendApiAxiosInstance.post<RefreshResponse>(`/identity/refresh`, request)).data
  }

}