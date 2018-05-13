import _introContent from './_introContent.js';
import _projectContent from './_projectContent.js';

const Content = function (){
  let content = {};
  content.intro = _introContent;
  content.projects = _projectContent;

  return content;
}();

export default Content;