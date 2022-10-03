<template>
  <div class="flex flex-col min-h-screen">
    <the-navbar></the-navbar>
    <router-view></router-view>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheNavbar from './components/layout/TheNavbar.vue';
import TheFooter from './components/layout/TheFooter.vue';

export default {
  components: {
    TheNavbar,
    TheFooter,
  },
};
</script>
