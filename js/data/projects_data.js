// Информация о проектах
const projectsData = [
    {
        id: "pizzeria",
        name: "Amateur Site Pizzeria",
        shortDesc: "Полноценный сайт пиццерии на Django с системой аутентификации и защитой от веб-угроз. Есть хорошая админ панель для управления пользователями и меню сайта. Сайт является интерактивным и содержит секреты.",
        language: "Python",
        pageUrl: "project_pizzeria.html"
    },
    {
        id: "ml",
        name: "Введение в машинное обучение",
        shortDesc: "Реализация и анализ четырех моделей ML: линейная и логистическая регрессия, дерево решений, случайный лес. Модели выполнены для задач предсказания оценок, анализа удовлетворенности, распознавания цифр.",
        language: "Python",
        pageUrl: "project_ml.html"
    },
    {
        id: "telegram_bot",
        name: "Telegram Feedback Bot",
        shortDesc: "Асинхронный Telegram-бот для сбора обратной связи с мультиязычностью, очередью сообщений и админ-панелью в самом боте. Пользователи пишут боту запрос, который он перенаправляет админимтратору.",
        language: "Python",
        pageUrl: "project_telegram_bot.html"
    }
];

window.projectsData = projectsData;
