<template>
  <form class="space-y-6">
    <div>
      <label for="name" class="form-modal-label">Nombre y apellidos</label>
      <input type="text" name="name" id="name" class="form-modal-input" placeholder="Juan García García" required />
    </div>
    <div>
      <label for="nre" class="form-modal-label">NRE</label>
      <input type="text" name="nre" id="nre" placeholder="8754214" class="form-modal-input" required />
    </div>
    <div>
      <label for="year" class="form-modal-label">Curso</label>
      <input type="text" name="year" id="year" placeholder="2022/2023" class="form-modal-input" required />
    </div>
    <div>
      <label for="company" class="form-modal-label">Empresa</label>
      <input type="text" name="company" id="company" placeholder="PC Componentes S.L." class="form-modal-input" required />
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
      <input type="number" name="hours" id="hours" placeholder="400" class="form-modal-input" required />
    </div>
    <base-button class="base-button w-full">Introducir datos</base-button>
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
