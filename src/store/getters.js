export default {
  getTasks(state) {
    return state.tasks;
  },
  getUserData(state) {
    return state.userData;
  },
  hasTasks(state) {
    return state.tasks && state.tasks.length > 0;
  },
};
