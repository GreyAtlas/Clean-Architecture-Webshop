import { create } from "zustand"
import { persist } from "zustand/middleware";
import type { AuthenticationTokens } from "../types/authTypes";

interface AuthenticationState {
  accessToken: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
}

type AuthenticationActions = {
  setTokens: (authenticationTokens: AuthenticationTokens) => void;
  removeTokens: () => void;
}


export const useAuthenticationStore = create<AuthenticationState & AuthenticationActions>()(
  persist(
    (set) => ({
      accessToken: null,
      refreshToken: null,
      isAuthenticated: false,

      setTokens: (authenticationTokens: AuthenticationTokens) => set({
        accessToken: authenticationTokens.accessToken,
        refreshToken: authenticationTokens.refreshToken,
        isAuthenticated: true
      }),
      removeTokens: () => set({
        accessToken: null,
        refreshToken: null,
        isAuthenticated: false
      }),

    }),
    {
      name: 'authentication-storage',
      partialize: (state) => ({ refreshToken: state.refreshToken, accessToken: state.accessToken, isAuthenticated: state.isAuthenticated })
    }
  )
)