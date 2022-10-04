export default {
  addTask(state, payload) {
    state.tasks.unshift(payload);
  },
  setUserData(state, payload) {
    state.userData = payload;
  },
};
