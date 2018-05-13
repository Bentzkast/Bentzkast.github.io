import _ from "lodash";
import GetContent from "./GetContent.js";
import Project from "./Project.js";
import Intro from "./Intro.js";
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

  return element;
}

document.body.appendChild(component());
