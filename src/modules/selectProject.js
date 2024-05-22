export function selectProject(e) {
  const parentTarget = e.target.closest('.sidebar-item');
  const targetChild = parentTarget.querySelector('.item-text');
  const childText = targetChild.textContent;

  setProjectText(childText);
}

const setProjectText = (text) => {
  const projectHeader = document.querySelector('.header-project-name');
  projectHeader.textContent = text;
};
