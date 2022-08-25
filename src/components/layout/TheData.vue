<template>
  <div>
    <h2>Tareas de los programas formativos</h2>
  </div>
  <div><strong>Alumno </strong>{{ studentToUpperCase }}</div>
  <div><strong>NRE </strong>{{ nre }}</div>
  <div><strong>Curso </strong>{{ course }}</div>
</template>

<script>
export default {
  props: {
    student: {
      type: String,
      required: true,
    },
    nre: {
      type: String,
      required: true,
    },
    course: {
      type: String,
      required: true,
    },
  },
  computed: {
    studentToUpperCase() {
      return this.student.toUpperCase();
    },
  },
};
</script>
