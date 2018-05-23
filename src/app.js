import _ from "lodash";
import GetContent from "./GetContent.js";
import Project from "./module/Project.js";
import Intro from "./module/Intro.js";
import Coursework from "./module/Coursework.js";
import Education from "./module/Education.js";
import Waypoints from "../node_modules/waypoints/lib/noframework.waypoints.min";

import Content from "./content/Content.js";
const getContent = new GetContent();

function header() {
  const element = document.createElement("div");
  element.className = "intro";
  element.appendChild(Intro(Content.intro));
  return element;
}

function sectionA() {
  // do the container
  const element = document.createElement("div");
  element.className = "container";

  // projects
  const projectHeading = document.createElement("h3");
  projectHeading.textContent = "Projects";
  projectHeading.className = "sub-heading";
  element.appendChild(projectHeading);
  for (let project of Content.projects) {
    element.appendChild(Project(project));
  }

  // education
  const educationHeading = document.createElement("h3");
  educationHeading.textContent = "Education";
  educationHeading.className = "sub-heading";
  element.appendChild(educationHeading);
  for (let education of Content.education) {
    element.appendChild(Education(education));
  }

  // coursework list
  const courseworkHeading = document.createElement("h3");
  courseworkHeading.textContent = "Coursework";
  courseworkHeading.className = "sub-heading";
  element.appendChild(courseworkHeading);
  for (let coursework of Content.coursework) {
    element.appendChild(Coursework(coursework));
  }

  return element;
}

document.getElementById("header").appendChild(header());
document.getElementById("section-a").appendChild(sectionA());

const sections = ["Welcome", "Project", "Education", "Coursework"];
let current_section = 0;
document.getElementById("current-section").textContent =
  sections[current_section];

const waypoint = new Waypoint({
  element: document.getElementById("section-a"),
  handler: function(direction) {
    console.log("heya" + direction);
    if (direction == "up") current_section--;
    else if (direction == "down") current_section++;
    document.getElementById("current-section").textContent =
      sections[current_section];
  },
  offset:
    Math.max(document.documentElement.clientHeight, window.innerHeight || 0) / 2
});
