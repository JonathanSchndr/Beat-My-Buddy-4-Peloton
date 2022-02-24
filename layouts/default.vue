<template>
  <div class="min-h-full">
    <TheLogin v-if="showAuth" />
    <TheHeader />
    <main class="max-w-3xl px-4 py-10 mx-auto sm:px-6 lg:max-w-7xl lg:px-8">
      <slot />
    </main>
    <TheFooter />
  </div>
</template>

<script>
import { useAuthStore } from "~/stores/auth"

export default {
  data() {
    return {
      showAuth: false
    }
  },
  mounted() {
    useAuthStore().$patch({
      auth: localStorage.getItem('peloton_auth') || false,
      sessionId: localStorage.getItem('peloton_session_id') || null,
      userId: localStorage.getItem('peloton_user_id') || null
    })

    useAuthStore().$subscribe((mutation, state) => {
      this.showAuth = state.showAuth
    })
  }
}
</script>