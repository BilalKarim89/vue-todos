<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <header>
    <nav class="container">
      <div class="branding">
        <img src="@/assets/Vue_Logo_Black.png" alt="" />
        <h1>Vue Todos</h1>
      </div>
      <ul class="nav-routes">
        <RouterLink :to="{ name: 'todos' }">Home</RouterLink>
        <RouterLink :to="{ name: 'about' }">About</RouterLink>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  @apply bg-[#f1f1f1];
}
header nav {
  @apply flex items-center px-4 py-[25px];
}
header nav .branding {
  @apply flex items-center gap-2;
}
header nav .branding img {
  @apply max-w-[50px];
}
header nav .branding h1 {
  @apply text-2xl;
}
header nav .nav-routes {
  @apply flex flex-[1] justify-end gap-3;
  list-style: none;
}
header nav .nav-routes a {
  @apply no-underline text-inherit;
}

</style>
