import GetContent from "../GetContent.js";

function Intro(prop){
  const getContent = new GetContent();

  const element = document.createElement('div');
  element.className = 'intro';
  const titleElement = document.createElement('h3');
  titleElement.textContent = prop.titleText;
  const textElement = document.createElement('p');
  textElement.textContent = prop.text
  const linkElement = document.createElement('a');
  linkElement.textContent = prop.linkText;
  linkElement.setAttribute('href',prop.linkHref);


  element.appendChild(titleElement);
  element.appendChild(textElement);
  element.appendChild(linkElement);

  return element;
}

export default Intro;