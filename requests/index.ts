import type { CartItem, User } from '../types/index';

// Available Routes
const ROUTES = {
  REGISTER: '/api/register',
  LOGIN: '/api/login',
  CART: '/api/cart'
};

const userStore = useUserStore();

// /register route

const httpRegisterUser = async (
  firstName: string,
  lastName: string,
  email: string,
  password: string
) => {
  const { data: registeredUser, error } = await useFetch<User>(
    ROUTES.REGISTER,
    {
      method: 'POST',
      body: {
        firstName,
        lastName,
        email,
        password
      }
    }
  );

  return {
    registeredUser: toRaw(registeredUser.value),
    error: error.value
  };
};

// /login route
const httpLoginUser = async (email: string, password: string) => {
  const { data: loggedInUser, error } = await useFetch<User>(ROUTES.LOGIN, {
    method: 'POST',
    body: {
      email,
      password
    }
  });

  return {
    loggedInUser: toRaw(loggedInUser.value),
    error: error.value
  };
};

// /cart
const httpPostCartItem = async (cartItem: CartItem) => {
  const { data } = await useFetch('/api/cart', {
    method: 'POST',
    body: {
      ...cartItem
    }
  });

}

const httpUpdateCartItem = async (cartItem: CartItem, action: string) => {
  const { id } = cartItem;
  const { data: updatedCartItem, error } = await useFetch<CartItem>(ROUTES.CART, {
    method: 'PATCH',
    body: {
      id,
      action
    }
  });

  return {
    updatedCartItem: updatedCartItem.value,
    error: error.value
  };
};

export { httpRegisterUser, httpLoginUser, httpUpdateCartItem };
