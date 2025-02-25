import * as projectCss from './project.css'
import * as todoCss from './todo.css'
import { Project } from './project';
import Todo from './todo.js'

export let state = {
    selectedProjectIndex: -1,
    projects: [],
    isRefreshing: false,
}


/*
 * This function creates objects and apply them to the html,
 * therefore they are being generated on the page.
 */
function buildLeftPageDOM() {
    let leftDiv = document.querySelector('#left');
    leftDiv.innerHTML = ''; // Prevent duplication

    let createProjectDialog = document.createElement('dialog');
    createProjectDialog.setAttribute('id', 'createProjectDialog');

    let createProjectBtn = document.createElement('button'); // Shows the dialog
    createProjectBtn.innerText = 'Create New Project';

    createProjectBtn.addEventListener('click', () => {
        console.log("Opening project creation dialog"); // Debugging
        createProjectDialog.showModal();
    });

    let createProjectForm = document.createElement('form');
    createProjectForm.setAttribute('method', 'dialog');

    let createProjectNameLabel = document.createElement('label');
    createProjectNameLabel.innerText = 'Project Name';
    let createProjectNameInput = document.createElement('input');
    createProjectNameInput.setAttribute('id', 'projectName');

    let createProjectSubmitBtn = document.createElement('button');
    createProjectSubmitBtn.innerText = 'Create';

    createProjectSubmitBtn.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent immediate form close

        let name = createProjectNameInput.value.trim();
        if (!name) {
            alert("Project name cannot be empty.");
            return;
        }
        let newProject = new Project(state.projects.length, name, 'default-icon');
        state.projects.push(newProject);
        console.log("Created project:", newProject.name);

        createProjectDOM(newProject); // Add to DOM
        rightRefreshDOM(); // Update right panel
        createProjectDialog.close();
    });

    createProjectForm.appendChild(createProjectNameLabel);
    createProjectForm.appendChild(createProjectNameInput);
    createProjectForm.appendChild(createProjectSubmitBtn);
    createProjectDialog.appendChild(createProjectForm);

    leftDiv.appendChild(createProjectDialog);
    leftDiv.appendChild(createProjectBtn);
}


function buildRightPageDOM() {

    let rightDiv = document.querySelector('#right');
    rightDiv.innerHTML = ''

    let todosDiv = document.createElement('div');
    todosDiv.id = 'todosDiv';
    rightDiv.appendChild(todosDiv);

    let createTodoDialog = document.createElement('dialog');
    let createTodoBtn = document.createElement('button'); /* Shows dialog with create todo button */
    createTodoBtn.innerText = 'Create New Todo';

    createTodoBtn.addEventListener('click', () => {
        createTodoDialog.showModal();
    });

    let createTodoForm = document.createElement('form');
    createTodoForm.setAttribute('method', 'dialog');

    let createTodoElements = ['Title', 'Description', 'DueDate', 'Priority', 'Status'];
    for (let element of createTodoElements) {
        let tempLabel = document.createElement('label');
        tempLabel.setAttribute('for', `todo${element}`);
        tempLabel.innerText = `Todo ${element}`;
        let tempInput = document.createElement('input');
        tempInput.setAttribute('name', `todo${element}`);
        tempInput.setAttribute('id', `todo${element}`);


        createTodoForm.appendChild(tempLabel);
        createTodoForm.appendChild(tempInput);
    }

    let createTodoSubmitBtn = document.createElement('button');
    createTodoSubmitBtn.setAttribute('type', 'submit');
    createTodoSubmitBtn.innerText = 'Create';

    createTodoForm.addEventListener('submit', (e) => {
        e.preventDefault();

        if (state.selectedProjectIndex === -1 || state.selectedProjectIndex >= state.projects.length) {
            alert('You have to choose project');
            return;
        }
        let newTodoTitle = document.querySelector('#todoTitle').value.trim();
        let newTodoDescription = document.querySelector('#todoDescription').value.trim();
        let newTodoDueDate = document.querySelector('#todoDueDate').value.trim();
        let newTodoPriority = document.querySelector('#todoPriority').value.trim();
        let newTodoStatus = document.querySelector('#todoStatus').value.trim();

        console.log(newTodoTitle, newTodoDescription, newTodoDueDate, newTodoPriority, newTodoStatus);

        if (!newTodoTitle || !newTodoDescription || !newTodoDueDate || !newTodoPriority || !newTodoStatus) {
            alert('All fields must be set');
            return;
        }

        let newTodo = new Todo(newTodoTitle,
            newTodoDescription,
            newTodoDueDate,
            newTodoPriority,
            newTodoStatus);
        state.projects.at(state.selectedProjectIndex).todo_list.push(newTodo);
        state.isRefreshing = false;
        rightRefreshDOM();
        createTodoDialog.close();
    });

    createTodoForm.appendChild(createTodoSubmitBtn);
    createTodoDialog.appendChild(createTodoForm);

    rightDiv.appendChild(createTodoDialog);
    rightDiv.appendChild(createTodoBtn);
}


