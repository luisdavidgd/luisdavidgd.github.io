function todos() {
  return {
    increment: 3,
    task: "",
    todos: [
      {
        id: 1,
        task: "Open VS code",
        isComplete: true,
      },
      {
        id: 2,
        task: "Write a todo app in alpinejs",
        isComplete: false,
      },
    ],

    addNewTask() {
      if (this.task.trim() === "") return;
      this.todos.push({
        id: this.increment++,
        task: this.task,
        isComplete: false,
      });
      this.task = "";
    },

    removeTask(todoToRemove) {
      if (confirm("Are you sure you want to delete this task?")) {
        this.todos = this.todos.filter((todo) => todo.id != todoToRemove);
      }
    },
  };
}