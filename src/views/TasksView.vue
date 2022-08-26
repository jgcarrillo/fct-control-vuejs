<template>
  <section>
    <the-data student="Jorge Gómez Carrillo" nre="3161216" course="2021/2022"></the-data>
    <the-user
      number="45587854/878-9-8"
      education="Desarrollo de Aplicaciones Web - LOE"
      company="Your Company"
      startDate="20-03-2022"
      endDate="20-06-2022"
      hours="400"
    ></the-user>
    <task-filters></task-filters>
    <task-form program="program-program"></task-form>
    <task-actions></task-actions>
  </section>
</template>

<script>
import TaskFilters from '../components/tasks/TaskFilters.vue';
import TaskForm from '../components/tasks/TaskForm.vue';
import TaskActions from '../components/tasks/TaskActions.vue';
import TheData from '../components/layout/TheData.vue';
import TheUser from '../components/layout/TheUser.vue';

export default {
  components: {
    TaskFilters,
    TaskForm,
    TaskActions,
    TheData,
    TheUser,
  },
};
</script>
