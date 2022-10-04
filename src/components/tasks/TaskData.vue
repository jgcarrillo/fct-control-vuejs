<template>
  <div class="flex flex-col mb-5 mt-7">
    <h2 class="text-xl">Tareas del programa: {{ program }}</h2>

    <table v-if="hasTasks" class="text-center mt-7 overflow-x-auto w-full text-sm">
      <thead class="text-gray-700 uppercase">
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
          <td>
            <base-button class="base-button mr-2">Editar</base-button>
            <base-button class="base-button--red mr-2">Borrar</base-button>
          </td>
        </tr>
      </tbody>
    </table>
    <h3
      v-else
      class="text-center text-2xl md:text-3xl mt-12 font-bold text-transparent bg-gradient-to-t bg-clip-text from-blue-500 to-green-500"
    >
      No hay tareas para este programa
    </h3>
  </div>
</template>

<script>
import BaseButton from '../ui/BaseButton.vue';

export default {
  components: {
    BaseButton,
  },
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
