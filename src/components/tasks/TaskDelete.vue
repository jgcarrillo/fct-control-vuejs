<template>
  <h2 class="text-white">¿Deseas borrar esta tarea?</h2>

  <form @submit.prevent="deleteTask">
    <base-button class="base-button--red w-full mt-2">Borrar</base-button>
  </form>
</template>

<script>
import BaseButton from '../ui/BaseButton.vue';

export default {
  components: {
    BaseButton,
  },
  emits: ['delete'],
  props: {
    task: '',
  },
  methods: {
    deleteTask() {
      const tasks = this.$store.getters['getTasks'];
      const filtered = tasks.filter((task) => task.id !== this.task);

      this.$store.dispatch('setTasks', filtered);

      this.$emit('delete');
    },
  },
};
</script>
