<template>
  <div class="flex flex-col mb-5 mt-7">
    <h2 class="text-xl">Tareas del programa: {{ program }}</h2>

    <table v-if="hasTasks" class="text-center mt-7">
      <thead>
        <tr>
          <th>#</th>
          <th>Título</th>
          <th>Descripción</th>
          <th>F. Inicio</th>
          <th>F. Fin</th>
          <th>Horas</th>
          <th colspan="2">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(task, index) in getTasks">
          <td>{{ index + 1 }}</td>
          <td>{{ task.title }}</td>
          <td>{{ task.description }}</td>
          <td>{{ task.startdate }}</td>
          <td>{{ task.enddate }}</td>
          <td>{{ task.hours }}</td>
          <td>Editar</td>
          <td>Borrar</td>
        </tr>
      </tbody>
    </table>
    <h3 v-else>No hay tareas para este programa</h3>
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
  computed: {
    getTasks() {
      const tasks = this.$store.getters.getTasks;
      return tasks;
    },
    hasTasks() {
      return this.$store.getters['hasTasks'];
    },
  },
};
</script>
