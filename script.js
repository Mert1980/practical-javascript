// VERSION-4 BOOLEANS
// REQUIREMENTS FOR VERSION4
// 1-todoList.AddTodo should add objects
// 2-todoList.ChangeTodo should change the todoText property
// 3-todoList.toggleCompleted should change the completed property

var todolist = {
    todos: [],
    displayTodos: function(){
        console.log('here:',this.todos)},
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
    }
};