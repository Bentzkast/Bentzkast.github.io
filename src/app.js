import _ from 'lodash';
import GetContent from './GetContent.js';
import Project from './module/Project.js';
import Intro from './module/Intro.js';
import Coursework from './module/Coursework.js';
import Education from './module/Education.js';
import Waypoints from '../node_modules/waypoints/lib/noframework.waypoints.min';

import Content from './content/Content.js';
const getContent = new GetContent();

function intro() {
  const wrapper = document.createElement('div');
  wrapper.className = 'container showcase-inner';
  wrapper.appendChild(Intro(Content.intro));
  return wrapper;
}

function sectionProject() {
  // do the container
  const wrapper = document.createElement('div');
  wrapper.className = '';

  // projects
  const projectHeading = document.createElement('h2');
  projectHeading.textContent = 'Projects';
  wrapper.appendChild(projectHeading);
  for (let project of Content.projects) {
    wrapper.appendChild(Project(project));
  }

  return wrapper;
}

function sectionEducation() {
  // education
  const wrapper = document.createElement('div');
  wrapper.className = '';

  const educationHeading = document.createElement('h2');
  educationHeading.textContent = 'Education';
  wrapper.appendChild(educationHeading);
  for (let education of Content.education) {
    wrapper.appendChild(Education(education));
  }
  return wrapper;
}

function sectionCoursework() {
  const wrapper = document.createElement('div');
  wrapper.className = '';

  // coursework list
  const courseworkHeading = document.createElement('h2');
  courseworkHeading.textContent = 'Coursework';
  wrapper.appendChild(courseworkHeading);
  for (let coursework of Content.coursework) {
    wrapper.appendChild(Coursework(coursework));
  }
  return wrapper;
}

document.getElementById('showcase').appendChild(intro());
document.getElementById('section-1').appendChild(sectionProject());
document.getElementById('section-2').appendChild(sectionEducation());
document.getElementById('section-3').appendChild(sectionCoursework());
// document.getElementById('section-4').appendChild(sectionA());

// const sections = ['Welcome', 'Project', 'Education', 'Coursework'];
// let current_section = 0;
// document.getElementById('current-section').textContent =
//   sections[current_section];

// const waypoint = new Waypoint({
//   element: document.getElementById('section-a'),
//   handler: function(direction) {
//     console.log('heya' + direction);
//     if (direction == 'up') current_section--;
//     else if (direction == 'down') current_section++;
//     document.getElementById('current-section').textContent =
//       sections[current_section];
//   },
//   offset:
//     Math.max(document.documentElement.clientHeight, window.innerHeight || 0) / 2
// });
