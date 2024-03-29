export default defineEventHandler(async (event) => {
  const { email, password } = await readBody(event);

  console.log(body);

  return 'Register Post Handler';
});