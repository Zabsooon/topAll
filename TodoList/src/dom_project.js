import * as projectCss from './project.css'
import * as todoCss from './todo.css'

export let state = {
  selectedProjectIndex: -1,
  projects: [],
}

function leftRefreshDOM() {
  let leftDiv = document.querySelector('#left');

  let createProjectDialog = leftDiv.querySelector('dialog');
  let createProjectBtn = leftDiv.querySelector('button');

  leftDiv.innerHTML = '';

  if (createProjectDialog) leftDiv.appendChild(createProjectDialog);
  if (createProjectBtn) leftDiv.appendChild(createProjectBtn);

  for(let project of state.projects) {
    createProjectDOM(project);
  }
}

function rightRefreshDOM() {
  let rightDiv = document.querySelector('#right');

  let createTodoDialog = rightDiv.querySelector('dialog');
  let createTodoBtn = rightDiv.querySelector('button');

  rightDiv.querySelectorAll('todo').forEach(todo => todo.remove());

  if(state.selectedProjectIndex < 0 || state.selectedProjectIndex >= state.projects.length) {
    console.warn('No valid project selected');
    return;
  }

  for(let todo of state.projects[state.selectedProjectIndex].todo_list) {
    createTodoDOM(todo);
  }

  if(!rightDiv.contains(createTodoDialog)) rightDiv.appendChild(createTodoDialog);
  if(!rightDiv.contains(createTodoBtn)) rightDiv.appendChild(createTodoBtn);
}

function createProjectDOM(project) {
  let projectDiv = document.createElement('div');
  projectDiv.className = 'project';
  
  let projectIcon = document.createElement('h5');
  projectIcon.className = project.icon;
  let projectName = document.createElement('h5');
  projectName.innerText = project.name;

  projectDiv.appendChild(projectIcon);
  projectDiv.appendChild(projectName);

  projectDiv.addEventListener('click', () => {
    state.selectedProjectIndex = state.projects.findIndex(p => p.name === project.name);
    console.log("Project selected:", state.selectedProjectIndex, project.name); // Debug
    rightRefreshDOM(); 
  });

  let leftDiv = document.querySelector('#left');
  leftDiv.appendChild(projectDiv);
}


function createTodoDOM(todo) {
  let todoDiv = document.createElement('div');
  todoDiv.className = 'todo';
  
  let todoTitle = document.createElement('h3');
  todoTitle.className = 'todoTitle';
  todoTitle.innerText = todo.title;
  let todoDescription = document.createElement('p');
  todoDescription.className = 'todoDescription';
  todoDescription.innerText = todo.description;
  let todoDueDate = document.createElement('p');
  todoDueDate.className = 'todoDueDate';
  todoDueDate.innerText = todo.dueDate;
  let todoPriority = document.createElement('p');
  todoPriority.className = 'todoPriority';
  todoPriority.innerText = todo.priority;
  let todoStatus = document.createElement('p');
  todoStatus.className = 'todoStatus';
  todoStatus.innerText = todo.status;

  todoDiv.appendChild(todoTitle);
  todoDiv.appendChild(todoDescription);
  todoDiv.appendChild(todoDueDate);
  todoDiv.appendChild(todoPriority);
  todoDiv.appendChild(todoStatus);

  let rightDiv = document.querySelector('#right');
  rightDiv.appendChild(todoDiv);
  rightRefreshDOM();
}

export { createTodoDOM, createProjectDOM, leftRefreshDOM, rightRefreshDOM };
