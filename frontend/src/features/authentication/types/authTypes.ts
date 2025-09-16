export interface LoginRequest {
  email: string
  password: string
}

export interface RegisterRequest {
  email: string,
  password: string
}

export interface LoginResponse {
  tokenType: string,
  accessToken: string,
  expiresIn: number,
  refreshToken: string
}

export interface RefreshRequest {
  refreshToken: string
}

export interface RefreshResponse {
  tokenType: string,
  accessToken: string,
  expiresIn: number,
  refreshToken: string
}

export interface AuthenticationTokens {
  accessToken: string,
  refreshToken: string
}