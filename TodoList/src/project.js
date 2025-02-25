import Todo from "./todo";

class Project {

    constructor(id, name, icon) {
        this._id = id;
        this._name = name;
        this._icon = icon;
        this._todo_list = [];
    }

    addTodo(todo) {
        this._todo_list.push(todo);
    }

    addTodo(title, description, dueDate, priority, status) {
        this.addTodo(new Todo(title, description, dueDate, priority, status));
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }
    
    get icon() {
        return this._icon;
    }

    get todo_list() {
        return this._todo_list;
    }

    set id(value) {
        this._id = value;
    }

    set name(value) {
        this._name = value;
    }
    
    set icon(value) {
        this._name = value;
    }

    set todo_list(value) {
        this._todo_list = value;
    }
}

export { Project };
