const Input = document.getElementsByClassName("taskInput")[0];
const Inputbutton = document.getElementsByClassName("addTaskBtn")[0];
const TaskBody = document.getElementsByClassName("taskTableBody")[0];
let taskId = 1;

function addTask() {
  let taskname = Input.value.trim();

  if (taskname === '') {
    return;
  }

  const row = document.createElement("tr");
  row.innerHTML = `
    <td class="index">${taskId}</td>
    <td class="task-name">${taskname}</td>
    <td class="status">
      <select class="status-select">
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>
    </td>
    <td><button class="edit-btn">Edit</button></td>
    <td><button class="remove-btn">Remove</button></td>`;

  TaskBody.appendChild(row);
  taskId += 1;
  Input.value = '';

  // Edit button event listener
  row.querySelector('.edit-btn').addEventListener('click', () => {
    const currentTaskName = row.querySelector('.task-name').textContent;
    const newTaskName = prompt('Edit task', currentTaskName);
    if (newTaskName !== null && newTaskName.trim() !== '') {
      row.querySelector('.task-name').textContent = newTaskName;
    }
  });

  // Remove button event listener
  row.querySelector('.remove-btn').addEventListener('click', () => {
    row.remove();
  });

  // Status dropdown event listener
  const statusSelect = row.querySelector('.status-select');
  statusSelect.addEventListener('change', (event) => {
    statusSelect.value = event.target.value;
  });
}

Inputbutton.addEventListener('click', addTask);
Input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});
