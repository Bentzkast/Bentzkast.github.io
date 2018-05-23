import GetContent from "../GetContent.js";

function Intro(prop) {
  const getContent = new GetContent();

  const element = document.createElement("div");
  element.className = "container intro-text";
  const titleElement = document.createElement("h1");
  titleElement.textContent = prop.titleText;
  titleElement.className = "intro-jumbotron";
  const textElement = document.createElement("p");
  textElement.textContent = prop.text;
  const linkElement = document.createElement("a");
  linkElement.textContent = prop.linkText;
  linkElement.setAttribute("href", prop.linkHref);
  linkElement.className = "intro-readmore";

  element.appendChild(titleElement);
  element.appendChild(textElement);
  element.appendChild(linkElement);

  return element;
}

export default Intro;
