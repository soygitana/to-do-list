const form = document.querySelector('form');
const ul1 = document.querySelector('.todo');
const btndone = document.querySelector('.btndone');
const tasksNumber = document.querySelector('.counter');
const listItems = document.getElementsByClassName('task');
const input = document.querySelector('.mytask');

const addTask = (e) => {
    e.preventDefault()
    const tasksName = input.value;
    if (tasksName === "") return;
    const task = document.createElement('li');
    task.className = 'task';
    task.innerHTML = tasksName + '<button class="btndone">done</button>';
    ul1.appendChild(task);
    input.value = "";
    tasksNumber.textContent = listItems.length;


    const removeTask = () => {
        ul1.removeChild(task);
        tasksNumber.textContent--;
    }
    task.querySelector(".btndone").addEventListener("click", removeTask);

}

form.addEventListener('submit', addTask)