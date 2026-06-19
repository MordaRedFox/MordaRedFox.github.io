// Рендеринг карточек проектов на главной странице
function renderProjectCards() {
    const grid = document.getElementById("projectsGrid");
    if (!grid) return;
    const projects = window.projectsData || [];
    if (projects.length === 0) {
        grid.innerHTML = "<div class=\"loading\">Проекты не загружены</div>";
        return;
    }
    const cardsHTML = projects.map(project => `
        <div class="project-card">
            <h3>
                <a href="projects/${project.pageUrl}">${escapeHtml(project.name)}</a>
            </h3>
            <p class="project-description" style="text-align: justify;">${escapeHtml(project.shortDesc)}</p>
            <div class="project-meta">
                <span class="project-language">💻 ${escapeHtml(project.language)}</span>
                <span class="project-link">
                    <a href="projects/${project.pageUrl}">Подробнее</a>
                </span>
            </div>
        </div>
    `).join('');
    grid.innerHTML = cardsHTML;
    alignProjectTitles();
}

function alignProjectTitles() {
    const cards = document.querySelectorAll(".project-card");
    if (!cards.length) return;
    cards.forEach(card => {
        const title = card.querySelector("h3");
        if (title) title.style.minHeight = "";
    });
    const heights = [];
    cards.forEach(card => {
        const title = card.querySelector("h3");
        if (title) heights.push(title.offsetHeight);
    });
    if (!heights.length) return;
    const maxHeight = Math.max(...heights);
    cards.forEach(card => {
        const title = card.querySelector("h3");
        if (title) {
            title.style.minHeight = maxHeight + "px";
        }
    });
}

function escapeHtml(str) {
    return str.replace(/[&<>]/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
}

document.addEventListener("DOMContentLoaded", () => {
    renderProjectCards();
});

let resizeTimer;
window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(alignProjectTitles, 150);
});
