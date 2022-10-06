<template>
  <div class="flex flex-row justify-end space-x-4 mb-5">
    <base-button
      v-tooltip="'Añade tus datos personales'"
      class="base-button--outline"
      id="data"
      @click="handleOpen($event)"
      :disabled="checkIsDisabled"
      >Añadir datos</base-button
    >
    <base-button class="base-button" id="task" @click="handleOpen($event)" :disabled="checkIsDisabled">Añadir tarea</base-button>
    <base-button class="base-button" id="search" @click="handleOpen($event)">Buscar</base-button>
    <base-button class="base-button" id="filters" @click="handleOpen($event)">Más filtros</base-button>
  </div>

  <base-modal :show="isOpenData" @close="handleClose('isOpenData')" title="Añade tus datos académicos">
    <user-data-form @save-data="saveUserData"></user-data-form>
  </base-modal>
  <base-modal :show="isOpenTask" @close="handleClose('isOpenTask')" title="Introduce una tarea">
    <task-form @save-task="saveTask"></task-form>
  </base-modal>
  <base-modal :show="isOpenSearch" @close="handleClose('isOpenSearch')" title="Estamos trabajando en ello">
    <task-search></task-search>
  </base-modal>
  <base-modal :show="isOpenFilters" @close="handleClose('isOpenFilters')" title="Estamos trabajando en ello">
    <task-filters></task-filters>
  </base-modal>
</template>

<script>
import BaseModal from '../ui/BaseModal.vue';
import UserDataForm from '../user/UserDataForm.vue';
import TaskForm from './TaskForm.vue';
import TaskSearch from './TaskSearch.vue';
import TaskFilters from './TaskFilters.vue';

export default {
  components: {
    BaseModal,
    UserDataForm,
    TaskForm,
    TaskSearch,
    TaskFilters,
  },
  data() {
    return {
      isOpenData: false,
      isOpenTask: false,
      isOpenSearch: false,
      isOpenFilters: false,
    };
  },
  methods: {
    handleClose(data) {
      this[data] = false;
    },
    handleOpen(evt) {
      if (evt.target.id === 'data') {
        this.isOpenData = true;
      }
      if (evt.target.id === 'task') {
        this.isOpenTask = true;
      }
      if (evt.target.id === 'search') {
        this.isOpenSearch = true;
      }
      if (evt.target.id === 'filters') {
        this.isOpenFilters = true;
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
  computed: {
    checkIsDisabled() {
      const getRemainingHours = this.$store.getters['getRemainingHours'];

      if (getRemainingHours <= 0) return true;
      else return false;
    },
  },
};
</script>
