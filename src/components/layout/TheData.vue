<template>
  <div class="border-2 border-yellow-500 mb-5">
    <h2 class="text-xl bg-yellow-500 text-white font-bold p-1 text-center md:text-left">Tareas de los programas formativos</h2>

    <div class="flex flex-col p-2 items-center mx-auto justify-between md:flex-row">
      <div><span class="student-data-name">Alumno </span>{{ getUserData.name.toUpperCase() }}</div>
      <div><span class="student-data-name">NRE </span>{{ getUserData.nre }}</div>
      <div><span class="student-data-name">Curso </span>{{ getUserData.year }}</div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getUserData() {
      return this.$store.getters['getUserData'];
    },
  },
};
</script>
