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



let myTodoList = new TodoList("Friday Todos")

myTodoList.addTodo("Study Front-End")
myTodoList.addTodo("Study Front-End biyaaatch")

let currentTodos = myTodoList.todos