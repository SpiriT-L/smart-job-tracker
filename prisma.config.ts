// prisma.config.ts
import { config } from 'dotenv';
import { defineConfig, env } from 'prisma/config';

// Укажите правильный путь до вашего .env файла
config({ path: '.env' });

export default defineConfig({
  datasource: {
    url: env('DATABASE_URL'),
  },
});
