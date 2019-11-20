// VERSION-9 ESCAPE FROM THE CONSOLE
// REQUIREMENTS FOR VERSION 9
// 1-There should be an 'li' element for every todo
// 2-Each 'li' element should contaion .todo Text
// 3-Each 'li' element should show .completed

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
deleteTodos: function(){
  let deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
  todoList.deleteTodos(deleteTodoPositionInput.value);
  deleteTodoPositionInput.value = '';
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
    
    todoLi.textContent = todoTextWithCompletion;
    todosUl.appendChild(todoLi);
  }
}
}
