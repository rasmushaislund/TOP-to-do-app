// START //

import './style.css';
import html from './index.html';

// Set copyright year automatically
const copyrightSpan = document.querySelector('#copyright-span');
copyrightSpan.textContent = new Date().getFullYear();
console.log(copyrightSpan);
