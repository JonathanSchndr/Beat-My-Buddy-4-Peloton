<template>
  <div class="fixed inset-0 z-10 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
      <div class="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" aria-hidden="true"></div>
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
      <div class="inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
        <h1 class="mb-4 font-bold text-center">Beat my Buddy 4 Peloton</h1>
        <div class="space-y-6">
          <div>
            <label for="user" class="block text-sm font-medium text-gray-700"> Username or Email address </label>
            <div class="mt-1">
              <input v-model="user" id="user" name="user" type="text" autocomplete="user" required class="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-rose-500 focus:border-rose-500 sm:text-sm">
            </div>
          </div>

          <div>
            <label for="password" class="block text-sm font-medium text-gray-700"> Password </label>
            <div class="mt-1">
              <input v-model="password" id="password" name="password" type="password" autocomplete="current-password" required class="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-rose-500 focus:border-rose-500 sm:text-sm">
            </div>
          </div>

          <div>
            <button type="submit" class="flex justify-center w-full px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500" @click="submit()">Sign in</button>
          </div>
        </div>
        <p class="mt-4 text-xs">To use Beat my Buddy 4 Peloton, you need to log in with your Peloton account. If you don't have an account yet, you can create one <a href="https://www.onepeloton.de/register" target="_blank" class="underline">here</a>.</p>
      </div>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from "~/stores/auth"

export default {
  data() {
    return {
      user: null,
      password: null
    }
  },
  methods: {
    submit() {
      useAuthStore().login(this.user, this.password).then((data) => {
        if (!data) {
          alert('Login incorrect.')
        }

        this.user = null
        this.password = null
      })
    }
  }
}
</script>
