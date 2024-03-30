import { FetchError } from 'ofetch';
import type { User } from './index';

const isFetchError = (input: unknown): input is FetchError => {
  return input instanceof FetchError;
};

const isUser = (input: unknown): input is User => {
  return (
    typeof input === 'object' &&
    input !== null &&
    'id' in input &&
    'firstName' in input &&
    'lastName' in input &&
    'email' in input
  );
};

export { isFetchError, isUser };
