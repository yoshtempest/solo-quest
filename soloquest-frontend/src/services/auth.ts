import { apiFetch } from "./api";

interface LoginResponse {
  token: string;
}

export async function login(email: string, password: string) {
  return apiFetch<LoginResponse>("/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
}

export async function register(
  email: string,
  username: string,
  password: string
) {
  return apiFetch<void>("/register", {
    method: "POST",
    body: JSON.stringify({ email, username, password }),
  });
}

export function logout() {
  localStorage.removeItem("token");
}
