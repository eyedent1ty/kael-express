import prisma from '../prisma';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  try {

    let data;

    if (body.customerId !== undefined) {
      data = prisma.cartItem.deleteMany({
        where: {
          customerId: body.customerId
        }
      })
    } else {
      data = prisma.cartItem.delete({
        where: {
          id: body.id
        }
      });
    }
    
    prisma.$disconnect();
    return data;
  } catch (e) {
    prisma.$disconnect();
    throw createError({
      statusCode: 400,
      statusMessage: 'Cart Item cannot be deleted'
    });
  }
});
