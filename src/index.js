document.addEventListener("DOMContentLoaded", () => {
   document.getElementById("create-task-form");
  document.getElementById("new-task-description");
  document.getElementById("new-task-priority");
 document.getElementById("tasks");
  newTaskForm.addEventListener("submit", createNewTask);
});
const createNewTask = event => {
  event.preventDefault();
  const newTaskDescription = document.getElementById("new-task-description");
  const newTask = document.createElement("li");
  newTask.innerText = newTaskDescription.value;
  appendNewTask(newTask);
  event.target.reset();
};
const appendNewTask = task => {
  document.getElementById("tasks").appendChild(task);
};