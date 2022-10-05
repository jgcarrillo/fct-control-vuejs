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
  getProgramName(state) {
    return `${state.userData.name} - ${state.userData.company}`;
  },
  getCountHours(state) {
    let hoursCounter = 0;
    for (const task of state.tasks) {
      hoursCounter += task.hours;
    }

    return hoursCounter;
  },
  getRemainingHours(state, getters) {
    return state.userData.hours - getters.getCountHours;
  },
};
