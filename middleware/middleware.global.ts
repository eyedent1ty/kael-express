export default defineNuxtRouteMiddleware((to, from) => {
  const userStore = useUserStore();
  
  if (to.name === 'products' || to.name === 'checkout' ) {
    if (userStore.user === null) {
      return navigateTo('auth?type=login')
    }
  }
});