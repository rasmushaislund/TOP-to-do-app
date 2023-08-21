// START //

import './style.css';
import html from './index.html';

const body = document.querySelector('body');
const para = document.createElement('p');
para.textContent = 'OKAY';

body.appendChild(para);

para.style.color = 'red';
