import type { User } from '../types/index';
import { FetchError } from 'ofetch';

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

export { httpRegisterUser, httpLoginUser };