function leftRefreshDOM() {
    if(state.isRefreshing) return;
    state.isRefreshing = true;
    let leftDiv = document.querySelector('#left');

    let createProjectDialog = leftDiv.querySelector('dialog');
    let createProjectBtn = leftDiv.querySelector('button');

    leftDiv.innerHTML = '';

    if (createProjectDialog) leftDiv.appendChild(createProjectDialog);
    if (createProjectBtn) leftDiv.appendChild(createProjectBtn);

    for (let project of state.projects) {
        state.isRefreshing = false;
        createProjectDOM(project);
    }

    state.isRefreshing = false;
}

function rightRefreshDOM() {
    if(state.isRefreshing) return;
    state.isRefreshing = true;
    let todosDiv = document.querySelector('#todosDiv');
    todosDiv.innerHTML = ''; // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    if (state.selectedProjectIndex < 0 || state.selectedProjectIndex >= state.projects.length) {
        console.warn('No valid project selected');
        return;
    }

    for (let todo of state.projects[state.selectedProjectIndex].todo_list) {
        state.isRefreshing = false;
        createTodoDOM(todo);
    }

    state.isRefreshing = false;
}

function createProjectDOM(project) {
    if(state.isRefreshing) return;
    state.isRefreshing = true;

    let projectDiv = document.createElement('div');
    projectDiv.className = 'project';

    let projectIcon = document.createElement('h5');
    projectIcon.className = project.icon;
    let projectName = document.createElement('h5');
    projectName.innerText = project.name;

    projectDiv.appendChild(projectIcon);
    projectDiv.appendChild(projectName);

    projectDiv.addEventListener('click', () => {
        state.selectedProjectIndex = project.id;
        console.log("Project selected:", state.selectedProjectIndex, project.name); // Debug
        state.isRefreshing = false;
        rightRefreshDOM();
    });

    let leftDiv = document.querySelector('#left');
    leftDiv.appendChild(projectDiv);

    state.isRefreshing = false;
}


function createTodoDOM(todo) {
    if(state.isRefreshing) return;
    state.isRefreshing = true;

    let todoDiv = document.createElement('div');
    todoDiv.className = 'todo';

    let todoTitle = document.createElement('h3');
    todoTitle.className = 'todoTitle';
    todoTitle.innerText = `Title: ${todo.title}`;
    let todoDescription = document.createElement('p');
    todoDescription.className = 'todoDescription';
    todoDescription.innerText = `Description: ${todo.description}`;
    let todoDueDate = document.createElement('p');
    todoDueDate.className = 'todoDueDate';
    todoDueDate.innerText = `Due date: ${todo.dueDate}`;
    let todoPriority = document.createElement('p');
    todoPriority.className = 'todoPriority';
    todoPriority.innerText = `Priority: ${todo.priority}`;
    let todoStatus = document.createElement('p');
    todoStatus.className = 'todoStatus';
    todoStatus.innerText = `Status ${todo.status}`;

    todoDiv.appendChild(todoTitle);
    todoDiv.appendChild(todoDescription);
    todoDiv.appendChild(todoDueDate);
    todoDiv.appendChild(todoPriority);
    todoDiv.appendChild(todoStatus);

    let todosDiv = document.querySelector('#todosDiv');
    todosDiv.appendChild(todoDiv);

    state.isRefreshing = false;
}

export { buildLeftPageDOM, buildRightPageDOM, createTodoDOM, createProjectDOM, leftRefreshDOM, rightRefreshDOM };
