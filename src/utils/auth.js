export const AUTH_KEY = 'spa_auth_token';

export function login(token) {
  localStorage.setItem(AUTH_KEY, token);
}

export function logout() {
  localStorage.removeItem(AUTH_KEY);
}

export function getAuthToken() {
  return localStorage.getItem(AUTH_KEY);
}
