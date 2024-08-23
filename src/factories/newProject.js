export class Project {
  title;
  id;
  taskArray = [];

  constructor(title, id) {
    this.title = title;
    this.id = id;
  }

  // Update title when user renames project

  set updateTitle(input) {
    this.title = input;
  }

  taskToArray(task) {
    this.taskArray.push(task);
  }
}
