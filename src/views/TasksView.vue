<template>
  <h1>FCT</h1>
  <task-filters></task-filters>
  <task-form program="program-program"></task-form>
  <task-actions></task-actions>
</template>

<script>
import TaskFilters from '../components/tasks/TaskFilters.vue';
import TaskForm from '../components/tasks/TaskForm.vue';
import TaskActions from '../components/tasks/TaskActions.vue';

export default {
  components: {
    TaskFilters,
    TaskForm,
    TaskActions,
  },
};
</script>
