export default {
  addTask(state, payload) {
    state.tasks.push(payload);
  },
  setUserData(state, payload) {
    state.userData = payload;
  },
};
