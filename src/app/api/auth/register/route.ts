import { prisma } from '@/shared/api/prisma';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { email, password, name } = body;

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
        password,
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
