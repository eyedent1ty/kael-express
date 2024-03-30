import prisma from '../prisma';

export default defineEventHandler(async (event) => {
  const query = getQuery(event);

  try {
    const cartItems = await prisma.cartItem.findMany({
      where: {
        customerId: Number(query.userId)
      }
    });

    prisma.$disconnect();
    return cartItems;
  } catch (e) {
    prisma.$disconnect();

    throw createError({
      statusCode: 400,
      statusMessage: 'Cannot fetch cart items to the given userId'
    });
  }
});
