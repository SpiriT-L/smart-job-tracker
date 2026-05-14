import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// Создаём пул соединений с базой данных
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Адаптер для Prisma
const adapter = new PrismaPg(pool);

// Создаём клиент с адаптером
export const prisma = globalForPrisma.prisma ?? new PrismaClient({ adapter });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
