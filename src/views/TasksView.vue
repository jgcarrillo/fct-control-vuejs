<template>
  <div class="flex flex-col m-5 md:my-10 md:mx-20">
    <the-data></the-data>
    <the-user></the-user>
    <task-filters></task-filters>
    <task-data :program="getProgramName"></task-data>
  </div>
</template>

<script>
import TaskFilters from '../components/tasks/TaskFilters.vue';
import TaskData from '../components/tasks/TaskData.vue';
import TheData from '../components/layout/TheData.vue';
import TheUser from '../components/layout/TheUser.vue';

export default {
  components: {
    TaskFilters,
    TaskData,
    TheData,
    TheUser,
  },
  computed: {
    getProgramName() {
      const programName = this.$store.getters['getProgramName'];
      return programName;
    },
  },
};
</script>
