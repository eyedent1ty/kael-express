import prisma from '../prisma';

export default defineEventHandler(async (event) => {
  const {
    userId,
    id,
    brand,
    category,
    description,
    discountPercentage,
    images,
    price,
    rating,
    stock,
    thumbnail,
    title,
    quantity
  } = await readBody(event);

  if (
    !brand ||
    !category ||
    !description ||
    !discountPercentage ||
    !images ||
    !price ||
    !rating ||
    !stock ||
    !thumbnail ||
    !title ||
    !quantity
  ) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid Inputs'
    });
  }

  try {
    const createdCartItem = await prisma.cartItem.create({
      data: {
        id,
        brand,
        category,
        description,
        discountPercentage,
        images,
        price,
        rating,
        stock,
        thumbnail,
        title,
        quantity,
        customer: {
          connect: {
            id: userId
          }
        }
      }
    });

    prisma.$disconnect();
    return createdCartItem;

  } catch (e) {
    prisma.$disconnect();
    throw createError({
      statusCode: 400,
      statusMessage: 'Cannot add cart item'
    });
  }
});
