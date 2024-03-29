import { defineStore } from 'pinia';

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

const useUserStore = defineStore('user', {
  state() {
    return {
      userState: null as User | null
    };
  },
  getters: {
    user(): User | null {
      return this.userState;
    },
    isAuthenticated(): boolean {
      return this.userState !== null;
    }
  },
  actions: {
    setUser(user: User) {
      this.userState = user;
    },
    logout() {
      this.userState = null;
    }
  }
});

export { useUserStore };
