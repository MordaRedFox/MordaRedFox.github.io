// Скрипт для открытия изображений как модальных окон в карточках проектов
document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const closeSpan = document.querySelector(".modal-close");
    if (!modal || !modalImg) return;
    const screenshotLinks = document.querySelectorAll(".screenshot-link");
    screenshotLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const img = this.querySelector("img");
            if (img) {
                modal.style.display = "block";
                modalImg.src = img.src;
            }
        });
    });
    if (closeSpan) {
        closeSpan.onclick = function() {
            modal.style.display = "none";
        };
    }
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
});
