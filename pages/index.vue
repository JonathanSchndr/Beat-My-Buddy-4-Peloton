<template>
  <div class="text-center">
    <h1 class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
      <span class="block xl:inline">Beat my Buddy</span>
      <span class="block text-rose-600 xl:inline"> 4 Peloton</span>
    </h1>
    <p class="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">🚲 Track the highscore of your buddy and get notified when it was broken and much more. Login with your Peloton Account or register a new one.</p>
    <div v-if="!isAuth" class="max-w-md mx-auto mt-5 sm:flex sm:justify-center md:mt-8">
      <div class="rounded-md shadow">
        <button @click="showLogin()" class="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white border border-transparent rounded-md bg-rose-600 hover:bg-rose-700 md:py-4 md:text-lg md:px-10"> Login </button>
      </div>
      <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
        <a href="https://www.onepeloton.de/register" target="_blank" class="flex items-center justify-center w-full px-8 py-3 text-base font-medium bg-white border border-transparent rounded-md text-rose-600 hover:bg-gray-50 md:py-4 md:text-lg md:px-10"> Register </a>
      </div>
    </div>
  </div>

  <div class="max-w-3xl mx-auto mt-10 text-center">
    <h2 class="text-3xl font-extrabold text-gray-900">All-in-one platform</h2>
    <p class="mt-4 text-lg text-gray-500">Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec.</p>
  </div>
  <dl class="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
    <div class="relative">
      <dt>
        <svg class="absolute w-6 h-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
        <p class="text-lg font-medium leading-6 text-gray-900 ml-9">Invite team members</p>
      </dt>
      <dd class="mt-2 text-base text-gray-500 ml-9">Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.</dd>
    </div>

    <div class="relative">
      <dt>
        <svg class="absolute w-6 h-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
        <p class="text-lg font-medium leading-6 text-gray-900 ml-9">Notifications</p>
      </dt>
      <dd class="mt-2 text-base text-gray-500 ml-9">Ornare donec rhoncus vitae nisl velit, neque, mauris dictum duis. Nibh urna non parturient.</dd>
    </div>

    <div class="relative">
      <dt>
        <svg class="absolute w-6 h-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
        <p class="text-lg font-medium leading-6 text-gray-900 ml-9">List view</p>
      </dt>
      <dd class="mt-2 text-base text-gray-500 ml-9">Etiam cras augue ornare pretium sit malesuada morbi orci, venenatis. Dictum lacus.</dd>
    </div>

    <div class="relative">
      <dt>
        <svg class="absolute w-6 h-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
        <p class="text-lg font-medium leading-6 text-gray-900 ml-9">Boards</p>
      </dt>
      <dd class="mt-2 text-base text-gray-500 ml-9">Interdum quam pulvinar turpis tortor, egestas quis diam amet, natoque. Mauris sagittis.</dd>
    </div>

    <div class="relative">
      <dt>
        <svg class="absolute w-6 h-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
        <p class="text-lg font-medium leading-6 text-gray-900 ml-9">Keyboard shortcuts</p>
      </dt>
      <dd class="mt-2 text-base text-gray-500 ml-9">Ullamcorper in ipsum ac feugiat. Senectus at aliquam vulputate mollis nec. In at risus odio.</dd>
    </div>

    <div class="relative">
      <dt>
        <svg class="absolute w-6 h-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
        <p class="text-lg font-medium leading-6 text-gray-900 ml-9">Reporting</p>
      </dt>
      <dd class="mt-2 text-base text-gray-500 ml-9">Magna a vel sagittis aliquam eu amet. Et lorem auctor quam nunc odio. Sed bibendum.</dd>
    </div>

    <div class="relative">
      <dt>
        <svg class="absolute w-6 h-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
        <p class="text-lg font-medium leading-6 text-gray-900 ml-9">Calendars</p>
      </dt>
      <dd class="mt-2 text-base text-gray-500 ml-9">Sed mi, dapibus turpis orci posuere integer. A porta viverra posuere adipiscing turpis.</dd>
    </div>

    <div class="relative">
      <dt>
        <svg class="absolute w-6 h-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
        <p class="text-lg font-medium leading-6 text-gray-900 ml-9">Mobile app</p>
      </dt>
      <dd class="mt-2 text-base text-gray-500 ml-9">Quisque sapien nunc nisl eros. Facilisis sagittis maecenas id dignissim tristique proin sed.</dd>
    </div>
  </dl>
</template>

<script>
import { useAuthStore } from "~/stores/auth"

export default {
  data() {
    return {
      isAuth: true
    }
  },
  mounted() {
    this.isAuth = useAuthStore().auth

    useAuthStore().$subscribe(async (mutation, state) => {
      this.isAuth = await state.auth
    })
  },
  methods: {
    showLogin() {
      useAuthStore().$patch({
        showAuth: true,
      })
    }
  }
}
</script>