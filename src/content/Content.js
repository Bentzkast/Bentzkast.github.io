import _intro from './_intro';
import _projects from './_projects';
import _courseworks from './_courseworks';
import _educations from './_educations';
import _skills from './_skills';

const Content = (function() {
  let content = {};
  content.intro = _intro;
  content.projects = _projects;
  content.courseworks = _courseworks;
  content.educations = _educations;
  content.skills = _skills;

  return content;
})();

export default Content;
