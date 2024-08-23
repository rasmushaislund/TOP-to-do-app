export class Task {
  title;
  deadline;
  description;
  id;
  important;
  completed;

  constructor(
    title,
    deadline,
    description,
    id,
    important = false,
    completed = false,
  ) {
    this.title = title;
    this.deadline = deadline;
    this.description = description;
    this.id = id;
    this.important = important;
    this.completed = completed;
  }

  // Update task data when user edits the task

  set updateTitle(input) {
    this.title = input;
  }

  set updateDeadline(deadline) {
    this.deadline = deadline;
  }

  set updateDescription(text) {
    this.description = text;
  }

  set important(bool) {
    this.important = bool;
  }

  set completed(bool) {
    this.completed = bool;
  }
}
