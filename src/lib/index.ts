import { createApiClient } from './gen/client';

export const client = createApiClient(import.meta.env.VITE_API_BASE_URL);
