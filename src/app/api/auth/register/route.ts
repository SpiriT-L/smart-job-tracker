import { prisma } from '@/shared/api/prisma';
import bcrypt from 'bcrypt';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { email, password, name } = body;
    const hashPassword = await bcrypt.hash(password, 10);

    if (!email || !password) {
      return Response.json(
        {
          message: 'Email and password are required',
        },
        {
          status: 400,
        },
      );
    }

    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      return Response.json(
        {
          message: 'User already exists',
        },
        {
          status: 409,
        },
      );
    }

    const user = await prisma.user.create({
      data: {
        email,
        password: hashPassword,
        name,
      },
    });

    return Response.json(
      {
        id: user.id,
        email: user.email,
      },
      {
        status: 201,
      },
    );
  } catch {
    return Response.json(
      {
        message: 'Internal server error',
      },
      {
        status: 500,
      },
    );
  }
}
