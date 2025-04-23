let todoList = [{
  name: 'Make dinner',
  dueDate: '2012-03-16'
}, {
    name: 'Wash dishes',
    dueDate: '2017-12-01'
},
 {
  name: 'Call Charisa',
  dueDate: '2026-11-18'
 }];

deploy();

function deploy() {
  let todoListHTML = '';
  for (let i = 0; i < todoList.length; i++) {
    let displayElement = document.querySelector('.todoDisplay');
    const todoObject = todoList[i];

    const {name, dueDate} = todoObject
    const todoHTML =`
    <div>${name}</div> 
    <div>${dueDate}</div> 
    <button onclick = "todoList.splice(${i}, 1);
    deploy()" class = "delete-todo-button">Delete</button>`;
    todoListHTML += todoHTML;
    displayElement.innerHTML = todoListHTML;
  }
}
function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const dateInputElement = document.querySelector('.js-due-date-input');
  const name = inputElement.value;
  const dueDate = dateInputElement.value;

  todoList.push({
    name,
    dueDate
  });
  inputElement.value = '';
  
  deploy();
}