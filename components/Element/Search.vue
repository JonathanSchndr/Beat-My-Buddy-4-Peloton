<template>
  <div class="relative z-40 max-w-xl mx-auto transition-all transform bg-white divide-y divide-gray-100 shadow-2xl rounded-t-xl ring-1 ring-black ring-opacity-5" :class="{ 'rounded-b-xl': value.length < 4 }">
    <div class="relative">
      <svg class="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
      </svg>
      <input v-model="value" type="text" class="w-full h-12 pr-4 text-gray-800 placeholder-gray-400 bg-transparent border-0 pl-11 focus:ring-0 sm:text-sm" placeholder="Username search..." role="combobox" aria-expanded="false" aria-controls="options" @keyup="searching()" @keyup.enter="submit()">
    </div>

    <div v-if="value.length > 3" class="absolute z-50 w-full bg-white shadow-2xl rounded-b-xl">
      <ul v-if="users.total > 0" class="p-3 overflow-y-auto max-h-96 scroll-py-3">
        <li v-for="user in users.data" :key="user.id">
          <button @click="submit()" class="flex w-full p-3 text-left cursor-pointer select-none hover:bg-gray-100 group rounded-xl">
            <img :src="user.image_url" class="w-10 h-10 rounded-full" />
            <div class="flex-auto ml-4">
              <p class="text-sm font-medium text-gray-700">{{ user.username }}</p>
              <p class="text-sm text-gray-500">Peloton ID: {{ user.id }}</p>
            </div>
          </button>
        </li>
      </ul>

      <div v-else class="px-6 text-sm text-center py-14 sm:px-14">
        <svg class="w-6 h-6 mx-auto text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p class="mt-4 font-semibold text-gray-900">No users found</p>
        <p class="mt-2 text-gray-500">Please try again.</p>
      </div>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from "~/stores/auth"

export default {
  data() {
    return {
      value: '',
      users: {
        data: [],
        total: 0
      }
    }
  },
  methods: {
    searching() {
      if(useAuthStore().auth) {
        if(this.value.length > 3) {
          useApi({
            method: 'GET',
            path: '/api/user/search',
            params: {
              user_query: this.value,
              limit: 10
            }
          }).then((data) => {
            this.users = data
          });
        }
      } else {
        this.value = '',
        this.$router.push('/')
        useAuthStore().$patch({
          showAuth: true,
        })
      }
    },
    submit() {
      this.$router.push(`/user/${this.value}`);
      this.value = ''
      this.users = { data: [], total: 0 }
    }
  }
}
</script>
