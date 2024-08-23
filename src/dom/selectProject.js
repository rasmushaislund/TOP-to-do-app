export function selectProject(e) {
  e.preventDefault();
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
  if (
    e.target.closest('.sidebar-item') &&
    !e.target.closest('#sidebar-item-add')
  ) {
    const focusTarget = e.target.closest('.sidebar-item');
    const allTopSidebarItems = document.querySelectorAll(
      '.sidebar-top > .sidebar-item',
    );
    const settingsSidebarItems = document.querySelectorAll(
      '.sidebar-settings > .sidebar-item',
    );
    if (e.target.closest('.sidebar-top > .sidebar-item')) {
      allTopSidebarItems.forEach((item) => {
        item.classList.remove('sidebar-focus');
      });
      focusTarget.classList.add('sidebar-focus');
    } else if (e.target.closest('.sidebar-settings > .sidebar-item')) {
      settingsSidebarItems.forEach((item) => {
        item.classList.remove('sidebar-focus');
      });
      focusTarget.classList.add('sidebar-focus');
    }
  }
}

const setProjectText = (text) => {
  const projectHeader = document.querySelector('.header-project-name');
  projectHeader.textContent = text;
};
