import prisma from '../prisma';

export default defineEventHandler(async (event) => {
  const { id, userId } = await readBody(event);

  try {
    const updatedCartItem = await prisma.cartItem.update({
      where: {
        id,
        customerId: userId
      },
      data: {
        quantity: {
          increment: 1
        }
      }
    });

    prisma.$disconnect();

    return updatedCartItem;
  } catch (e) {
    prisma.$disconnect();

    throw createError({
      statusCode: 400,
      statusMessage: 'Cannot update cart item'
    });
  }
});
