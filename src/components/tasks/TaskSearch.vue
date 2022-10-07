<template>
  <div class="space-y-6">
    <div>
      <label for="title" class="form-modal-label">Título de la tarea</label>
      <input
        type="text"
        name="title"
        id="title"
        class="form-modal-input"
        placeholder="Mi primera tarea"
        maxlength="40"
        autofocus
        v-model="searchTerm"
        @keyup="submitForm"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchTerm: this.getSearchTerm() !== '' ? this.getSearchTerm() : '',
    };
  },
  emits: ['search'],
  methods: {
    submitForm() {
      this.$store.dispatch('setSearchTerm', this.searchTerm);
    },
    getSearchTerm() {
      return this.$store.getters['getSearchTerm'];
    },
  },
};
</script>
