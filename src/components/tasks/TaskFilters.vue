<template>
  <div class="flex flex-row justify-end space-x-4 mb-5">
    <base-button class="base-button" id="data" @click="handleOpen('data', $event)">Añadir datos</base-button>
    <base-button class="base-button" id="task" @click="handleOpen('task', $event)">Añadir tarea</base-button>
    <base-button class="base-button">Buscar</base-button>
    <base-button class="base-button">Más filtros</base-button>
  </div>

  <base-modal :show="isOpenData" @close="handleCloseData" title="Añade tus datos académicos">
    <user-data-form @save-data="saveUserData"></user-data-form>
  </base-modal>
  <base-modal :show="isOpenTask" @close="handleCloseTask" title="Introduce una tarea">
    <task-form @save-task="saveTask"></task-form>
  </base-modal>
</template>

<script>
import BaseModal from '../ui/BaseModal.vue';
import UserDataForm from '../layout/UserDataForm.vue';
import TaskForm from './TaskForm.vue';

export default {
  components: {
    BaseModal,
    UserDataForm,
    TaskForm,
  },
  data() {
    return {
      isOpenData: false,
      isOpenTask: false,
    };
  },
  methods: {
    handleCloseData() {
      this.isOpenData = false;
    },
    handleCloseTask() {
      this.isOpenTask = false;
    },
    handleOpen(id, evt) {
      if (evt.target.id === 'data') {
        this.isOpenData = true;
      }
      if (evt.target.id === 'task') {
        this.isOpenTask = true;
      }
    },
    saveUserData(data) {
      this.$store.dispatch('setUserData', data);
      this.isOpenData = false;
    },
    saveTask(data) {
      this.$store.dispatch('addTask', data);
      this.isOpenTask = false;
    },
  },
};
</script>
