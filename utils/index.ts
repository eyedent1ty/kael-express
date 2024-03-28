const generateRandomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * max + min);
};

const getDiscountedPrice = (
  originalPrice: number,
  discountPercentage: number
) => {
  return Math.floor(originalPrice * (1 - discountPercentage / 100));
};

export { generateRandomNumber, getDiscountedPrice };
