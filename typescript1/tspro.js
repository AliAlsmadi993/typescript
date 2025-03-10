var _a;
function displayTasks() {
    var taskContainer = document.getElementById("task-table-body");
    if (!taskContainer)
        return;
    var tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    taskContainer.innerHTML = "";
    for (var _i = 0, tasks_1 = tasks; _i < tasks_1.length; _i++) {
        var task = tasks_1[_i];
        taskContainer.innerHTML += "\n            <tr>\n                <td>".concat(task.id, "</td>\n                <td>").concat(task.title, "</td>\n                <td>").concat(task.states, "</td>\n                <td>").concat(task.startDate, "</td>\n                <td>").concat(task.endDate, "</td>\n                <td>\n                    <button class=\"btn btn-warning btn-sm\" onclick=\"editTask(").concat(task.id, ")\">Edit</button>\n                    <button class=\"btn btn-danger btn-sm\" onclick=\"deleteTask(").concat(task.id, ")\">Delete</button>\n                </td>\n            </tr>\n        ");
    }
}
function addTask(event) {
    event.preventDefault();
    var tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    var task = {
        id: Date.now(),
        title: document.getElementById("title").value,
        states: document.getElementById("states").value,
        startDate: document.getElementById("startDate").value,
        endDate: document.getElementById("endDate").value,
    };
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    document.getElementById("task-form").reset();
    displayTasks();
}
function deleteTask(taskId) {
    var tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    tasks = tasks.filter(function (task) { return task.id !== taskId; });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
}
function editTask(taskId) {
    var tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    var taskIndex = -1;
    for (var i = 0; i < tasks.length; i++) {
        if (tasks[i].id === taskId) {
            taskIndex = i;
            break;
        }
    }
    if (taskIndex === -1)
        return;
    var task = tasks[taskIndex];
    document.getElementById("title").value = task.title;
    document.getElementById("states").value = task.states;
    document.getElementById("startDate").value = task.startDate;
    document.getElementById("endDate").value = task.endDate;
    deleteTask(taskId);
}
(_a = document.getElementById("task-form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", addTask);
document.addEventListener("DOMContentLoaded", displayTasks);
