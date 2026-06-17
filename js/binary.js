const fixedItems = [
    // Левая сторона (left от 2% до 10%)
    { left: 2,  top: 3,  char: "0", size: 24 },
    { left: 7,  top: 13, char: "1", size: 28 },
    { left: 4,  top: 24, char: "0", size: 22 },
    { left: 9,  top: 35, char: "1", size: 26 },
    { left: 3,  top: 46, char: "0", size: 30 },
    { left: 6,  top: 57, char: "1", size: 24 },
    { left: 10, top: 68, char: "0", size: 28 },
    { left: 5,  top: 79, char: "1", size: 26 },
    { left: 8,  top: 90, char: "0", size: 32 },
    { left: 1,  top: 98, char: "1", size: 22 },
    // Правая сторона (left от 90% до 99%)
    { left: 98, top: 2,  char: "1", size: 24 },
    { left: 93, top: 12, char: "0", size: 30 },
    { left: 96, top: 23, char: "1", size: 22 },
    { left: 91, top: 34, char: "0", size: 26 },
    { left: 97, top: 45, char: "1", size: 28 },
    { left: 94, top: 56, char: "0", size: 26 },
    { left: 90, top: 67, char: "1", size: 24 },
    { left: 95, top: 78, char: "0", size: 30 },
    { left: 92, top: 89, char: "1", size: 26 },
    { left: 99, top: 96, char: "0", size: 24 },
];

function renderItems(containerId, items) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = "";
    items.forEach(item => {
        const span = document.createElement("span");
        span.className = "binary-item";
        span.textContent = item.char;
        span.style.left = item.left + "%";
        span.style.top = item.top + "%";
        span.style.fontSize = item.size + "px";
        span.style.transform = "translate(-50%, -50%)";
        container.appendChild(span);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    renderItems("binaryScrollContainer", fixedItems);
});

const SPEED = 0.15;
function updateBinaryScroll() {
    const scrollY = window.scrollY;
    const translateY = -scrollY * SPEED;
    const container = document.getElementById("binaryScrollContainer");
    if (container) {
        container.style.transform = `translateY(${translateY}px)`;
    }
}

let ticking = false;
window.addEventListener("scroll", function() {
    if (!ticking) {
        window.requestAnimationFrame(function() {
            updateBinaryScroll();
            ticking = false;
        });
        ticking = true;
    }
});

window.addEventListener("load", updateBinaryScroll);
window.addEventListener("resize", updateBinaryScroll);
