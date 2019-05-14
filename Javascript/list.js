
window.setTimeout(function() {
  // put all of your JS code from the lecture here
var todo = [];
var input = prompt ("What would you like to do?");

while (input !== "quit"){
	//handle input
	if (input === "list" ) {
		console.log(todo);
	}
	else if (input === "new") {
		//ask for a new todo
	var newTodo = prompt("Enter new todo");
	//add to todos array
	todo.push(newTodo);
	}
	//ask again for a new input
	var input = prompt ("What would you like to do?");
}
console.log("Ok, You quit the app");
}, 500);