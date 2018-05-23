import GetContent from "../GetContent.js";

function CourseWork(props) {
  const element = document.createElement("div");
  element.className = "card";
  const linkElement = document.createElement("a");

  linkElement.textContent = props.courseText;
  linkElement.setAttribute("href", props.courseHref);
  element.appendChild(linkElement);
  return element;
}

export default CourseWork;
