class Todo {

    constructor(title, description, dueDate, priority, status) {
        this._title = title;
        this._description = description;
        this._dueDate = dueDate;
        this._priority = priority;
        this._status = status;
    }

    set title(value) {
        this._title = value;
    }

    get title() {
        return this._title;
    }

    set description(value) {
        this._description = value;
    }

    get description() {
        return this._description;
    }

    set dueDate(value) {
        this._dueDate = value;
    }

    get dueDate() {
        return this._dueDate;
    }

    set priority(value) {
        this._priority = value;
    }

    get priority() {
        return this._priority;
    }

    set status(value) {
        this._status = value;
    }

    get status() {
        return this._status;
    }
}

export default Todo;
