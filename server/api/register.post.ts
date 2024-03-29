import prisma from '../prisma';

export default defineEventHandler(async (event) => {
  const { firstName, lastName, email, password } = await readBody(event);

  if (!firstName || !lastName || !email || !password) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid inputs'
    })
  }

  try {
    const createdUser = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        password
      }
    });
    prisma.$disconnect();
  } catch (e) {
    prisma.$disconnect();
    throw createError({
      statusCode: 400,
      statusMessage: 'Email already exists'
    });
  }
});
