import _ from 'lodash';
import GetContent from './GetContent.js';
import Project from './module/Project.js';
import Intro from './module/Intro.js';
import Coursework from './module/Coursework.js';
import Education from './module/Education.js';
import Skill from './module/Skill.js';
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
  const projectHeading = document.createElement('h3');
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

  const educationHeading = document.createElement('h3');
  educationHeading.textContent = 'Education';
  wrapper.appendChild(educationHeading);
  for (let education of Content.educations) {
    wrapper.appendChild(Education(education));
  }
  return wrapper;
}

function sectionCoursework() {
  const wrapper = document.createElement('ul');
  wrapper.className = 'collection with-header';

  // coursework list
  const courseworkHeading = document.createElement('li');
  courseworkHeading.className =
    'collection-header light-blue darken-3 white-text';
  courseworkHeading.innerHTML = '<h4>Courseworks</h4>';

  wrapper.appendChild(courseworkHeading);
  for (let coursework of Content.courseworks) {
    wrapper.appendChild(Coursework(coursework));
  }
  return wrapper;
}

function sectionSkill() {
  const wrapper = document.createElement('div');
  wrapper.className = 'row';
  const left = document.createElement('div');
  const lefti = document.createElement('ul');
  const mid = document.createElement('div');
  const midi = document.createElement('ul');
  const right = document.createElement('div');
  const righti = document.createElement('ul');

  left.appendChild(lefti);
  mid.appendChild(midi);
  right.appendChild(righti);

  left.className = 'col l4 s12';
  mid.className = 'col l4 s12';
  right.className = 'col l4 s12';
  lefti.className = 'collection with-header';
  midi.className = 'collection with-header';
  righti.className = 'collection with-header';
  const packet = [lefti, midi, righti];

  for (let i = 0; i < packet.length; i++) {
    const heading = document.createElement('li');
    heading.className = 'collection-header light-blue darken-3 white-text';
    heading.innerHTML = `<h5>${Content.skills[i].title}</h5>`;
    packet[i].appendChild(heading);
    for (let skill of Content.skills[i].list) {
      packet[i].appendChild(Skill(skill));
    }
  }
  wrapper.appendChild(left);
  wrapper.appendChild(mid);
  wrapper.appendChild(right);

  return wrapper;
}

document.getElementById('showcase').appendChild(intro());
document.getElementById('section-1').appendChild(sectionProject());
document.getElementById('section-2').appendChild(sectionEducation());
document.getElementById('section-3').appendChild(sectionSkill());
document.getElementById('section-4').appendChild(sectionCoursework());

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
