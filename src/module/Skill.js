function Skill(prop) {
  const wrapper = document.createElement('li');
  wrapper.className = 'collection-item';
  wrapper.textContent = prop;

  return wrapper;
}
export default Skill;
