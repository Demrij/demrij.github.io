// display greeting based in time of day //
window.onload = function() {
    const greetingElement = document.getElementById("greeting");
    const hour = new Date().getHours();
    let greetingMessage = "";
    let greetingClass = "";

    if (hour < 12) {
        greetingMessage = "Good Morning!";
        greetingClass = "morning-style";
    } else if (hour >= 12 && hour <= 17) {
        greetingMessage = "Good Afternoon!";
        greetingClass = "afternoon-style";
    } else {
        greetingMessage = "Good Evening!";
        greetingClass = "evening-style";
    }

    greetingElement.textContent = greetingMessage;
    greetingElement.className = greetingClass;
};

const footerText = document.getElementById("footer-text");
const currentYear = new Date().getFullYear();
footerText.innerHTML = '&copy; Demri Johnson IDD Portfolio, ${currentYear}. All rights reserved.';

console.log("Todays's Date: " + new Date());

const alertButton = document.getElementById("btn-alert");
alertButton.onclick = function() {
    alert("Hello There!");
    
}
