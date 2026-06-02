import bcrypt from 'bcrypt';

export async function GET() {
  const hash = await bcrypt.hash('123456', 10);

  return Response.json({ hash });
}
