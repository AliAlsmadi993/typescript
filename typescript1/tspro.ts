interface Task {
    id: number;
    title: string;
    states: string;
    startDate: string;
    endDate: string;
}

function displayTasks() {
    const taskContainer = document.getElementById("task-table-body");
    if (!taskContainer) return;

    const tasks: Task[] = JSON.parse(localStorage.getItem("tasks") || "[]");

    taskContainer.innerHTML = "";
    for (const task of tasks) {
        taskContainer.innerHTML += `
            <tr>
                <td>${task.id}</td>
                <td>${task.title}</td>
                <td>${task.states}</td>
                <td>${task.startDate}</td>
                <td>${task.endDate}</td>
                <td>
                    <button class="btn btn-warning btn-sm" onclick="editTask(${task.id})">Edit</button>
                    <button class="btn btn-danger btn-sm" onclick="deleteTask(${task.id})">Delete</button>
                </td>
            </tr>
        `;
    }
}

function addTask(event: Event) {
    event.preventDefault();

    const tasks: Task[] = JSON.parse(localStorage.getItem("tasks") || "[]");

    const task: Task = {
        id: Date.now(),
        title: (document.getElementById("title") as any).value,
        states: (document.getElementById("states") as any).value,
        startDate: (document.getElementById("startDate") as any).value,
        endDate: (document.getElementById("endDate") as any).value,
    };

    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    (document.getElementById("task-form") as any).reset();
    displayTasks();
}





//  delete create new array without task we need deleted
function deleteTask(taskId: number) {
    let tasks: Task[] = JSON.parse(localStorage.getItem("tasks") || "[]");

    tasks = tasks.filter(task => task.id !== taskId);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    displayTasks();
}





function editTask(taskId: number) {
    let tasks: Task[] = JSON.parse(localStorage.getItem("tasks") || "[]");
    let taskIndex = -1;
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === taskId) {
            taskIndex = i;
            break;
        }
    }
        if (taskIndex === -1) return;

    const task = tasks[taskIndex];

    (document.getElementById("title") as any).value = task.title;
    (document.getElementById("states") as any).value = task.states;
    (document.getElementById("startDate") as any).value = task.startDate;
    (document.getElementById("endDate") as any).value = task.endDate;

    deleteTask(taskId);
}

document.getElementById("task-form")?.addEventListener("submit", addTask);
document.addEventListener("DOMContentLoaded", displayTasks);
