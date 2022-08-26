<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="mode">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null,
    },
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: String,
      required: false,
      default: '/',
    },
  },
};
</script>

<style scoped>
button,
a {
  background-color: red;
  color: white;
  padding: 0.5em;
  margin: 0.2em;
  border-radius: 0.5em;
  cursor: pointer;
  transition: all 300ms;
}

.nav {
  background-color: lightblue;
  color: black;
}

button:hover,
a:hover {
  background-color: tomato;
}
</style>
