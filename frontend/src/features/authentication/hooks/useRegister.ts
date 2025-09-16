// authHooks.ts
import { useMutation } from "@tanstack/react-query";
import { authenticationService } from "../services/authenticationService";
import type { RegisterRequest } from "../types/authTypes";
import { enqueueSnackbar } from "notistack";

export const useRegister = () =>
  useMutation({
    mutationFn: async (request: RegisterRequest) => {
      const result = authenticationService.register(request);
      return result;
    },
    onSuccess: () => {
      enqueueSnackbar("You have succesfully registered", {
        variant: "success"
      })
    },
    onError: () => {
      enqueueSnackbar("An issue occured when registering", {
        variant: "error"
      })
    }
  });
