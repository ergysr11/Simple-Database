
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value.trim();
    if (task !== '') {
        const listItem = document.createElement('li');
        listItem.textContent = task;
        listItem.onclick = toggleTask;
        document.getElementById('taskList').appendChild(listItem);
        taskInput.value = '';
    }
}

function toggleTask() {
    this.classList.toggle('completed');
}
