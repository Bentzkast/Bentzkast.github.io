import GetContent from '../GetContent.js';

function Project(props) {
  const card = document.createElement('div');
  card.className = 'card';
  const card_content = document.createElement('div');
  card_content.className = 'card-content';

  const titleElement = document.createElement('span');
  titleElement.className = 'card-title';
  titleElement.textContent = props.projectTitle;

  const textElement = document.createElement('p');
  textElement.textContent = props.projectDesc;

  card_content.appendChild(titleElement);
  card_content.appendChild(textElement);

  card.appendChild(card_content);
  if (props.linkText !== 'none') {
    const action = document.createElement('div');
    action.className = 'card-action';
    const linkElement = document.createElement('a');
    linkElement.className = 'btn green waves-effect waves-light btn-small';
    linkElement.textContent = props.linkText;
    linkElement.setAttribute('href', props.linkHref);
    action.appendChild(linkElement);
    card.appendChild(action);
  }

  return card;
}

export default Project;
