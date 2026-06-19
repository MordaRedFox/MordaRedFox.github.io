// Создает фон из двоичного кода на страницах
const fixedItems = [
    // Верхний ряд
    { left: 5, top: 2, char: "0", size: 22 },
    { left: 15, top: 3, char: "1", size: 26 },
    { left: 25, top: 2, char: "0", size: 20 },
    { left: 35, top: 4, char: "1", size: 28 },
    { left: 45, top: 2, char: "0", size: 24 },
    { left: 55, top: 3, char: "1", size: 22 },
    { left: 65, top: 2, char: "0", size: 26 },
    { left: 75, top: 4, char: "1", size: 20 },
    { left: 85, top: 2, char: "0", size: 28 },
    { left: 95, top: 3, char: "1", size: 24 },
    // Второй ряд
    { left: 3, top: 12, char: "1", size: 30 },
    { left: 12, top: 13, char: "0", size: 22 },
    { left: 22, top: 11, char: "1", size: 26 },
    { left: 32, top: 14, char: "0", size: 24 },
    { left: 42, top: 12, char: "1", size: 28 },
    { left: 52, top: 13, char: "0", size: 22 },
    { left: 62, top: 11, char: "1", size: 30 },
    { left: 72, top: 14, char: "0", size: 24 },
    { left: 82, top: 12, char: "1", size: 26 },
    { left: 92, top: 13, char: "0", size: 28 },
    // Третий ряд
    { left: 7, top: 22, char: "0", size: 24 },
    { left: 17, top: 23, char: "1", size: 28 },
    { left: 27, top: 21, char: "0", size: 22 },
    { left: 37, top: 24, char: "1", size: 26 },
    { left: 47, top: 22, char: "0", size: 30 },
    { left: 57, top: 23, char: "1", size: 24 },
    { left: 67, top: 21, char: "0", size: 26 },
    { left: 77, top: 24, char: "1", size: 22 },
    { left: 87, top: 22, char: "0", size: 28 },
    { left: 97, top: 23, char: "1", size: 24 },
    // Четвертый ряд
    { left: 4, top: 34, char: "1", size: 26 },
    { left: 14, top: 33, char: "0", size: 30 },
    { left: 24, top: 35, char: "1", size: 22 },
    { left: 34, top: 32, char: "0", size: 28 },
    { left: 44, top: 34, char: "1", size: 24 },
    { left: 54, top: 33, char: "0", size: 26 },
    { left: 64, top: 35, char: "1", size: 30 },
    { left: 74, top: 32, char: "0", size: 22 },
    { left: 84, top: 34, char: "1", size: 28 },
    { left: 94, top: 33, char: "0", size: 26 },
    // Пятый ряд
    { left: 6, top: 45, char: "0", size: 28 },
    { left: 16, top: 44, char: "1", size: 24 },
    { left: 26, top: 46, char: "0", size: 26 },
    { left: 36, top: 43, char: "1", size: 30 },
    { left: 46, top: 45, char: "0", size: 22 },
    { left: 56, top: 44, char: "1", size: 28 },
    { left: 66, top: 46, char: "0", size: 24 },
    { left: 76, top: 43, char: "1", size: 26 },
    { left: 86, top: 45, char: "0", size: 30 },
    { left: 96, top: 44, char: "1", size: 22 },
    // Шестой ряд
    { left: 2, top: 56, char: "1", size: 24 },
    { left: 12, top: 55, char: "0", size: 26 },
    { left: 22, top: 57, char: "1", size: 28 },
    { left: 32, top: 54, char: "0", size: 22 },
    { left: 42, top: 56, char: "1", size: 30 },
    { left: 52, top: 55, char: "0", size: 24 },
    { left: 62, top: 57, char: "1", size: 26 },
    { left: 72, top: 54, char: "0", size: 28 },
    { left: 82, top: 56, char: "1", size: 22 },
    { left: 92, top: 55, char: "0", size: 30 },
    // Седьмой ряд
    { left: 8, top: 67, char: "0", size: 26 },
    { left: 18, top: 66, char: "1", size: 30 },
    { left: 28, top: 68, char: "0", size: 22 },
    { left: 38, top: 65, char: "1", size: 28 },
    { left: 48, top: 67, char: "0", size: 24 },
    { left: 58, top: 66, char: "1", size: 26 },
    { left: 68, top: 68, char: "0", size: 30 },
    { left: 78, top: 65, char: "1", size: 22 },
    { left: 88, top: 67, char: "0", size: 28 },
    { left: 98, top: 66, char: "1", size: 24 },
    // Восьмой ряд (низ)
    { left: 5, top: 78, char: "1", size: 22 },
    { left: 15, top: 77, char: "0", size: 28 },
    { left: 25, top: 79, char: "1", size: 24 },
    { left: 35, top: 76, char: "0", size: 26 },
    { left: 45, top: 78, char: "1", size: 30 },
    { left: 55, top: 77, char: "0", size: 22 },
    { left: 65, top: 79, char: "1", size: 28 },
    { left: 75, top: 76, char: "0", size: 24 },
    { left: 85, top: 78, char: "1", size: 26 },
    { left: 95, top: 77, char: "0", size: 30 },
    // Дополнительные элементы для заполнения промежутков
    { left: 10, top: 8, char: "1", size: 20 },
    { left: 30, top: 9, char: "0", size: 18 },
    { left: 50, top: 7, char: "1", size: 22 },
    { left: 70, top: 10, char: "0", size: 18 },
    { left: 90, top: 8, char: "1", size: 20 },
    { left: 20, top: 18, char: "0", size: 18 },
    { left: 40, top: 17, char: "1", size: 22 },
    { left: 60, top: 19, char: "0", size: 18 },
    { left: 80, top: 16, char: "1", size: 20 },
    { left: 10, top: 29, char: "0", size: 18 },
    { left: 30, top: 28, char: "1", size: 22 },
    { left: 50, top: 30, char: "0", size: 18 },
    { left: 70, top: 27, char: "1", size: 20 },
    { left: 90, top: 29, char: "0", size: 18 },
    { left: 20, top: 39, char: "1", size: 20 },
    { left: 40, top: 38, char: "0", size: 18 },
    { left: 60, top: 40, char: "1", size: 22 },
    { left: 80, top: 37, char: "0", size: 18 },
    { left: 10, top: 50, char: "1", size: 20 },
    { left: 30, top: 49, char: "0", size: 18 },
    { left: 50, top: 51, char: "1", size: 22 },
    { left: 70, top: 48, char: "0", size: 18 },
    { left: 90, top: 50, char: "1", size: 20 },
    { left: 20, top: 60, char: "0", size: 18 },
    { left: 40, top: 59, char: "1", size: 22 },
    { left: 60, top: 61, char: "0", size: 18 },
    { left: 80, top: 58, char: "1", size: 20 },
    { left: 10, top: 71, char: "0", size: 18 },
    { left: 30, top: 70, char: "1", size: 22 },
    { left: 50, top: 72, char: "0", size: 18 },
    { left: 70, top: 69, char: "1", size: 20 },
    { left: 90, top: 71, char: "0", size: 18 },
    { left: 20, top: 82, char: "1", size: 20 },
    { left: 40, top: 81, char: "0", size: 18 },
    { left: 60, top: 83, char: "1", size: 22 },
    { left: 80, top: 80, char: "0", size: 18 },
    { left: 10, top: 92, char: "1", size: 20 },
    { left: 30, top: 91, char: "0", size: 18 },
    { left: 50, top: 93, char: "1", size: 22 },
    { left: 70, top: 90, char: "0", size: 18 },
    { left: 90, top: 92, char: "1", size: 20 },
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
