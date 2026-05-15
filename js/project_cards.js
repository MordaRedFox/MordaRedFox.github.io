// Данные о проектах: id, название, краткое описание, язык, ссылка на локальную страницу
const projectsData = [
    {
    id: 1,
    name: "Amateur Site Pizzeria",
    shortDesc: "Полноценный сайт пиццерии на Django с системой аутентификации и защитой от атак",
    language: "Django / Python",
    pageUrl: "project_pizzeria.html"
    }
];

// Функция отрисовки карточек
function renderProjectCards() {
    const grid = document.getElementById('projectsGrid');
    if (!grid) return;
    const cardsHTML = projectsData.map(project => `
        <div class="project-card">
            <h3>
                <a href="${project.pageUrl}">${escapeHtml(project.name)}</a>
            </h3>
            <p class="project-description style="text-align: justify;">${escapeHtml(project.shortDesc)}</p>
            <div class="project-meta">
                <span class="project-language">💻 ${escapeHtml(project.language)}</span>
                <span class="project-link">
                    <a href="${project.pageUrl}">Подробнее</a>
                </span>
            </div>
        </div>
    `).join('');
    grid.innerHTML = cardsHTML;
}

function escapeHtml(str) {
    return str.replace(/[&<>]/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderProjectCards();
});
