import { format } from 'date-fns';

// Show today's date with formatting
export function showDay() {
  const today = document.querySelector('.day');
  const thisDay = format(new Date(), 'EEEE io MMMM');

  today.textContent = thisDay;
}

// Get weather info from API
export async function fetchWeather() {
  const location = 'Copenhagen';
  const apiKey = '0f5a85c9a97e48cdb5081603232106';
  const urlCurrent = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;
  console.clear();

  try {
    const response = await fetch(urlCurrent, { mode: 'cors' });
    if (!response.ok) throw new Error();
    const toJSON = await response.json();
    console.log(toJSON);
    return toJSON;
  } catch (error) {
    showError();
  }
}

export function showWeather(data) {
  if (!data) return;

  const weatherIcon = document.querySelector('.sidebar-icon');
  const temp = document.querySelector('.temperature-value');

  weatherIcon.src = data.current.condition.icon;
  temp.textContent = Math.round(data.current.temp_c);
}

function showError() {
  const weatherWidget = document.querySelector('.weather');
  weatherWidget.textContent = '*No data*';
}
