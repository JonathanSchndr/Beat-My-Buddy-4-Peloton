import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    auth: false,
    sessionId: null,
    userId: null
  }),

  getters: {
    isAuth: (state) => state.auth,
  },

  actions: {
    refreshSession() {
      const refreshSession = pelotonApi('/auth/check_session', {
        'session_id': this.sessionId,
      });
      return refreshSession
    },
    login(user, password) {
      const login = pelotonApi('/auth/login', {
        'username_or_email': user,
        'password': password,
        'with_pubsub': false
      }, 'POST');

      return login
    },
    logout() {
      const logout = pelotonApi('/auth/logout', {
        'session_id': this.sessionId,
      }, 'POST');
      return logout
    }
  },
})
