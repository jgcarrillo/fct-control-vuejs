<template>
  <form class="space-y-6">
    <div>
      <label for="title" class="form-modal-label">Título</label>
      <input type="text" name="title" id="title" class="form-modal-input" placeholder="Mi primera tarea" required />
    </div>
    <div>
      <label for="description" class="form-modal-label">Descripción</label>
      <textarea
        name="description"
        id="description"
        placeholder="Escribe detalles sobre tu tarea..."
        class="form-modal-input"
      ></textarea>
    </div>
    <div>
      <label for="startdate" class="form-modal-label">F. Inicio</label>
      <input type="date" name="startdate" id="startdate" class="form-modal-input" required />
    </div>
    <div>
      <label for="enddate" class="form-modal-label">F. Fin</label>
      <input type="date" name="enddate" id="enddate" class="form-modal-input" required />
    </div>
    <div>
      <label for="hours" class="form-modal-label">Horas</label>
      <input type="number" name="hours" id="hours" placeholder="8" class="form-modal-input" required />
    </div>
    <base-button class="base-button w-full">Introducir tarea</base-button>
  </form>
</template>

<script>
import BaseButton from '../ui/BaseButton.vue';

export default {
  components: {
    BaseButton,
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
  },
};
</script>
