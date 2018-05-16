function Education(props) {
  const element = document.createElement('div');
  const titleElement = document.createElement('h4');
  titleElement.textContent = props.title;
  const subtitleElement = document.createElement('small');
  subtitleElement.className = 'subtitle';
  subtitleElement.textContent = props.subtitle;

  element.appendChild(titleElement);
  titleElement.appendChild(subtitleElement);
  return element;
}

export default Education;