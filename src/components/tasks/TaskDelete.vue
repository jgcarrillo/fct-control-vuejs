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
      this.$store.dispatch('deleteTask', this.task);

      this.$emit('delete');
    },
  },
};
</script>
