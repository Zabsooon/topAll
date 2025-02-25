import { createProjectDOM, createTodoDOM, leftRefreshDOM, rightRefreshDOM, state } from "./dom_project";
import { Project, Todo } from "./project";

state.selectedProjectIndex = 0;

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
    let newProject = new Project(name, 'default-icon');
    state.projects.push(newProject);
    state.selectedProjectIndex = state.projects.length - 1; // Select the new project
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

  let createTodoDialog = document.createElement('dialog');
  let createTodoBtn = document.createElement('button'); /* Shows dialog with create todo button */
  createTodoBtn.innerText = 'Create New Todo';

  createTodoBtn.addEventListener('click', () => {
    createTodoDialog.showModal();
  });

  let createTodoForm = document.createElement('form');
  createTodoForm.setAttribute('method', 'dialog');

  let createTodoElements = ['Title', 'Description', 'DueDate', 'Priority', 'Status'];
  for(let element of createTodoElements) {
    let tempLabel = document.createElement('label');
    tempLabel.setAttribute('for', `todo${element}`);
    tempLabel.innerText = `Todo ${element}`;
    let tempInput = document.createElement('input');
    tempLabel.setAttribute('name', `todo${element}`);
    tempLabel.setAttribute('id', `todo${element}`);

    createTodoForm.appendChild(tempLabel);
    createTodoForm.appendChild(tempInput);
  }

  let createTodoSubmitBtn = document.createElement('button');
  createTodoSubmitBtn.setAttribute('type', 'submit');
  createTodoSubmitBtn.innerText = 'Create';

  createTodoSubmitBtn.addEventListener('click', () => {
    rightRefreshDOM();
  });
  
  createTodoForm.appendChild(createTodoSubmitBtn);
  createTodoDialog.appendChild(createTodoForm);

  rightDiv.appendChild(createTodoDialog);
  rightDiv.appendChild(createTodoBtn);
}

buildLeftPageDOM();

/* This should happen onClick on the project tab (selection) */
buildRightPageDOM();
