import _ from 'lodash';
import GetContent from './GetContent.js';

function component() {
  const getContent = new GetContent;
  var element = document.createElement('div');
  element.className = "container";
  var heading = document.createElement('h1');
  heading.innerHTML = "Joseph Alfredo"
  element.appendChild(heading);
  

  var sub_heading = document.createElement('p');
  element.appendChild(sub_heading);
  var link = document.createElement('a');
  link.innerText = 'you can check my resume here';
  link.setAttribute('href','./images/Resume-JosephAlfredo.pdf');
  element.appendChild(link);
  
  
  getContent.getContentText('./src/content/about.txt')
  .then(text => sub_heading.appendChild(document.createTextNode(text)));
  
  

  return element;
}

document.body.appendChild(component());