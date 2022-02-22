<template>
  <div class="min-h-full">
    <TheLogin v-if="!isAuth" />
    <TheHeader />
    <div class="py-10 blur-lg">
      <div class="max-w-3xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-12 lg:gap-8">
        <TheSidebarLeft />
        <slot />
        <TheSidebarRight />
      </div>
    </div>
    <TheFooter />
  </div>
</template>

<script>
import { useAuthStore } from "~/stores/auth"

export default {
  data() {
    return {
      isAuth: true
    }
  },
  created() {
    useAuthStore().$subscribe(async (mutation, state) => {
      this.isAuth = await state.auth
    })
  },
  mounted() {
    this.isAuth = localStorage.getItem('peloton_auth');
  }
}
</script>