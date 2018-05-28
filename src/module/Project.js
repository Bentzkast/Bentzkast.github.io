import GetContent from '../GetContent.js';

function Project(props) {
  const element = document.createElement('div');
  const titleElement = document.createElement('h4');
  titleElement.textContent = props.projectTitle;
  const textElement = document.createElement('p');
  textElement.textContent = props.projectDesc;

  element.appendChild(titleElement);
  element.appendChild(textElement);

  if (props.linkText !== 'none') {
    const linkElement = document.createElement('a');
    linkElement.textContent = props.linkText;
    linkElement.setAttribute('href', props.linkHref);
    element.appendChild(linkElement);
  }

  return element;
}

export default Project;
