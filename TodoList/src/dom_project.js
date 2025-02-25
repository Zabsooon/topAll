import * as css from './project.css'

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

  if(state.selectedProjectIndex < 0 || state.selectedProjectIndex >= state.projects.length) {
    console.warn('No valid project selected');
    return;
  }

  for(let todo of state.projects[state.selectedProjectIndex].todo_list) {
    createTodoDOM(todo);
  }
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

  let rightDiv = document.querySelector('#right');
  rightDiv.innerHTML = '';
}

export { createTodoDOM, createProjectDOM, leftRefreshDOM, rightRefreshDOM };
