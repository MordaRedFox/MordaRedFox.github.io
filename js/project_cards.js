// Данные о проектах: id, название, краткое описание, язык, ссылка на локальную страницу
const projectsData = [
    {
        id: 1,
        name: "Amateur Site Pizzeria",
        shortDesc: "Полноценный сайт пиццерии на Django с системой аутентификации и защитой от веб-угроз. Есть хорошая админ панель для управления пользователями и меню сайта. Сайт интерактивный и с секретами.",
        language: "Python / Django",
        pageUrl: "project_pizzeria.html"
    },
    {
        id: 2,
        name: "Введение в машинное обучение",
        shortDesc: "Реализация и анализ четырёх моделей ML: линейная и логистическая регрессия, дерево решений, случайный лес. Предсказание оценок, анализ удовлетворённости, распознавание цифр.",
        language: "Python / scikit-learn",
        pageUrl: "project_ml.html"
    },
    {
        id: 3,
        name: "Telegram Feedback Bot",
        shortDesc: "Асинхронный Telegram-бот для сбора обратной связи с мультиязычностью, очередью сообщений и админ-панелью в самом боте.",
        language: "Python / python-telegram-bot",
        pageUrl: "project_telegram_bot.html"
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
            <p class="project-description" style="text-align: justify;">${escapeHtml(project.shortDesc)}</p>
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
