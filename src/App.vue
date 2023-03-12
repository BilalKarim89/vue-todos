<script setup>
import { RouterView } from "vue-router";
import TodoHeader from "./components/TodoHeader.vue";
</script>

<template>
  <TodoHeader />
  <RouterView />
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&display=swap");

* {
  @apply box-border m-0 p-0;
  font-family: "Rubik", sans-serif;
}
.container {
  @apply max-w-[1100px] mx-auto my-0;
}

</style>
