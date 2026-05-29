function addTask() {

    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value;

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        ${taskText}
        <button class="delete-btn" onclick="deleteTask(this)">
            Delete
        </button>
    `;

    document.getElementById("taskList").appendChild(li);

    taskInput.value = "";
}

function deleteTask(button) {
    button.parentElement.remove();
}