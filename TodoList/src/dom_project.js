import * as css from './project.css'

function createProjectDOM() {
    let projectDiv = document.createElement('div');
    projectDiv.className = 'project';
    
    let projectIcon = document.createElement('h5');
    projectIcon.className = 'project_icon';
    let projectName = document.createElement('h5');
    projectName.className = 'project_name';
    
    projectDiv.appendChild(projectIcon);
    projectDiv.appendChild(projectName);
    
    let leftDiv = document.querySelector('left');
    leftDiv.appendChild(projectDiv);
}

function createTodoDOM(project, todo) {
    
}

export { createTodoDOM, createProjectDOM };
