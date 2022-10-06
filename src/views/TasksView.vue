<template>
  <div class="flex flex-col m-5 md:my-10 md:mx-20">
    <the-data></the-data>
    <the-user></the-user>
    <task-buttons></task-buttons>
    <task-data :program="getProgramName"></task-data>
  </div>
</template>

<script>
import TaskButtons from '../components/tasks/TaskButtons.vue';
import TaskData from '../components/tasks/TaskData.vue';
import TheData from '../components/layout/TheData.vue';
import TheUser from '../components/layout/TheUser.vue';

export default {
  components: {
    TaskButtons,
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
