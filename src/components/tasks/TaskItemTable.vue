<template>
  <tr>
    <td class="p-3 font-bold text-blue-500 hover:underline whitespace-nowrap cursor-pointer">{{ `#${index + 1}` }}</td>
    <td class="p-3 text-gray-700 whitespace-nowrap">{{ title }}</td>
    <td class="p-3 text-gray-700 whitespace-nowrap">{{ description }}</td>
    <td class="w-20 p-3 text-gray-700 whitespace-nowrap">{{ startdate }}</td>
    <td class="w-20 p-3 text-gray-700 whitespace-nowrap">{{ enddate }}</td>
    <td class="w-20 p-3 text-gray-700 whitespace-nowrap">{{ hours }}</td>
    <td class="p-3 text-gray-700 whitespace-nowrap">
      <base-button class="base-button mr-2" id="edit" @click="handleOpen($event)">Editar</base-button>
      <base-button class="base-button--red mr-2" id="delete" @click="handleOpen($event)">Borrar</base-button>
    </td>
  </tr>

  <base-modal :show="isOpenDelete" @close="handleClose('isOpenDelete')" :title="`Borrar tarea - ${title}`">
    <task-delete :task="this.id" @delete="deleteTask"></task-delete>
  </base-modal>
  <base-modal :show="isOpenEdit" @close="handleClose('isOpenEdit')" :title="`Editar tarea - ${title}`">
    <task-form :edit="true" :task="getTask()" @update-task="updateTask"></task-form>
  </base-modal>
</template>

<script>
import BaseButton from '../ui/BaseButton.vue';
import BaseModal from '../ui/BaseModal.vue';
import TaskDelete from '../tasks/TaskDelete.vue';
import TaskForm from '../tasks/TaskForm.vue';

export default {
  components: {
    BaseButton,
    BaseModal,
    TaskDelete,
    TaskForm,
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
  data() {
    return {
      isOpenDelete: false,
      isOpenEdit: false,
    };
  },
  methods: {
    handleClose(data) {
      this[data] = false;
    },
    handleOpen(evt) {
      if (evt.target.id === 'delete') {
        this.isOpenDelete = true;
      }
      if (evt.target.id === 'edit') {
        this.isOpenEdit = true;
      }
    },
    deleteTask() {
      this.isOpenDelete = false;
    },
    getTask() {
      return {
        id: this.id,
        title: this.title,
        description: this.description,
        startdate: this.startdate,
        enddate: this.enddate,
        hours: this.hours,
      };
    },
    updateTask(task) {
      this.isOpenEdit = false;
      this.$store.dispatch('updateTask', task);
    },
  },
};
</script>
