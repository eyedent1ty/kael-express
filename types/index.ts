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
}

export type { Product, FetchProducts, CartItem };
