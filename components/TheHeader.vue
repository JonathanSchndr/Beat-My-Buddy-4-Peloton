<template>
  <header class="bg-white shadow-sm">
    <div class="flex items-center justify-between p-4 mx-auto space-x-4 max-w-7xl sm:px-6 lg:px-8">
      <nuxt-link to="/">
        <img class="block w-8" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=rose&shade=500" alt="Beat my Buddy 4 Peloton">
      </nuxt-link>
      <ElementSearch class="w-full" />
      <div class="relative">
        <img v-if="isAuth" class="w-8 rounded-full cursor-pointer" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" @click="toggleMenu()">
        <a v-else href="https://github.com/JonathanSchndr/Beat-My-Buddy-4-Peloton" target="_blank"><svg class="w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a>
        <div v-if="menuOpen" class="absolute z-40 py-1 mt-3 bg-white rounded-md shadow-lg -translate-x-2/3 whitespace-nowrap ring-1 ring-black ring-opacity-5 focus:outline-none">
          <!-- <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1">Your Profile</a>
          <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1">Settings</a> -->
          <button class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" @click="logout()">Sign out</button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { useAuthStore } from "~/stores/auth"

export default {
  data() {
    return {
      menuOpen: false,
      isAuth: false
    }
  },
  mounted() {
    this.isAuth = useAuthStore().auth

    useAuthStore().$subscribe(async (mutation, state) => {
      this.isAuth = await state.auth
    })
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    },
    logout() {
      this.menuOpen = false
      useAuthStore().logout()
    }
  }
}
</script>