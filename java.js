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
        
    }
}
