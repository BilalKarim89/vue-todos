<script setup>
import { Icon } from "@iconify/vue";
const props = defineProps({
  todo: {
    type: Object,
    default: () => {},
  },
  index: {
    type: Number,
    default: 0,
  },
});

defineEmits(["edit-todo", "update-todo", "toggle-complete", "delete-todo"]);
</script>

<template>
  <li>
    <input
      type="checkbox"
      :checked="todo.isCompleted"
      @input="$emit('toggle-complete', index)"
    />
    <div class="todo">
      <input
        v-if="todo.isEditing"
        type="text"
        :value="todo.todo"
        @input="$emit('update-todo', $event.target.value, index)"
      />
      <span
        v-else
        :class="{
          'completed-todo': todo.isCompleted,
        }"
      >
        {{ todo.todo }}
      </span>
      <p>{{ todo.date }}</p>
    </div>
    <div class="todo-actions">
      <Icon
        v-if="todo.isEditing"
        icon="ph:check-circle"
        class="icon check-icon"
        color="41b080"
        width="22"
        @click="$emit('edit-todo', index)"
      />
      <Icon
        v-else
        icon="ph:pencil-fill"
        class="icon edit-icon"
        color="41b080"
        width="22"
        @click="$emit('edit-todo', index)"
      />
      <Icon
        icon="ph:trash"
        class="icon trash-icon"
        color="f95e5e"
        width="22"
        @click="$emit('delete-todo', todo)"
      />
    </div>
  </li>
</template>

<style lang="scss" scoped>
li {
  @apply flex items-center gap-2.5 bg-[#f1f1f1] shadow-xl px-2.5 py-4;
}
li:hover .todo-actions {
  @apply opacity-100;
}
li input[type="checkbox"] {
  @apply appearance-none w-5 h-5 bg-white shadow-md rounded-[50%] checked:bg-[#41b080];
}
li .todo {
  @apply flex-[1];
}
li .todo .completed-todo {
  @apply line-through;
}
li .todo input[type="text"] {
  @apply w-full px-1.5 py-0.5 border-2 border-solid border-[#41b080];
}
li .todo-actions {
  @apply flex gap-1.5 opacity-0 transition-[150ms] duration-[ease-in-out];
}
li .todo-actions .icon {
  @apply cursor-pointer;
}

</style>
