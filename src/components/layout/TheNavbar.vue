<template>
  <div class="w-full">
    <ul class="flex flex-col md:flex-row max-w-screen-xl p-5 mx-auto items-center justify-between">
      <li>
        <base-button link to="/home" class="nav-custom-link">Control FCT</base-button>
      </li>
      <li>
        <base-button link to="/about" class="nav-custom-link">Sobre el proyecto</base-button>
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
