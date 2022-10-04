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
  getUserNumber(state) {
    return state.number;
  },
  getUserEducation(state) {
    return state.education;
  },
};
