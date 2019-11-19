// VERSION-3 OBJECTS
// REQUIREMENTS FOR VERSION3
// 1-IT SHOULD STORE THE TODOS ARRAY ON AN OBJECT
// 2-IT SHOULD HAVE A DISPLAYTODOS METHOD
// 3-IT SHOULD HAVE AN ADDTODO METHOD
// 4-IT SHOULD HAVE A CHANGETODO METHOD
// 5-IT SHOULD HAVE A DELETETODO METHOD

   var todolist = {
    todos: ['item1', 'item2', 'item3'],
    displayTodos: function(){
        console.log('here:',this.todos)},
    addTodo: function (a){
        this.todos.push(a);
        this.displayTodos();},
        //todolist.addTo('added item')
    changeTodo: function (index, value){
        this.todos[index] = value;
        this.displayTodos();},
        //todolist.changeTo(0,'changed')
    deleteTodo: function(index){
        this.todos.splice(index,1);
        this.displayTodos();
        //tolist.deleteTo(0)
    }
    };