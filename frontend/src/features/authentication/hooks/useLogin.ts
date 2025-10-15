// authHooks.ts
import { useMutation } from "@tanstack/react-query";
import { useAuthenticationStore } from "../store/authenticationStore";
import { authenticationService } from "../services/authenticationService";
import type { LoginRequest } from "../types/authTypes";
import { enqueueSnackbar } from "notistack";

export const useLogin = () =>
  useMutation({
    mutationFn: async (request: LoginRequest) => {
      const result = await authenticationService.login(request);
      return result.data;
    },
    onSuccess: (data) => {
      useAuthenticationStore.getState().setTokens({
        accessToken: data.accessToken,
        refreshToken: data.refreshToken,
      });
    },
    onError: () => {
      enqueueSnackbar("An issue occured when logging in", {
        variant: "error",
      });
    },
  });
