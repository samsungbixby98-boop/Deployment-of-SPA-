import { env } from '../config/env';

export function logClientError(error, context = {}) {
  const payload = {
    message: error?.message || 'Unknown client error',
    stack: env.isProd ? undefined : error?.stack,
    context,
    mode: env.mode,
    timestamp: new Date().toISOString()
  };

  console.error('ClientError', payload);
}
