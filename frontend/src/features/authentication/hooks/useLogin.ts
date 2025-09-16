// authHooks.ts
import { useMutation } from "@tanstack/react-query";
import { useAuthenticationStore } from "../store/authenticationStore";
import { authenticationService } from "../services/authenticationService";
import type { LoginRequest } from "../types/authTypes";

export const useLogin = () =>
  useMutation({
    mutationFn: async (request: LoginRequest) => {
      const result = authenticationService.login(request);
      return result;
    },
    onSuccess: (data) => {
      useAuthenticationStore.getState().setTokens({
        accessToken: data.accessToken,
        refreshToken: data.refreshToken,
      });
    },
  });
