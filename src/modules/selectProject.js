export function selectProject(e) {
  if (e.target.closest('.selectable-item')) {
    const parentTarget = e.target.closest('.selectable-item');
    const targetChild = parentTarget.querySelector('.item-text');
    const childText = targetChild.textContent;
    const newTask = document.querySelector('.new-task');

    newTask.classList.remove('hide');
    setProjectText(childText);

    if (e.target.closest('.fixed-item')) {
      newTask.classList.add('hide');
    }
  }
}

const setProjectText = (text) => {
  const projectHeader = document.querySelector('.header-project-name');
  projectHeader.textContent = text;
};
