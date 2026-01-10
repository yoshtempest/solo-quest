import { apiFetch } from "./api";

export interface User {
  id: string;
  username: string;
  email: string;
}

export function getCurrentUser() {
  return apiFetch<User>("/user");
}
