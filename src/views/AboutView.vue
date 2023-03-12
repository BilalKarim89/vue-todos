<template>
  <div class="container about">
    <h1>Vue Todos</h1>
    <p>
      Vue Todos is a CRUD Todo tracking application.
    </p>
    <p>
      Track your daily task's using this todo tracker with abilities to save, complete, edit & delete todos.
    </p>
  </div>
</template>

<style scoped lang="scss">
@media (min-width: 1024px) {
  .about {
    @apply px-4 py-[25px];
  }
  .about h1 {
    @apply mb-[15px];
  }
  .about p {
    @apply mb-3;
  }
}
</style>
