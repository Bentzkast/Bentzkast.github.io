import _ from "lodash";
import GetContent from "./GetContent.js";
import Project from "./module/Project.js";
import Intro from "./module/Intro.js";
import Coursework from "./module/Coursework.js";
import Education from './module/Education.js';

import Content from "./content/Content.js";


function component() {
  const getContent = new GetContent();
  // do the container
  const element = document.createElement("div");
  element.className = "container";

  // main header
  const mainHeading = document.createElement("h1");
  mainHeading.textContent = "Joseph Alfredo";
  mainHeading.className = "main-heading";
  element.appendChild(mainHeading);

  // intro 
  element.appendChild(Intro(Content.intro));

  // projects
  const projectHeading = document.createElement("h3");
  projectHeading.textContent = "Projects";
  projectHeading.className = "sub-heading";
  element.appendChild(projectHeading);
  for (let project of Content.projects){
    element.appendChild(Project(project));
  }

  // education
  const educationHeading = document.createElement('h3');
  educationHeading.textContent = "Education";
  educationHeading.className = "sub-heading";
  element.appendChild(educationHeading);
  for (let education of Content.education){
    element.appendChild(Education(education))
  }

  // coursework list
  const courseworkHeading = document.createElement('h3');
  courseworkHeading.textContent = "Coursework";
  courseworkHeading.className = "sub-heading";
  element.appendChild(courseworkHeading);
  for (let coursework of Content.coursework){
    element.appendChild(Coursework(coursework));
  }

  return element;
}

document.body.appendChild(component());
