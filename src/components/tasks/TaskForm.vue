<template>
  <section class="border">
    <h2>Tareas del programa: {{ program }}</h2>
  </section>
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
