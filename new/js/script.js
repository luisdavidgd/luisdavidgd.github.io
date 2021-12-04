document.addEventListener("alpine:init", () => {
  Alpine.data("alpine", () => ({
    menu: [
      {
        id: 1,
        name: "Home",
        class: "fas fa-home",
      },
      {
        id: 2,
        name: "About",
        class: "fas fa-user",
      },
      {
        id: 3,
        name: "Portfolio",
        class: "fas fa-briefcase",
      },
      {
        id: 4,
        name: "Contact",
        class: "fas fa-envelope-open",
      },
      {
        id: 5,
        name: "Blog",
        class: "fas fa-edit",
      },
    ],
    activeMenu: "",
  }));
});

function todos() {
  return {
    //data
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
    /**/

    addNewTask() {
      //Return if empty
      if (this.task.trim() === "") return;
      //Add new todo and clear task
      this.todos.push({
        id: this.increment++,
        task: this.task,
        isComplete: false,
      });
      this.task = "";
    },
    removeTask(todoToRemove) {
      if (confirm("Are you sure you want to delete this task?", "asdad")) {
        this.todos = this.todos.filter((todo) => todo.id != todoToRemove);
      }
    },
    init: function () {
      console.log("la logia esta");
    },
  };
}
