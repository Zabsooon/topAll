class Todo {

    constructor(title, description, dueDate, priority, status) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.status = status;
    }

    set title(value) {
        this.title = value;
    }

    get title() {
        return this.title;
    }

    set description(value) {
        this.description = value;
    }

    get description() {
        return this.description;
    }

    set dueDate(value) {
        this.dueDate = value;
    }

    get dueDate() {
        return this.dueDate;
    }

    set priority(value) {
        this.priority = value;
    }

    get priority() {
        return this.priority;
    }

    set status(value) {
        this.status = value;
    }

    get status() {
        return this.status;
    }
}

export default Todo;
