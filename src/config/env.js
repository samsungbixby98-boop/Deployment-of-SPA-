const rawMode = import.meta.env.MODE;
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
const appName = import.meta.env.VITE_APP_NAME;

if (!apiBaseUrl) {
  console.warn('Missing VITE_API_BASE_URL in environment config.');
}

export const env = {
  mode: rawMode,
  isProd: rawMode === 'production',
  apiBaseUrl: apiBaseUrl || 'https://example.invalid/api',
  appName: appName || 'FormOps SPA'
};
