// Рендеринг сертификатов с группировкой и аккордеоном
function renderCertificates() {
    const container = document.getElementById("certificatesContainer");
    if (!container) return;
    const data = window.certificatesData || {};
    const categoryKeys = Object.keys(data);
    if (categoryKeys.length === 0) {
        container.innerHTML = "<div class=\"loading-certificates\">Сертификаты пока не загружены</div>";
        return;
    }
    let html = "";
    categoryKeys.forEach(category => {
        const items = data[category];
        if (!items || items.length === 0) return;
        html += `
            <div class="certificate-category collapsed">
                <div class="certificate-category-header">
                    <span class="certificate-category-title">${escapeHtml(category)}</span>
                    <span class="certificate-category-toggle">▶</span>
                </div>
                <div class="certificates-grid-wrapper">
                    <div class="certificates-grid">
        `;
        items.forEach(item => {
            html += `
                <div class="certificate-card" data-pdf="${escapeHtml(item.file)}">
                    <div class="certificate-pdf-icon">📄</div>
                    <div class="certificate-content">
                        <div class="certificate-title">${escapeHtml(item.title)}</div>
                        <div class="certificate-description">${escapeHtml(item.description)}</div>
                        <div class="certificate-footer">
                            <a href="${escapeHtml(item.file)}" target="_blank" class="certificate-link">
                                🔗 Открыть PDF
                            </a>
                        </div>
                    </div>
                </div>
            `;
        });
        html += `
                    </div>
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
    // Обработка кликов по заголовкам категорий
    document.querySelectorAll(".certificate-category-header").forEach(header => {
        header.addEventListener("click", function() {
            const category = this.closest(".certificate-category");
            if (category) {
                category.classList.toggle("collapsed");
                category.classList.toggle("open");
                const toggle = category.querySelector(".certificate-category-toggle");
                if (toggle) {
                    toggle.textContent = category.classList.contains("open") ? "▼" : "▶";
                }
            }
        });
    });
    // Обработка кликов по карточкам для открытия PDF
    document.querySelectorAll(".certificate-card").forEach(card => {
        card.addEventListener("click", function(e) {
            if (e.target.tagName === "A") return;
            const pdfUrl = this.dataset.pdf;
            if (pdfUrl) window.open(pdfUrl, "_blank");
        });
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

document.addEventListener("DOMContentLoaded", renderCertificates);
