import Todo from "./todo";

class Project {

    constructor(name) {
        this.name = name;
        this.icon = icon;
        this.todo_list = [];
    }

    addTodo(todo) {
        this.todo_list.push(todo);
    }

    addTodo(title, description, dueDate, priority, status) {
        this.addTodo(new Todo(title, description, dueDate, priority, status));
    }

    get name() {
        return this.name;
    }
    
    get icon() {
        return this.icon;
    }

    get todo_list() {
        return this.todo_list;
    }

    set name(value) {
        this.name = value;
    }
    
    set icon(value) {
        this.name = value;
    }

    set todo_list(value) {
        this.todo_list = value;
    }
}

export default { Project, Todo };
