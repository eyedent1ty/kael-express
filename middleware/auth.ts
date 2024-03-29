export default defineNuxtRouteMiddleware((to, from) => {
  const userStore = useUserStore();

  if (userStore.isAuthenticated) {
    console.log('AUTHENTICATED');
    return abortNavigation();
  }
});