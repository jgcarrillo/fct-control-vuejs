<template>
  <div class="p-4 rounded-lg shadow space-y-3">
    <div class="flex items-center space-x-2 justify-center text-sm">
      <div class="font-bold text-blue-500 hover:underline cursor-pointer">{{ `#${index + 1}` }}</div>
      <div class="text-gray-700 font-medium">{{ title }}</div>
    </div>

    <div class="flex items-center space-x-2 justify-center text-sm">
      <div>
        F. Inicio: <span class="text-gray-500">{{ startdate }}</span>
      </div>
      <div>
        F. Fin: <span class="text-gray-500">{{ enddate }}</span>
      </div>
      <div>
        Horas: <span class="text-gray-500">{{ hours }}</span>
      </div>
    </div>

    <div class="flex items-center space-x-2 justify-center text-sm">
      <div class="text-gray-700">{{ description }}</div>
    </div>

    <div class="flex items-center space-x-2 justify-center text-sm">
      <div>
        <base-button class="base-button mr-2">Editar</base-button>
        <base-button class="base-button--red mr-2">Borrar</base-button>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from '../ui/BaseButton.vue';

export default {
  components: {
    BaseButton,
  },
  props: {
    index: {
      type: Number,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    startdate: {
      type: String,
      required: true,
    },
    enddate: {
      type: String,
      required: true,
    },
    hours: {
      type: Number,
      required: true,
    },
  },
};
</script>
