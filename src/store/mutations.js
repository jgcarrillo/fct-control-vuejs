import { useToast } from 'vue-toastification';

const toast = useToast();

export default {
  addTask(state, payload) {
    state.tasks.unshift(payload);
    toast.success('¡Tarea añadida!');
  },
  setUserData(state, payload) {
    state.userData = payload;
    toast.success('¡Datos de usuario introducidos!');
  },
  deleteTask(state, id) {
    state.tasks = state.tasks.filter((task) => task.id !== id);
    toast.error('¡Tarea borrada!');
  },
  updateTask(state, task) {
    let index = state.tasks.findIndex((t) => t.id === task.id);
    if (index !== -1) state.tasks[index] = task;

    toast.info('¡Tarea actualizada!');
  },
};
