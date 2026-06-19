// Навигация между проектами (выпадающее меню)
document.addEventListener("DOMContentLoaded", function() {
    const navContainer = document.getElementById("projectNav");
    if (!navContainer) return;
    const currentPath = window.location.pathname.split("/").pop();
    const currentProject = window.projectsData.find(p => p.pageUrl === currentPath);
    const currentId = currentProject ? currentProject.id : null;
    let dropdownHtml = `
        <div class="project-nav">
            <a href="../index.html" class="back-link">◀ Обратно на главную</a>
            <div class="dropdown">
                <button class="dropbtn">📂 Проекты ▼</button>
                <div class="dropdown-content">
    `;
    window.projectsData.forEach(proj => {
        const activeClass = (proj.id === currentId) ? "active" : "";
        dropdownHtml += `<a href="./${proj.pageUrl}" class="${activeClass}">${proj.name}</a>`;
    });
    dropdownHtml += `
                </div>
            </div>
        </div>
    `;
    navContainer.innerHTML = dropdownHtml;
    const dropdown = navContainer.querySelector(".dropdown");
    const btn = dropdown.querySelector(".dropbtn");

    function updateButtonText(isOpen) {
        btn.innerHTML = isOpen ? "📂 Проекты ▲" : "📂 Проекты ▼";
    }

    if (btn) {
        btn.addEventListener("click", function(e) {
            e.stopPropagation();
            const isOpen = dropdown.classList.toggle("open");
            updateButtonText(isOpen);
        });
        document.addEventListener("click", function(e) {
            if (!dropdown.contains(e.target)) {
                const wasOpen = dropdown.classList.contains("open");
                if (wasOpen) {
                    dropdown.classList.remove("open");
                    updateButtonText(false);
                }
            }
        });
    }
});
