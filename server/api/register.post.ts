export default defineEventHandler(async (event) => {
  const { firstName, lastName, email, password } = await readBody(event);

  console.log({ firstName, lastName, email, password });

  if (!firstName || !lastName || !email || !password) {
    return {
      message: 'Invalid data'
    }
  }
});