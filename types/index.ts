interface Product {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  images: string[];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
}

interface FetchProducts {
  limit: number;
  products: Product[];
  skip: number;
  total: number;
}

interface CartItem extends Product {
  quantity: number;
  customerId: number;
}

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

export type { Product, FetchProducts, CartItem, User };
