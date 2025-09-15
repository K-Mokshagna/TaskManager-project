// ======== USERNAME & SETTINGS =========
function getUsername() {
  return localStorage.getItem("username") || "User";
}

function setUsername(name) {
  localStorage.setItem("username", name);
}

// ======== TASK MANAGEMENT =========
function getTasks() {
  return JSON.parse(localStorage.getItem("tasks") || "[]");
}

function saveTasks(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask(task) {
  const tasks = getTasks();
  tasks.push(task);
  saveTasks(tasks);
}

function deleteTask(index) {
  const tasks = getTasks();
  tasks.splice(index, 1);
  saveTasks(tasks);
}

function toggleComplete(index) {
  const tasks = getTasks();
  tasks[index].completed = !tasks[index].completed;
  saveTasks(tasks);
}

// ======== DARK MODE =========
function setDarkMode(enable) {
  if (enable) document.body.classList.add("dark-mode");
  else document.body.classList.remove("dark-mode");
  localStorage.setItem("darkMode", enable);
}

function loadDarkMode() {
  const darkMode = localStorage.getItem("darkMode") === "true";
  setDarkMode(darkMode);
}
