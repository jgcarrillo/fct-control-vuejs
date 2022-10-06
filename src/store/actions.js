import { v4 as uuidv4 } from 'uuid';
import { useToast } from 'vue-toastification';

const toast = useToast();

export default {
  addTask(context, data) {
    const taskData = { ...data, id: uuidv4() };

    context.commit('addTask', taskData);
    toast.success('¡Tarea añadida!');
  },
  setUserData(context, data) {
    context.commit('setUserData', data);
    toast.success('¡Datos de usuario introducidos!');
  },
  setTasks(context, tasks) {
    context.commit('setTasks', tasks);
  },
};
