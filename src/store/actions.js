import { v4 as uuidv4 } from 'uuid';

export default {
  addTask(context, data) {
    const taskData = { ...data, id: uuidv4() };

    context.commit('addTask', taskData);
  },
  setUserData(context, data) {
    context.commit('setUserData', data);
  },
  deleteTask(context, id) {
    context.commit('deleteTask', id);
  },
  updateTask(context, task) {
    context.commit('updateTask', task);
  },
  setSearchTerm(context, searchTerm) {
    context.commit('setSearchTerm', searchTerm);
  },
};
