function Intro(prop) {
  const element = document.createElement('div');
  // element.className = "container intro-text";
  const titleElement = document.createElement('h2');
  titleElement.textContent = prop.titleText;

  const textElement = document.createElement('p');
  textElement.textContent = prop.text;
  textElement.className = 'flow-text raleway';
  const linkElement = document.createElement('a');
  linkElement.textContent = prop.linkText;
  linkElement.setAttribute('href', prop.linkHref);
  linkElement.className = 'btn wave-effect wave-light light-green darken-3';

  element.appendChild(titleElement);
  element.appendChild(textElement);
  element.appendChild(linkElement);

  return element;
}

export default Intro;
