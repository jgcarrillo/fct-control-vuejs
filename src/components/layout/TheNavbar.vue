<template>
  <div class="w-full">
    <ul class="flex flex-row max-w-screen-xl p-5 mx-auto items-center justify-between">
      <li class="nav-custom-link">
        <base-button link to="/">Control FCT</base-button>
      </li>
      <li class="nav-custom-link">
        <base-button link to="/about">Sobre el proyecto</base-button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.router-link-active {
  text-decoration: underline;
  text-decoration-thickness: 0.2em;
}
</style>
