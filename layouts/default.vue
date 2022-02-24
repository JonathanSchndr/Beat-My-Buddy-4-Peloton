<template>
  <div class="min-h-full">
    <TheLogin v-if="showAuth" />
    <TheHeader />
    <main class="max-w-3xl py-10 mx-auto sm:px-6 lg:max-w-7xl lg:px-8">
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
      sessionId: localStorage.getItem('peloton_session_id') || false,
      userId: localStorage.getItem('peloton_user_id') || false
    })

    useAuthStore().$subscribe(async (mutation, state) => {
      this.showAuth = await state.showAuth
    })
  }
}
</script>