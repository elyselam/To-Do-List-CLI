//for prompting user input
const readline = require('readline');

class TodoList {
    constructor(name) {
        this._listName = "Friday Todos"
        this.todos = []
    }
    //CREATE
    addTodo(todoText){
        this.todos.push(todoText)
    }

    //READ
    getSpecificTodo(idx) {
        return this.todos[idx]
    }


    //UPDATE

    //update list name
    updateListName(newName) {
        this._listName = newName
    }

    //update todo list item
    updateTodo(idx, newText) {
        this.todo[idx] = newText
    }

    //DELETE
    deleteTodo(idx) {
        this.todoList.splice(idx, 1)
    }

    deleteAll() {
        this.todoList = []
    }
}

// we want to make a TodoList class
// that holds items

//we should able to ADD an item
//we should able to DELETE an item
//we should be able to UPDATE an item
//





// myTodoList.addTodo("Study Front-End")
// myTodoList.addTodo("Study Front-End biyaaatch")

// let currentTodos = myTodoList.todos




// DRIVER CODE 
let myTodoList = new TodoList("Friday Todos")
let stayInProgram = true
let command = ""

//create an instance of the readline program
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

while(stayInProgram === true){
    // Ask question
    console.log("add -> Add Todo")
    console.log("show -> Show All Todos")
    console.log("exit -> GTFO")

    rl.question('What do you want to do', (userInput) => {
        //basic way to prompt user
        command = userInput
        rl.close();
    });

    switch(command) {
        case 'add':
            let newTodoText = ""
            rl.question("What's the new todo?", (userInput) => {
                //basic way to prompt user
                newTodoText = userInput
                rl.close();
            });
            myTodoList.addTodo(newTodoText);
            break;
        case 'show':
            console.log(myTodoList.todoList)
        case 'exit':
            stayInProgram = false;
        default: 
            console.log('not an option');
            break;   
    }
}