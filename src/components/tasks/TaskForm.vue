<template>
  <div class="flex flex-row mb-5">
    <h2 class="text-xl">Tareas del programa: {{ program }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    program: {
      type: String,
      required: true,
    },
  },
};
</script>
