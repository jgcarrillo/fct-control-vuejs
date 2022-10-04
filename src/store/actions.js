import { v4 as uuidv4 } from 'uuid';

export default {
  addTask(context, data) {
    const taskData = { ...data, id: uuidv4() };

    context.commit('addTask', taskData);
  },
  setUserData(context, data) {
    context.commit('setUserData', data);
  },
};
