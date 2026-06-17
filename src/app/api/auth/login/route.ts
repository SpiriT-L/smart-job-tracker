import { prisma } from '@/shared/api/prisma';

export async function POST(request: Request) {
  const body = await request.json();

  const { email, password } = body;

  if (!email || !password) {
    return Response.json(
      {
        message: 'Email and password are required',
      },
      { status: 400 },
    );
  }

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    return Response.json(
      {
        message: 'Invalid credentials',
      },
      { status: 401 },
    );
  }
}
