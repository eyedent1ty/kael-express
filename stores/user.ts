import { defineStore } from 'pinia';
import type { User } from '~/types';

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
      localStorage.removeItem('id');
      localStorage.removeItem('firstName');
      localStorage.removeItem('lastName');
      localStorage.removeItem('email');
    }
  }
});

export { useUserStore };
