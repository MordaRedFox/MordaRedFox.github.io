// Данные достижений: изображение, заголовок, описание, ориентация
const achievementsData = [
    {
        image: "media/achievements/it_marathon.png",
        title: "Победитель хакатона",
        description: "С командой занял второе место во Всероссийском IT-марафоне: \"Цифровые инструменты для бизнеса - 2025\"",
        orientation: "portrait"
    },
    {
        image: "media/achievements/ru_code_2025.png",
        title: "Финалист РуКод 2025",
        description: "Финалист международного чемпионата по алгоритмическому программированию",
        orientation: "portrait"
    },
    {
        image: "media/achievements/mtc_true_tech_champ_2025.png",
        title: "Полуфиналист MTC True Tech Champ 2025",
        description: "Дошел до полуфинала в алгоритмическом треке MTC True Tech Champ",
        orientation: "portrait"
    },
];

function renderAchievements() {
    const grid = document.getElementById('achievementsGrid');
    if (!grid) return;
    if (achievementsData.length === 0) {
        grid.innerHTML = '<div class="loading-achievements">Пока нет достижений :(</div>';
        return;
    }
    const cardsHTML = achievementsData.map(item => {
        const orientationClass = item.orientation === 'portrait' ? 'portrait' : '';
        return `
            <div class="achievement-card">
                <img src="${item.image}" 
                     alt="${item.title}" 
                     class="achievement-image ${orientationClass}"
                     data-modal="${item.image}">
                <div class="achievement-content">
                    <div class="achievement-title">${escapeHtml(item.title)}</div>
                    <div class="achievement-description">${escapeHtml(item.description)}</div>
                </div>
            </div>
        `;
    }).join('');
    grid.innerHTML = cardsHTML;
    // Обработчики клика для открытия модального окна
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeSpan = document.querySelector('.modal-close');
    document.querySelectorAll('.achievement-image').forEach(img => {
        img.addEventListener('click', (e) => {
            e.stopPropagation();
            modal.style.display = 'block';
            modalImg.src = img.src;
        });
    });
    if (closeSpan) {
        closeSpan.onclick = function() {
            modal.style.display = 'none';
        };
    }
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
}

function escapeHtml(str) {
    return str.replace(/[&<>]/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
}

document.addEventListener('DOMContentLoaded', renderAchievements);
