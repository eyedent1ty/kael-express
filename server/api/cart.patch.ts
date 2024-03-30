import prisma from '../prisma';

export default defineEventHandler(async (event) => {
  const { id, action } = await readBody(event);
  const ACTIONS = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT'
  };

  try {
    let data;

    if (action === ACTIONS.INCREMENT) {
      data = {
        quantity: {
          increment: 1
        }
      };
    } else {
      data = {
        quantity: {
          decrement: 1
        }
      };
    }

    const updatedCartItem = await prisma.cartItem.update({
      where: {
        id
      },
      data
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
