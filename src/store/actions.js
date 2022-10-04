export default {
  addTasks(context, data) {
    const taskData = {
      id: Math.floor(Math.random() + 1),
      taskName: data.taskName,
      content: data.content,
      startDate: data.startDate,
      endDate: data.endDate,
      hours: data.hours,
    };

    context.commit('addTask', taskData);
  },
  setUserData(context, data) {
    context.commit('setUserData', data);
  },
};
