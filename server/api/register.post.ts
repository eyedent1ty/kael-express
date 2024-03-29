export default defineEventHandler(async (event) => {
  const { firstName, lastName, email, password } = await readBody(event);

  if (!firstName || !lastName || !email || !password) {
    return {
      message: 'Invalid data'
    }
  }

  console.log(event);
});