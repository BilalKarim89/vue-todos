<script setup>
import { Icon } from "@iconify/vue";
import { computed } from "vue";
import { useStore } from 'vuex';
import TodoCreator from "../components/TodoCreator.vue";
import TodoItem from "../components/TodoItem.vue";

const store = useStore();

const title = computed(() => store.state.title);
const todoList = computed(() => store.state.todos);

const todosCompleted = computed(() => {
  return todoList.value.every((todo) => todo.isCompleted);
});

const fetchTodoList = () => {
  store.commit('fetchTodoList');
};

// Fetch Todo's on page load
fetchTodoList();

const createTodo = (todo) => {
  store.commit('createTodo', todo);
};

const toggleEditTodo = (todoPos) => {
  store.commit('toggleEditTodo', todoPos);
};

const updateTodo = (todoVal, todoPos) => {
  store.commit('updateTodo', { todoVal, todoPos });
};

const toggleTodoComplete = (todoPos) => {
  store.commit('toggleTodoComplete', todoPos);
};

const deleteTodo = (todo) => {
  store.commit('deleteTodo', todo);
};
</script>

<template>
  <main>
    <h1>{{title}}</h1>
    <TodoCreator @create-todo="createTodo">
      <template #button-content>Create</template>
    </TodoCreator>
    <ul class="todo-list" v-if="todoList.length > 0">
      <TodoItem
        v-for="(todo, index) in todoList"
        :todo="todo"
        :index="index"
        @edit-todo="toggleEditTodo"
        @update-todo="updateTodo"
        @toggle-complete="toggleTodoComplete"
        @delete-todo="deleteTodo"
      />
    </ul>
    <p v-else class="todos-msg">
      <Icon icon="noto-v1:sad-but-relieved-face" />
      <span>You have no todo's to complete! Add one!</span>
    </p>
    <p v-if="todosCompleted && todoList.length > 0" class="todos-msg">
      <Icon icon="noto-v1:party-popper" />
      <span>You have completed all your todos!</span>
    </p>
  </main>
</template>

<style scoped lang="scss">
main {
  @apply flex flex-col max-w-[500px] w-full mx-auto my-0 px-4 py-10;
}
main h1 {
  @apply text-center mb-4;
}
main .todo-list {
  @apply flex flex-col gap-5 mt-6;
  list-style: none;
}
main .todos-msg {
  @apply flex items-center justify-center gap-2 mt-6;
}

</style>
