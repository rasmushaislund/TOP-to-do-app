// START //

import './style.css';
import html from './index.html';
import { showDay } from './modules/weatherInfo';
import { fetchWeather, showWeather } from './modules/weatherInfo';
import toggleDropdown from './modules/editProject';
import { selectProject } from './modules/selectProject';
import { expandCollapse } from './modules/taskCard';

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
const sidebarItem = document.querySelectorAll('.sidebar-item');

sidebarItem.forEach((item) => {
  item.addEventListener('click', (e) => {
    selectProject(e);
  });
});

// Task card
// Expand/collapse content
const expandCollapseBtn = document.querySelector('#expand-collapse-btn');

expandCollapseBtn.addEventListener('click', () => {
  expandCollapse();
});
