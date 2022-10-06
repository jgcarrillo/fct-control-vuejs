<template>
  <tr>
    <td class="p-3 font-bold text-blue-500 hover:underline whitespace-nowrap">{{ `#${index + 1}` }}</td>
    <td class="p-3 text-gray-700 whitespace-nowrap">{{ title }}</td>
    <td class="p-3 text-gray-700 whitespace-nowrap">{{ description }}</td>
    <td class="w-20 p-3 text-gray-700 whitespace-nowrap">{{ startdate }}</td>
    <td class="w-20 p-3 text-gray-700 whitespace-nowrap">{{ enddate }}</td>
    <td class="w-20 p-3 text-gray-700 whitespace-nowrap">{{ hours }}</td>
    <td class="p-3 text-gray-700 whitespace-nowrap">
      <base-button class="base-button mr-2">Editar</base-button>
      <base-button class="base-button--red mr-2">Borrar</base-button>
    </td>
  </tr>
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
