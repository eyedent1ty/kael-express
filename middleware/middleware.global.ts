export default defineNuxtRouteMiddleware((to, from) => {
  const userStore = useUserStore();
  if (to.path === '/') {
    return navigateTo('/products');
  }

  if (to.name === 'checkout') {
    if (!userStore.isAuthenticated) {
      return navigateTo('auth?type=login');
    }
  }
});
