<template>
  <div class="flex flex-col mb-5 mt-7">
    <div class="flex text-center flex-col md:flex-row justify-between">
      <h2 class="text-xl underline underline-offset-4">Tareas del programa: {{ program }}</h2>
      <h2 class="text-xl font-bold mt-2 md:m-0">
        Horas restantes:
        <span
          class="text-center text-2xl md:text-2xl mt-12 font-bold text-transparent bg-gradient-to-t bg-clip-text from-blue-500 to-green-500"
          >{{ getRemainingHours <= 0 ? '¡FCT Completada!' : `${getRemainingHours} horas` }}</span
        >
      </h2>
    </div>

    <!-- container for table in md -->
    <div v-if="hasTasks" class="overflow-auto rounded-lg shadow hidden md:block mt-16">
      <table class="text-center w-full">
        <thead class="text-gray-700 uppercase text-sm bg-gray border-b-2 border-gray-200">
          <tr>
            <th class="tracking-wide">No.</th>
            <th class="tracking-wide">Título</th>
            <th class="tracking-wide">Descripción</th>
            <th class="tracking-wide">F. Inicio</th>
            <th class="tracking-wide">F. Fin</th>
            <th class="tracking-wide">Horas</th>
            <th class="tracking-wide" colspan="2">Acciones</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100">
          <tr v-for="(task, index) in getTasks">
            <td class="p-3 font-bold text-blue-500 hover:underline whitespace-nowrap">{{ `#${index + 1}` }}</td>
            <td class="p-3 text-gray-700 whitespace-nowrap">{{ task.title }}</td>
            <td class="p-3 text-gray-700 whitespace-nowrap">{{ task.description }}</td>
            <td class="w-20 p-3 text-gray-700 whitespace-nowrap">{{ task.startdate }}</td>
            <td class="w-20 p-3 text-gray-700 whitespace-nowrap">{{ task.enddate }}</td>
            <td class="w-20 p-3 text-gray-700 whitespace-nowrap">{{ task.hours }}</td>
            <td class="p-3 text-gray-700 whitespace-nowrap">
              <base-button class="base-button mr-2">Editar</base-button>
              <base-button class="base-button--red mr-2">Borrar</base-button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- container for divs in sm -->
    <div v-if="hasTasks" class="grid grid-cols-1 gap-4 md:hidden mt-4">
      <div v-for="(task, index) in getTasks" class="p-4 rounded-lg shadow space-y-3">
        <div class="flex items-center space-x-2 justify-center text-sm">
          <div class="font-bold text-blue-500 hover:underline">{{ `#${index + 1}` }}</div>
          <div class="text-gray-700 font-medium">{{ task.title }}</div>
        </div>

        <div class="flex items-center space-x-2 justify-center text-sm">
          <div>
            F. Inicio: <span class="text-gray-500">{{ task.startdate }}</span>
          </div>
          <div>
            F. Fin: <span class="text-gray-500">{{ task.enddate }}</span>
          </div>
          <div>
            Horas: <span class="text-gray-500">{{ task.hours }}</span>
          </div>
        </div>

        <div class="flex items-center space-x-2 justify-center text-sm">
          <div class="text-gray-700">{{ task.description }}</div>
        </div>

        <div class="flex items-center space-x-2 justify-center text-sm">
          <div>
            <base-button class="base-button mr-2">Editar</base-button>
            <base-button class="base-button--red mr-2">Borrar</base-button>
          </div>
        </div>
      </div>
    </div>

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
    getRemainingHours() {
      const remainingHours = this.$store.getters['getRemainingHours'];
      return remainingHours;
    },
  },
};
</script>
