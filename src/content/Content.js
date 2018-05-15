import _introContent from './_introContent.js';
import _projectContent from './_projectContent.js';
import _courseworkContent from './_courseworkContent.js';

const Content = function (){
  let content = {};
  content.intro = _introContent;
  content.projects = _projectContent;
  content.coursework = _courseworkContent;

  return content;
}();

export default Content;