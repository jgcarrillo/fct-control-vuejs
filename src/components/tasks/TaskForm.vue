<template>
  <form @submit.prevent="submitForm" class="space-y-6">
    <div :class="{ error: !title.isValid }">
      <label for="title" class="form-modal-label">Título</label>
      <input
        type="text"
        name="title"
        id="title"
        required
        class="form-modal-input"
        placeholder="Mi primera tarea"
        v-model.trim="title.val"
        maxlength="40"
        @blur="clearValidity('title')"
      />
      <p v-if="!title.isValid">Task title must not be empty.</p>
    </div>
    <div :class="{ error: !description.isValid }">
      <label for="description" class="form-modal-label">Descripción</label>
      <textarea
        name="description"
        id="description"
        placeholder="Escribe detalles sobre tu tarea..."
        required
        class="form-modal-input"
        v-model.trim="description.val"
        maxlength="70"
        @blur="clearValidity('description')"
      ></textarea>
      <p v-if="!description.isValid">Task description must not be empty.</p>
    </div>
    <div :class="{ error: !startdate.isValid }">
      <label for="startdate" class="form-modal-label">F. Inicio</label>
      <input
        type="date"
        name="startdate"
        id="startdate"
        class="form-modal-input"
        required
        v-model.trim="startdate.val"
        @blur="clearValidity('startdate')"
      />
      <p v-if="!startdate.isValid">Check the start date.</p>
    </div>
    <div :class="{ error: !enddate.isValid }">
      <label for="enddate" class="form-modal-label">F. Fin</label>
      <input
        type="date"
        name="enddate"
        id="enddate"
        class="form-modal-input"
        required
        v-model.trim="enddate.val"
        @blur="clearValidity('enddate')"
      />
      <p v-if="!enddate.isValid">Check the end date.</p>
    </div>
    <div :class="{ error: !hours.isValid }">
      <label for="hours" class="form-modal-label">Horas</label>
      <input
        type="number"
        name="hours"
        id="hours"
        required
        placeholder="8"
        class="form-modal-input"
        step="0.1"
        max="400"
        min="0"
        v-model.trim="hours.val"
        @blur="clearValidity('hours')"
      />
      <p v-if="!hours.isValid">Task hours must not be empty.</p>
    </div>
    <base-button class="base-button w-full">{{ this.edit ? 'Actualizar tarea' : 'Introducir tarea' }}</base-button>
  </form>
</template>

<script>
import BaseButton from '../ui/BaseButton.vue';
import { checkDates, formatDate, retrieveDate } from '../../helpers/helpers';

export default {
  components: {
    BaseButton,
  },
  emits: ['save-task', 'update-task'],
  props: {
    task: {
      type: Object,
      required: false,
      value: '',
    },
    edit: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      title: {
        val: this.task?.title || '',
        isValid: true,
      },
      description: {
        val: this.task?.description || '',
        isValid: true,
      },
      startdate: {
        val: (this.task !== undefined ? retrieveDate(this.task?.startdate) : '') || '',
        isValid: true,
      },
      enddate: {
        val: (this.task !== undefined ? retrieveDate(this.task?.enddate) : '') || '',
        isValid: true,
      },
      hours: {
        val: this.task?.hours || '',
        isValid: true,
      },
      formIsValid: true,
    };
  },
  methods: {
    clearValidity(input) {
      this[input].isValid = true;
    },
    validateForm() {
      this.formIsValid = true;

      if (this.title.val.trim() === '') {
        this.title.isValid = false;
        this.formIsValid = false;
      }
      if (this.description.val.trim() === '') {
        this.description.isValid = false;
        this.formIsValid = false;
      }
      if (this.startdate.val === '') {
        this.startdate.isValid = false;
        this.formIsValid = false;
      }
      if (this.enddate.val === '') {
        this.enddate.isValid = false;
        this.formIsValid = false;
      }
      if (!checkDates(formatDate(this.startdate.val), formatDate(this.enddate.val))) {
        this.startdate.isValid = false;
        this.enddate.isValid = false;
        this.formIsValid = false;
      }
      if (this.hours.val === '') {
        this.hours.isValid = false;
        this.formIsValid = false;
      }
    },
    submitForm() {
      if (!this.edit) {
        this.validateForm();

        if (!this.formIsValid) return;

        const taskData = {
          title: this.title.val,
          description: this.description.val,
          startdate: formatDate(this.startdate.val),
          enddate: formatDate(this.enddate.val),
          hours: this.hours.val,
        };

        this.$emit('save-task', taskData);
      } else {
        this.validateForm();

        if (!this.formIsValid) return;

        const taskData = {
          id: this.task.id,
          title: this.title.val,
          description: this.description.val,
          startdate: formatDate(this.startdate.val),
          enddate: formatDate(this.enddate.val),
          hours: this.hours.val,
        };

        this.$emit('update-task', taskData);
      }
    },
  },
};
</script>
