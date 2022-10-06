<template>
  <form @submit.prevent="submitForm" class="space-y-6">
    <div :class="{ error: !name.isValid }">
      <label for="name" class="form-modal-label">Nombre y apellidos</label>
      <input
        type="text"
        name="name"
        id="name"
        class="form-modal-input"
        placeholder="Juan García García"
        required
        v-model="name.val"
        maxlength="40"
        @blur="clearValidity('name')"
      />
      <p v-if="!name.isValid">Name must not be empty.</p>
    </div>
    <div :class="{ error: !nre.isValid }">
      <label for="nre" class="form-modal-label">NRE</label>
      <input
        type="text"
        name="nre"
        id="nre"
        required
        placeholder="8754214"
        class="form-modal-input"
        v-model="nre.val"
        maxlength="7"
        @blur="clearValidity('nre')"
      />
      <p v-if="!nre.isValid">NRE must not be empty and needs to have 7 numbers.</p>
    </div>
    <div :class="{ error: !year.isValid }">
      <label for="year" class="form-modal-label">Curso</label>
      <input
        type="text"
        name="year"
        id="year"
        placeholder="2022/2023"
        class="form-modal-input"
        required
        v-model="year.val"
        @blur="clearValidity('year')"
      />
      <p v-if="!year.isValid">Year must not be empty. Check also the format</p>
    </div>
    <div :class="{ error: !company.isValid }">
      <label for="company" class="form-modal-label">Empresa</label>
      <input
        type="text"
        name="company"
        id="company"
        placeholder="PC Componentes S.L."
        class="form-modal-input"
        required
        v-model="company.val"
        maxlength="40"
        @blur="clearValidity('company')"
      />
      <p v-if="!company.isValid">Company must not be empty.</p>
    </div>
    <div :class="{ error: !startdate.isValid }">
      <label for="startdate" class="form-modal-label">F. Inicio</label>
      <input type="date" name="startdate" id="startdate" class="form-modal-input" required v-model="startdate.val" />
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
        v-model="enddate.val"
        @blur="clearValidity('startdate')"
      />
      <p v-if="!enddate.isValid">Check the start date.</p>
    </div>
    <div>
      <label for="hours" class="form-modal-label">Horas</label>
      <input
        type="number"
        name="hours"
        id="hours"
        placeholder="400"
        class="form-modal-input"
        required
        v-model="hours.val"
        step="0.1"
        max="400"
        min="0"
        @blur="clearValidity('enddate')"
      />
      <p v-if="!hours.isValid">Hours must not be empty.</p>
    </div>
    <base-button type="submit" class="base-button w-full">Introducir datos</base-button>
  </form>
</template>

<script>
import BaseButton from '../ui/BaseButton.vue';
import { checkYear, checkDates, formatDate } from '../../helpers/helpers';

export default {
  components: {
    BaseButton,
  },
  emits: ['save-data', 'close'],
  data() {
    return {
      name: {
        val: '',
        isValid: true,
      },
      nre: {
        val: '',
        isValid: true,
      },
      year: {
        val: '',
        isValid: true,
      },
      company: {
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
      formIsValid: true,
    };
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
    clearValidity(input) {
      this[input].isValid = true;
    },
    validateForm() {
      this.formIsValid = true;

      if (this.name.val.trim() === '') {
        this.name.isValid = false;
        this.formIsValid = false;
      }
      if (this.nre.val.trim() === '') {
        this.nre.isValid = false;
        this.formIsValid = false;
      }
      if (this.year.val === '' || !checkYear(this.year.val)) {
        this.year.isValid = false;
        this.formIsValid = false;
      }
      if (this.company.val === '') {
        this.company.isValid = false;
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
      this.validateForm();

      if (!this.formIsValid) return;

      const formUserData = {
        name: this.name.val,
        nre: this.nre.val,
        year: this.year.val,
        company: this.company.val,
        startdate: formatDate(this.startdate.val),
        enddate: formatDate(this.enddate.val),
        hours: this.hours.val,
      };

      this.$emit('save-data', formUserData);
    },
  },
};
</script>
