<template>
  <header class="bg-white shadow-sm">
    <div class="flex items-center justify-between p-4 mx-auto space-x-4 max-w-7xl sm:px-6 lg:px-8">
      <nuxt-link to="/">
        <img class="block w-8" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=rose&shade=500" alt="Beat my Buddy 4 Peloton">
      </nuxt-link>
      <ElementSearch class="w-full" />
      <div>
        <img class="w-8 rounded-full cursor-pointer" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" @click="toggleMenu()">
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
      menuOpen: false
    }
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