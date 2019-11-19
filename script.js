// VERSION-7 HTML AND THE DOM
// REQUIREMENTS FOR VERSION7
// 1- .toggleAll: If everything is true, make everything false
// 2- .toggleAll: Otherwise, make everything true

let todoList = {
    todos: [],
    displayTodos: function () {
      if (this.todos.length === 0) {
        console.log('Your todo list is empty');
      } else {
        console.log('My Todos:');
        for (let i = 0; i < this.todos.length; i++) {
            if (this.todos[i].completed === true){
            console.log('(X)', this.todos[i].todoText);
            } else {
              console.log('()', this.todos[i].todoText);
              }
        }
      }
    },
    addTodo: function (todoText) {
      this.todos.push({
        todoText: todoText,
        completed: false
      });
      this.displayTodos();
    },
    changeTodo: function (position, todoText) {
      this.todos[position].todoText = todoText;
      this.displayTodos();
    },
    deleteTodos: function (position) {
      this.todos.splice(position, 1);
      this.displayTodos();
    },
    toggleCompleted: function (position) {
      let todo = this.todos[position];
      todo.completed = !todo.completed;
      this.displayTodos();
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
        this.displayTodos();
      }
    }

// 1. We want to access to the display todos button
const displayTodosButton = document.getElementById('displayTodosButton');

// console.log(displayTodosButton);
// 2. We want to run displayTodos method, when someone clicks the
//  displayTodos button
displayTodosButton.addEventListener('click', function(){
    todoList.displayTodos();
   });
const toggleAllButton = document.getElementById('toggleAllButton');
toggleAllButton.addEventListener('click', function(){
    todoList.toggleAll();
});

