// VERSION-01 ARRAYS
//Store todos
var todos = ["item 1", "item 2", "item 3"];

//Display todos
console.log("My Todos:", todos);

//Add new todos
todos.push("item 4");
todos.push("item 5");
console.log("My Todos after 2 times Push:", todos);

//Change item in existing todos
todos[0] = "item 1 updated";
console.log("My Todos after first item updated:", todos);

//Delete item in existing todos
todos.splice(0, 1); //from first item(index) one item delete.
console.log("My Todos; first item deleted:", todos);
todos.splice(3, 1); //from third item(index) one item delete.
console.log("My Todos; last item deleted:", todos);

// Examples for Array

//Add item as first item to todos.
var unshiftedItem = todos.unshift("item 1");
console.log("My Todos; first item unshifted again:", todos);
console.log("unShifted item:", todos[0]);

//Remove first item from todos.
var shiftedItem = todos.shift();
console.log("My Todos; first item deleted with shift:", todos);
console.log("Shifted item:", shiftedItem);

// VERSION-2 FUNCTIONS 
// REQUIREMENTS
// 1-IT SHOULD HAVE A FUNCTION TO DISPLAY TODOS
// 2-IT SHOULD HAVE A FUNCTION TO ADD NEW TODOS
// 3-IT SHOULD HAVE A FUNCTION TO CHANGE A TODO
// 4-IT SHOULD HAVE A FUNCTION TO DELETE A TODO

var todos = ['item1', 'item2', 'item3']; // global var which we can acces from any function
    
   function displayTodos () {
        console.log('my todos:', todos);
   }
    displayTodos();
   
   function addTodo(todo){
       todos.push(todo);
       displayTodos();
   }
   addTodo('item4'); 
   
   function changeTodo(index,value){
       todos[index] = value;
       displayTodos();
   }
   changeTodo(1,'changed');

   function deleteTodo(index){
       todos.splice(index,1);
       displayTodos();
   }
   deleteTodo(2);
