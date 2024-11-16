// footer year using date method //
const footer = document.querySelector('footer p');
const currentYear = new Date().getFullYear();
footer.innerHTML = '&copy; 2024 Demri Johnson IDD Portfolio ${currentYear}. All rights reserved.';
