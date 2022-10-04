<template>
  <form @submit.prevent="submitForm" class="space-y-6">
    <div>
      <label for="title" class="form-modal-label">Título</label>
      <input
        type="text"
        name="title"
        id="title"
        class="form-modal-input"
        placeholder="Mi primera tarea"
        required
        v-model="title.val"
      />
    </div>
    <div>
      <label for="description" class="form-modal-label">Descripción</label>
      <textarea
        name="description"
        id="description"
        placeholder="Escribe detalles sobre tu tarea..."
        class="form-modal-input"
        v-model="description.val"
      ></textarea>
    </div>
    <div>
      <label for="startdate" class="form-modal-label">F. Inicio</label>
      <input type="date" name="startdate" id="startdate" class="form-modal-input" required v-model="startdate.val" />
    </div>
    <div>
      <label for="enddate" class="form-modal-label">F. Fin</label>
      <input type="date" name="enddate" id="enddate" class="form-modal-input" required v-model="enddate.val" />
    </div>
    <div>
      <label for="hours" class="form-modal-label">Horas</label>
      <input type="number" name="hours" id="hours" placeholder="8" class="form-modal-input" required v-model="hours.val" />
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
  emits: ['save-task'],
  data() {
    return {
      title: {
        val: '',
        isValid: true,
      },
      description: {
        val: '',
        isValid: true,
      },
      startdate: {
        val: '',
        isValid: true,
      },
      enddate: {
        val: '',
        isValid: true,
      },
      hours: {
        val: '',
        isValid: true,
      },
    };
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
    submitForm() {
      const taskData = {
        title: this.title.val,
        description: this.description.val,
        startdate: this.startdate.val,
        enddate: this.enddate.val,
        hours: this.hours.val,
      };

      this.$emit('save-task', taskData);
    },
  },
};
</script>
