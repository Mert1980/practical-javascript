// VERSION-10 CLICK TO DELETE
// REQUIREMENTS FOR VERSION 10
// 1-There should be a way to creat delete buttons
// 2-There should be a delete button for each todo
// 3-Each li should have an id that has the todo position
// 4-Delete buttons should have access to the todo id
// 5-Clicking delete should update todoList.todos and the DOM

let todoList = {
  todos: [],
  addTodo: function (todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
  },
  changeTodo: function (position, todoText) {
    this.todos[position].todoText = todoText;
  },
  deleteTodos: function (position) {
    this.todos.splice(position, 1);
  },
  toggleCompleted: function (position) {
    let todo = this.todos[position];
    todo.completed = !todo.completed;
  },
  toggleAll: function (){
    let totalTodos = this.todos.length;
    let completedTodos = 0;
  // Get number of completed todos
    for (let i=0 ; i<totalTodos ; i++){
      if (this.todos[i].completed === true){
        completedTodos++;
        }
      }
  // Case 1:if everything is true, make everything false
      if (completedTodos === totalTodos){
        for (let i=0 ; i<totalTodos ; i++){
          this.todos[i].completed = false;
          }      
  // Case 1:Otherwise, make everything true
      } else {
        for (let i=0 ; i<totalTodos ; i++){
          this.todos[i].completed = true;
          } 
      }
    }
}
let handler = {
addTodo: function(){
    let addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = '';
    view.displayTodos();
},
changeTodo: function(){
  let changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
  let changeTodoTextInput = document.getElementById('changeTodoTextInput');
  todoList.changeTodo(changeTodoPositionInput.value, changeTodoTextInput.value);
  changeTodoTextInput.value = '';
  changeTodoPositionInput.value = '';
  view.displayTodos();
},
deleteTodos: function(position){
  todoList.deleteTodos(position);
  view.displayTodos();
},
toggleCompleted: function(){
  let toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
  todoList.toggleCompleted(toggleCompletedPositionInput.value);
  toggleCompletedPositionInput.value = '';
  view.displayTodos();
},
toggleAll: function(){
  todoList.toggleAll();
  view.displayTodos();
}
}
let view = {
displayTodos: function(){
  let todosUl = document.querySelector('ul');
  todosUl.innerHTML = '';

  for (let i=0 ; i < todoList.todos.length ; i++){
    let todoLi = document.createElement('li');
    let todo = todoList.todos[i];
    let todoTextWithCompletion = '';

    if(todo.completed === true){
      todoTextWithCompletion = '(X) ' + todo.todoText;
    } else {
      todoTextWithCompletion = '( ) ' + todo.todoText;
    }
    
    todoLi.id = i;
    todoLi.textContent = todoTextWithCompletion;
    todoLi.appendChild(this.createDeleteButton());
    todosUl.appendChild(todoLi);
  }
},
createDeleteButton: function (){
  var deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.className = 'deleteButton';
  return deleteButton;
},
setUpEventListeners: function(){
  let todoUl = document.querySelector('ul');
  todoUl.addEventListener('click', function(event){
  // get the element that was clicked on
  let elementClicked = event.target;
  // check if the element is a click button
  if (elementClicked.className === 'deleteButton'){
    handler.deleteTodos(parseInt(elementClicked.parentNode.id));
    }
  });
}
}
view.setUpEventListeners();