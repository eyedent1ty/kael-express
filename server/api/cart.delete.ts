import prisma from '../prisma';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  try {
    const deletedCartItem = prisma.cartItem.delete({
      where: {
        id: body.id
      }
    });

    prisma.$disconnect();
    return deletedCartItem;
  } catch (e) {
    prisma.$disconnect();
    throw createError({
      statusCode: 400,
      statusMessage: 'Cart Item cannot be deleted'
    });
  }
});
