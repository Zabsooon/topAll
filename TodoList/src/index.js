import { createProjectDOM, createTodoDOM } from "./dom_project";
import { Project, Todo } from "./project";

let projects = [];

/*
 * This function creates objects and apply them to the html,
 * therefore they are being generated on the page.
 */
function buildLeftPageDOM() {

  let leftDiv = document.querySelector('#left');
  let createProjectDialog = document.createElement('dialog');
  let createProjectBtn = document.createElement('button'); /* Shows the dialog with creation form */
  createProjectBtn.innerText = 'Create New Project';

  createProjectBtn.addEventListener('click', () => {
  /*
   * Show the dialog.
   * Maybe abstract this.
   */
    createProjectDialog.show();
  });


  let createProjectForm = document.createElement('form');
  createProjectForm.setAttribute('method', 'dialog');

  let createProjectIconLabel = document.createElement('label');
  createProjectIconLabel.setAttribute('for', 'projectIcon');
  createProjectIconLabel.innerText = 'Project Icon';
  let createProjectIconInput = document.createElement('input');
  createProjectIconInput.setAttribute('name', 'projectIcon');
  createProjectIconInput.setAttribute('id', 'projectIcon');

  let createProjectNameLabel = document.createElement('label');
  createProjectNameLabel.setAttribute('for', 'projectName');
  createProjectNameLabel.innerText = 'Project Name';
  let createProjectNameInput = document.createElement('input');
  createProjectNameInput.setAttribute('name', 'projectName');
  createProjectNameInput.setAttribute('id', 'projectName');

  let createProjectSubmitBtn = document.createElement('button');
  createProjectSubmitBtn.setAttribute('type', 'submit');
  createProjectSubmitBtn.innerText = 'Create';

  createProjectSubmitBtn.addEventListener('click', (e) => {
    let icon = e.target.parentElement[0].value; 
    let name = e.target.parentElement[1].value;
    projects.push(new Project(name, icon));

    console.log(projects);
  });

  createProjectForm.appendChild(createProjectIconLabel);
  createProjectForm.appendChild(createProjectIconInput);
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
    createTodoDialog.show();
  });

  let createTodoForm = document.createElement('form');
  createTodoForm.setAttribute('method', 'dialog');

  let createTodoElements = ['Title', 'Description', 'DueDate', 'Priority', 'Status'];
  let createTodoLabels = [];
  let createTodoInputs = [];
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
    console.log('Added Todo temp console.log');
  });
  
  createTodoForm.appendChild(createTodoSubmitBtn);
  createTodoDialog.appendChild(createTodoForm);

  rightDiv.appendChild(createTodoDialog);
  rightDiv.appendChild(createTodoBtn);
}

buildLeftPageDOM();
buildRightPageDOM();
