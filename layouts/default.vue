<template>
  <div class="min-h-full">
    <TheLogin />
    <TheHeader />
    <div class="py-10">
      <div class="max-w-3xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-12 lg:gap-8">
        <TheSidebarLeft />
        <slot />
        <TheSidebarRight />
      </div>
    </div>
    <TheFooter />
  </div>
</template>