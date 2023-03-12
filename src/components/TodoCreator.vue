<script setup>
import { reactive } from "vue";

const emit = defineEmits(["create-todo"]);

const todo = reactive({
  todo: "",
  invalid: false,
  errMsg: "",
});

const createTodo = () => {
  todo.invalid = false;
  if (todo.todo !== "") {
    emit("create-todo", todo.todo);
    todo.todo = "";
    return;
  }
  todo.invalid = true;
  todo.errMsg = "Todo value cannot be empty!";
};
</script>

<template>
  <div class="input-wrap" :class="{ 'input-err': todo.invalid }">
    <input type="text" v-model="todo.todo" />
    <button @click="createTodo()">
      <slot name="button-content"> Create </slot>
    </button>
  </div>
  <p class="err-msg" v-if="todo.invalid">{{ todo.errMsg }}</p>
</template>

<style lang="scss" scoped>
.input-wrap {
  @apply flex transition-[250ms] duration-[ease] border-2 border-solid border-[#41b080] focus-within:shadow-[0_-4px_6px_-1px_rgb(0_0_0_/_0.1),0_-2px_4px_-2px_rgb(0_0_0_/_0.1)];
}
.input-wrap.input-err {
  @apply border-[red];
}
.input-wrap input {
  @apply w-full px-1.5 py-2 border-[none];
}
.input-wrap input:focus {
  outline: none;
}
.input-wrap button {
  @apply px-4 py-2 border-[none];
}
.err-msg {
  @apply text-xs text-center text-[red] mt-1.5;
}

</style>
