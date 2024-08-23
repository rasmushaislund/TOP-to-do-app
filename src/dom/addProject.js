import checkListIcon from '../assets/img/checklist.svg';

export function addProjectToDOM(array) {
  const insertProjectBefore = document.querySelector('#sidebar-item-add');
  const projectParent = document.querySelector('.sidebar-top');
  const addProjectInput = document.querySelector('#add-project');
  const lastIndex = array[array.length - 1];

  addProjectInput.value = '';
  addProjectInput.blur();

  const projectContainer = document.createElement('div');
  projectContainer.classList.add('sidebar-item', 'selectable-item');
  projectContainer.dataset.indexNumber = lastIndex.id;

  const projectIcon = document.createElement('img');
  projectIcon.classList.add('sidebar-icon');
  projectIcon.setAttribute('src', checkListIcon);
  projectIcon.setAttribute('alt', 'checklist icon');
  projectContainer.appendChild(projectIcon);

  const projectTitle = document.createElement('p');
  projectTitle.classList.add('standard-text', 'item-text');
  projectTitle.textContent = lastIndex.title;

  const projectTaskCount = document.createElement('p');
  projectTaskCount.classList.add('standard-text', 'task-count');
  lastIndex.taskArray.length > 0
    ? (projectTaskCount.textContent = lastIndex.taskArray.length)
    : '';

  projectContainer.appendChild(projectIcon);
  projectContainer.appendChild(projectTitle);
  projectContainer.appendChild(projectTaskCount);

  projectParent.insertBefore(projectContainer, insertProjectBefore);
}
