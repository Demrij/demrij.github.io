// footer year using date method //
const footer = document.querySelector('footer p');
const currentYear = new Date().getFullYear();
footer.innerHTML = '&copy; 2024 Demri Johnson IDD Portfolio ${currentYear}. All rights reserved.';

// display greeting based on time of the day //
const greetingElement = document.createElement('p');
const body = document.querySelector('body');
body.insertBefore(greetingElement, body.firstChild);
