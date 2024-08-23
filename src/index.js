// START //

import './style.css';
import html from './index.html';
import { showDay } from './dom/weatherInfo';
import { fetchWeather, showWeather } from './dom/weatherInfo';
import toggleDropdown from './dom/editProject';
import { selectProject } from './dom/selectProject';
import { expandCollapse } from './dom/taskCard';
import { domHandler } from './handler/domHandler';

// Set copyright year automatically
const copyrightSpan = document.querySelector('#copyright-span');
copyrightSpan.textContent = new Date().getFullYear();

// Set day and weather in sidebar header
window.onload = async () => {
  showDay();
  const getWeather = await fetchWeather();
  showWeather(getWeather);
};

// Toggle project menu dropdown (three horizontal dots)
const dropdownBtn = document.querySelector('.three-dots-btn');
const dropdownMenu = document.querySelector('.dropdown');

dropdownBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  toggleDropdown();
});

document.documentElement.addEventListener('click', () => {
  if (dropdownMenu.classList.contains('show')) {
    toggleDropdown();
  }
});

// Select project and update header project title
const sidebarTop = document.querySelector('.sidebar-top');
const sidebarSettings = document.querySelector('.sidebar-settings');

sidebarTop.addEventListener('click', (e) => {
  selectProject(e);
});

sidebarSettings.addEventListener('click', (e) => {
  selectProject(e);
});

// Task card
// Expand/collapse content
const expandCollapseBtn = document.querySelector('#expand-collapse-btn');

expandCollapseBtn.addEventListener('click', () => {
  expandCollapse();
});

// Add new project by calling handler on click
const addProjectBtn = document.querySelector('#add-project-btn');
const addProjectTitle = document.querySelector('#add-project');

addProjectBtn.addEventListener('click', () => {
  domHandler(addProjectTitle.value);
});

// ... or press 'enter'
addProjectTitle.addEventListener('keypress', (e) => {
  if (e.keyCode === 13) {
    addProjectBtn.click();
  }
});

// Add new task by calling handler on click
const addTaskBtn = document.querySelector('#add-task-btn');
const addTaskTitle = document.querySelector('.task-title');
const addTaskDeadline = document.querySelector('.deadline-para');
const addTaskDescription = document.querySelector('.task-description');

addTaskBtn.addEventListener('click', () => {});
