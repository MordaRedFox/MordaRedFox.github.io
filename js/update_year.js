// Обновляет время у футера
document.addEventListener("DOMContentLoaded", function() {
    const footerParagraph = document.querySelector("footer p, .footer p");
    if (footerParagraph) {
        const currentYear = new Date().getFullYear();
        footerParagraph.innerHTML = footerParagraph.innerHTML.replace(
            "2026", currentYear);
    }
    const yearSpan = document.getElementById("current-year");
    if (yearSpan) {
        yearSpan.innerText = new Date().getFullYear();
    }
});
