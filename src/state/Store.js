export const Store = (() => {
  let tasks = [];

  return {
    setTasks(newTasks) {
      tasks = newTasks;
    },
    getTasks() {
      return [...tasks];
    }
  };
})();
