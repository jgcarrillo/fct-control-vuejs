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
          <td>{{ number }}</td>
          <td>{{ education }}</td>
          <td>{{ company }}</td>
          <td>{{ startDate }}</td>
          <td>{{ endDate }}</td>
          <td>{{ hours }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    number: {
      type: String,
      required: true,
    },
    education: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    startDate: {
      type: String,
      required: true,
    },
    endDate: {
      type: String,
      required: true,
    },
    hours: {
      type: String,
      required: true,
    },
  },
};
</script>
