<template>
  <h2>Tareas de mis programas</h2>
  <table>
    <thead>
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
