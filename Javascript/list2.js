
window.setTimeout(function() {
  // put all of your JS code from the lecture here
var todos = [];
var input = prompt ("What would you like to do?");

while (input !== "quit"){
	//handle input
	if (input === "list" ) {
		listTodos();
		}
	else if (input === "new") {
		addTodo();
	}
	else if (input === "delete") {
		deleteTodo();
	}
	//ask again for a new input
	var input = prompt ("What would you like to do?");
}
console.log("Ok, You quit the app");

function listTodos(){
		console.log("**********");
		todos.forEach(function(todo, index){
			console.log(index + " : " + todo);
		});	
}

function addTodo(){
			//ask for a new todo
	var newTodo = prompt("Enter new todo");
	//add to todos array
	todos.push(newTodo);
	console.log("Added todo");
}

function deleteTodo(){
	var index = prompt ("Enter index of todo to delete");
	todos.splice(index, 1);
	console.log("Deleted todo");
}
}, 500);