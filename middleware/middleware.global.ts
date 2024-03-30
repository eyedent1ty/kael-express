export default defineNuxtRouteMiddleware((to, from) => {
  const userStore = useUserStore();

  if (process.client) {
    const id = Number(localStorage.getItem('id'));
    const firstName = localStorage.getItem('firstName');
    const lastName = localStorage.getItem('lastName');
    const email = localStorage.getItem('email');

    if (id && firstName && lastName && email) {
      userStore.setUser({
        id,
        firstName,
        lastName,
        email
      });
    }
  }

  if (to.path === '/') {
    return navigateTo('/products');
  }

  if (to.path === '/auth' && userStore.isAuthenticated) {
    return navigateTo('/products');
  }

  if (to.path === '/success' && !userStore.isAuthenticated) {
    return navigateTo('/auth?type=login');
  }

  if (to.path === '/checkout') {
    if (!userStore.isAuthenticated) {
      return navigateTo('auth?type=login');
    }
  }
});
