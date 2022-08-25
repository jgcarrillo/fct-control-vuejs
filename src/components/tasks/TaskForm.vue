<template>
  <h2>Tareas del programa: {{ program }}</h2>
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
