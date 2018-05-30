function CourseWork(props) {
  const element = document.createElement('ul');
  const linkElement = document.createElement('a');
  linkElement.className = 'collection-item';
  linkElement.textContent = props.courseText;
  linkElement.setAttribute('href', props.courseHref);
  element.appendChild(linkElement);
  return element;
}

export default CourseWork;
