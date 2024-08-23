import { projectArray, logicHandler } from './logicHandler';
import { addProjectToDOM } from '../dom/addProject';

export function domHandler(title) {
  // Add new project as class instance
  const addProject = logicHandler(title).newProject;
  const projectArr = projectArray;
  console.log(projectArr);

  const addNewProject = (array) => {
    console.log(array);
    addProjectToDOM(array);
  };

  const focusNewProject = () => {
    const sidebarTop = document.querySelector('.sidebar-top');
    const allSidebarItems = document.querySelectorAll('.sidebar-item');

    allSidebarItems.forEach((item) => {
      item.classList.remove('sidebar-focus');
    });
    sidebarTop.lastElementChild.previousElementSibling.classList.add(
      'sidebar-focus',
    );
  };

  addNewProject(projectArr);
  focusNewProject();

  // Update project task counter
}
