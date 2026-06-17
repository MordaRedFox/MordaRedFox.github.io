// Добавляет карточки проектов и выравнивает высоту их заголовков
const projectsData = [
    {
        id: 1,
        name: "Amateur Site Pizzeria",
        shortDesc: "Полноценный сайт пиццерии на Django с системой аутентификации и защитой от веб-угроз. Есть хорошая админ панель для управления пользователями и меню сайта. Сайт является интерактивным и содержит секреты.",
        language: "Python",
        pageUrl: "projects/project_pizzeria.html"
    },
    {
        id: 2,
        name: "Введение в машинное обучение",
        shortDesc: "Реализация и анализ четырех моделей ML: линейная и логистическая регрессия, дерево решений, случайный лес. Модели выполнены для задач предсказания оценок, анализа удовлетворенности, распознавания цифр.",
        language: "Python",
        pageUrl: "projects/project_ml.html"
    },
    {
        id: 3,
        name: "Telegram Feedback Bot",
        shortDesc: "Асинхронный Telegram-бот для сбора обратной связи с мультиязычностью, очередью сообщений и админ-панелью в самом боте. Пользователи пишут боту запрос, который он перенаправляет админимтратору.",
        language: "Python",
        pageUrl: "projects/project_telegram_bot.html"
    }
];

function renderProjectCards() {
    const grid = document.getElementById("projectsGrid");
    if (!grid) return;
    const cardsHTML = projectsData.map(project => `
        <div class="project-card">
            <h3>
                <a href="${project.pageUrl}">${escapeHtml(project.name)}</a>
            </h3>
            <p class="project-description" style="text-align: justify;">${escapeHtml(project.shortDesc)}</p>
            <div class="project-meta">
                <span class="project-language">💻 ${escapeHtml(project.language)}</span>
                <span class="project-link">
                    <a href="${project.pageUrl}">Подробнее</a>
                </span>
            </div>
        </div>
    `).join("");
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
        if (m === "&") return "&amp;";
        if (m === "<") return "&lt;";
        if (m === ">") return "&gt;";
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
