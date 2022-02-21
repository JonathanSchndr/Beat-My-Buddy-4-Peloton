import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    auth: false,
    sessionId: null,
    userId: null
  }),

  actions: {
    // refreshSession() {
    //   const refreshSession = useApi('/auth/check_session', {
    //     'session_id': this.sessionId,
    //   });
    //   return refreshSession
    // },
    async login(user, password) {
      const result = await useApi({ method: 'POST', path: '/auth/login', params: { 'username_or_email': user, password, 'with_pubsub': false } })
      if (result.status === 401) {
        return false
      }

      this.auth = true
      this.sessionId = result.session_id
      this.userId = result.user_id

      return true
    },
    // logout() {
    //   const logout = useApi('/auth/logout', {
    //     'session_id': this.sessionId,
    //   }, 'POST');
    //   return logout
    // }
  },
})
