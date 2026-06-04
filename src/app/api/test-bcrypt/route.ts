import bcrypt from 'bcrypt';

export async function GET() {
  const hash = await bcrypt.hash('123456', 10);
  const isMatch = await bcrypt.compare('123456', hash);

  return Response.json({ hash, isMatch });
}
