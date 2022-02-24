import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    auth: false,
    sessionId: null,
    userId: null
  }),

  actions: {
    async login(user, password) {
      const result = await useApi({ method: 'POST', path: '/auth/login', params: { 'username_or_email': user, password, 'with_pubsub': false } })
      if (result.status === 401) {
        return false
      }

      localStorage.setItem('peloton_auth', true)
      localStorage.setItem('peloton_session_id', result.session_id)
      localStorage.setItem('peloton_user_id', result.user_id)

      this.auth = true
      this.sessionId = result.session_id
      this.userId = result.user_id

      return true
    },
    async logout() {
      const result = await useApi({ method: 'POST', path: '/auth/logout', params: { 'session_id': this.sessionId } })

      localStorage.removeItem('peloton_auth')
      localStorage.removeItem('peloton_session_id')
      localStorage.removeItem('peloton_user_id')

      this.auth = false
      this.sessionId = null
      this.userId = null

      return true
    }
  },
})
