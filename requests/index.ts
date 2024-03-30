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
  if (!firstName || !lastName || !email || !password) {
    return;
  }

  const { data: registeredUser, error } = await useFetch(ROUTES.REGISTER, {
    method: 'POST',
    body: {
      firstName,
      lastName,
      email,
      password
    }
  });

  return error.value ? error : registeredUser.value;
};

// /login route
const httpLoginUser = async (
  email: string,
  password: string
): Promise<FetchError | User> => {
  if (!email || !password) {
    return Error('Invalid email or password');
  }

  const { data: loggedInUser, error } = await useFetch<User>(ROUTES.LOGIN, {
    method: 'POST',
    body: {
      email,
      password
    }
  });

  if (error.value || loggedInUser.value === null) {
    return error.value!;
  }

  userStore.setUser(toRaw(loggedInUser.value));
  localStorage.setItem('id', String(loggedInUser.value.id));
  localStorage.setItem('firstName', loggedInUser.value.firstName);
  localStorage.setItem('lastName', loggedInUser.value.lastName);
  localStorage.setItem('email', loggedInUser.value.email);

  return loggedInUser.value;
};

export { httpRegisterUser, httpLoginUser };
