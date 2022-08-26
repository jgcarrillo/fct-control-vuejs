export default {
  addTasks(context, data) {
    const taskData = {
      id: Math.floor(Math.random() + 1),
      taskName: data.taskName,
      content: data.content,
      startDate: data.startDate,
      endDate: data.endDate,
      hours: data.hours,
      isValidateByTutor: data.isValidateByTutor,
      isValidateByCompany: data.isValidateByCompany,
    };

    context.commit('addTask', taskData);
  },
};
