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
          <task-item-table
            v-if="getTasks.length > 0"
            v-for="(task, index) in getTasks"
            :key="task.id"
            :index="index"
            :id="task.id"
            :title="task.title"
            :description="task.description"
            :startdate="task.startdate"
            :enddate="task.enddate"
            :hours="task.hours"
          ></task-item-table>
          <tr v-else>
            <td class="search-not-found" colspan="7">No hay tareas para la búsqueda seleccionada</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- container for divs in sm -->
    <div v-if="hasTasks" class="grid grid-cols-1 gap-4 md:hidden mt-4">
      <task-item-card
        v-if="getTasks.length > 0"
        v-for="(task, index) in getTasks"
        :key="task.id"
        :index="index"
        :id="task.id"
        :title="task.title"
        :description="task.description"
        :startdate="task.startdate"
        :enddate="task.enddate"
        :hours="task.hours"
      ></task-item-card>
      <div class="search-not-found">No hay tareas para la búsqueda seleccionada</div>
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
import TaskItemTable from './TaskItemTable.vue';
import TaskItemCard from './TaskItemCard.vue';

export default {
  components: {
    TaskItemTable,
    TaskItemCard,
  },
  props: {
    program: {
      type: String,
      required: true,
    },
  },
  computed: {
    getTasks() {
      const searchTerm = this.$store.getters['getSearchTerm'];
      const tasks = this.$store.getters.getTasks(searchTerm);
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
