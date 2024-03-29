export default defineEventHandler(async (event) => {
  const { email, password } = await readBody(event);

  

  return 'Register Post Handler';
});