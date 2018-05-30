import GetContent from '../GetContent.js';

function Project(props) {
  const card = document.createElement('div');
  card.className = 'card light-blue lighten-3';
  if (props.imageSrc !== 'none') {
    const card_image = document.createElement('div');
    card_image.className = 'card-image';
    const image = document.createElement('img');
    image.setAttribute('src', props.imageSrc);
    card_image.appendChild(image);
    card.appendChild(card_image);
  }

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
