import prisma from '../prisma';

export default defineEventHandler(async (event) => {
  const { email, password } = await readBody(event);

  if (!email || !password) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid inputs'
    });
  }

  try {
    const user = await prisma.user.findUniqueOrThrow({
      where: {
        email: email,
        password: password
      }
    });
    prisma.$disconnect();

    return {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email
    };
  } catch (e) {
    prisma.$disconnect();
    throw createError({
      statusCode: 400,
      statusMessage: 'No user found'
    });
  }
});
