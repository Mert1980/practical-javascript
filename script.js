// VERSION-6 THINKING IN CODE
// REQUIREMENTS FOR VERSION6
// 1- .toggleAll: If everything is true, make everything false
// 2- .toggleAll: Otherwise, make everything true

var todolist = {
    todos: [],
    displayTodos: function(){
      if (this.todos.length === 0){
          console.log('Your todo list is empty!')
      } else {
        console.log('My Todos:')
        for (var i=0; i<this.todos.length; i++){
             if (this.todos[i].completed === true){
                 console.log('(X)',this.todos[i].todoText);
             } else {
                console.log('( )',this.todos[i].todoText);
            }
          }
        }
    },
    addTodo: function (todoText){
        this.todos.push({
            todoText:todoText,
            completed:false
        });
        this.displayTodos();
    },
    changeTodo: function (position,todoText){
        this.todos[position].todoText = todoText;
        this.displayTodos();
    },
    deleteTodo: function(position){
        this.todos.splice(position,1);
        this.displayTodos();
    },
    toggleCompleted: function(position){
        var todo = this.todos[position];
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
    // Case-1:if everything is true, make everything false
        if (completedTodos === totalTodos){
          for (let i=0 ; i<totalTodos ; i++){
            this.todos[i].completed = false;
            }      
    // Case-2:Otherwise, make everything true
        } else {
          for (let i=0 ; i<totalTodos ; i++){
            this.todos[i].completed = true;
            } 
        }
        this.displayTodos();
      }
};