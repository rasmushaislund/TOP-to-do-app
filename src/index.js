// START //

import './style.css';
import html from './index.html';
import { showDay } from './modules/weatherInfo';
import { fetchWeather, showWeather } from './modules/weatherInfo';

// Set copyright year automatically
const copyrightSpan = document.querySelector('#copyright-span');
copyrightSpan.textContent = new Date().getFullYear();

// Set day and weather in sidebar header
window.onload = async () => {
  showDay();
  const getWeather = await fetchWeather();
  showWeather(getWeather);
};
