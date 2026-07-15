// import { SignJWT } from 'jose';
// import { Role } from '@prisma/client';

// type JwtPayload = {
//   sub: string;
//   email: string;
//   role: Role;
// };

// function getJwtSecret(): string {
//   const secret = process.env.JWT_SECRET;

//   if (!secret) {
//     throw new Error('JWT_SECRET is not defined');
//   }
//   return secret;
// }

// export async function signJWT(payload: JwtPayload) {
//   const secret = new TextEncoder().encode(getJwtSecret());

//   const token = await new SignJWT(payload)
//     .setProtectedHeader({ alg: 'HS256' })
//     .sign(secret);
// }
