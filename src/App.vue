<template>
  <the-navbar></the-navbar>
  <the-data student="Jorge Gómez Carrillo" nre="3161216" course="2021/2022"></the-data>
  <the-user
    number="45587854/878-9-8"
    education="Desarrollo de Aplicaciones Web - LOE"
    company="Your Company"
    startDate="20-03-2022"
    endDate="20-06-2022"
    hours="400"
  ></the-user>

  <router-view></router-view>
</template>

<script>
import TheData from './components/layout/TheData.vue';
import TheNavbar from './components/layout/TheNavbar.vue';
import TheUser from './components/layout/TheUser.vue';

export default {
  components: {
    TheNavbar,
    TheData,
    TheUser,
  },
};
</script>
