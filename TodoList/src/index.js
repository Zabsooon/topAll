import { createProjectDOM, createTodoDOM } from "./dom_project";
import { Project, Todo } from "./project";

let projects = [];




let leftDiv = document.querySelector('#left');

let addProjectBtn = document.createElement('button');

addProjectBtn.setAttribute('id', 'createProject');

leftDiv.appendChild(addProjectBtn);
/* Generate dialog functionality for project creation */

let projectDialog = document.createElement('dialog');
projectDialog.setAttribute('id', 'projectDialog');

let projectCreationForm = document.createElement('form');
let projectCreationIconLabel = document.createElement('label');
let projectCreationIconInput = document.createElement('input');
let projectCreationNameLabel = document.createElement('label');
let projectCreationNameInput = document.createElement('input');

projectCreationForm.appendChild(projectCreationIconLabel);
projectCreationForm.appendChild(projectCreationIconInput);

projectCreationForm.appendChild(projectCreationNameLabel);
projectCreationForm.appendChild(projectCreationNameInput);

projectDialog.appendChild(projectCreationForm);

leftDiv.appendChild(projectDialog);

    



/* Note for myself: Firstly just add stuff here, generate the site and then I will create
separate classes for genarating DOM, adding stuff etc. */