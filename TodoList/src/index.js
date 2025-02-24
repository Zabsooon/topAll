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

buildLeftPageDOM();
