document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {

    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value;

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    createTaskElement(taskText);

    saveTask(taskText);

    taskInput.value = "";
}

function createTaskElement(taskText) {

    const li = document.createElement("li");

    li.innerHTML = `
        <span onclick="completeTask(this)">
            ${taskText}
        </span>

        <button class="delete-btn" onclick="deleteTask(this)">
            Delete
        </button>
    `;

    document.getElementById("taskList").appendChild(li);
}

function deleteTask(button) {

    const li = button.parentElement;
    const taskText = li.querySelector("span").innerText;

    removeTaskFromStorage(taskText);

    li.remove();
}

function completeTask(task) {
    task.classList.toggle("completed");
}

function saveTask(task) {

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach(task => {
        createTaskElement(task);
    });
}

function removeTaskFromStorage(taskText) {

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks = tasks.filter(task => task !== taskText);

    localStorage.setItem("tasks", JSON.stringify(tasks));
}