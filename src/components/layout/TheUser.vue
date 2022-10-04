<template>
  <div class="mb-5 overflow-x-auto">
    <h2 class="font-xl md:text-2xl font-bold mb-2">Tareas de mis programas</h2>
    <table class="table-auto border w-full text-center text-xs md:text-base">
      <thead class="bg-gray-300">
        <tr>
          <th>Conv/anex/prog</th>
          <th>Enseñanza</th>
          <th>Programa</th>
          <th>F. inicio</th>
          <th>F. fin</th>
          <th>Horas</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ getUserNumber }}</td>
          <td>{{ getUserEducation }}</td>
          <td>{{ getUserData.company }}</td>
          <td>{{ getUserData.startdate }}</td>
          <td>{{ getUserData.enddate }}</td>
          <td>{{ getUserData.hours }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  computed: {
    getUserData() {
      return this.$store.getters['getUserData'];
    },
    getUserNumber() {
      return this.$store.getters['getUserNumber'];
    },
    getUserEducation() {
      return this.$store.getters['getUserEducation'];
    },
  },
};
</script>
