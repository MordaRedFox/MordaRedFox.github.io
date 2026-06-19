// Добавляет карточки достижений на главную страницу и запускает анимацию,
// если достижению поставить лайк
const MEME_SONG_URL = "media/sounds/social_credit.mp3";
let currentAudio = null;
let animationTimeoutIds = [];
let likesMemory = [];

function playMemeSong() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        currentAudio = null;
    }
    const audio = new Audio(MEME_SONG_URL);
    audio.volume = 0.6;
    audio.play().catch(e => console.warn("Автоплей заблокирован", e));
    currentAudio = audio;
    audio.addEventListener("ended", () => {
        if (currentAudio === audio) currentAudio = null;
    });
}

function clearSocialCreditParty() {
    animationTimeoutIds.forEach(id => clearTimeout(id));
    animationTimeoutIds = [];
    const elementsToRemove = document.querySelectorAll(
        ".social-credit-party, .social-credit-toast, .credit-stamp");
    elementsToRemove.forEach(el => el.remove());
    const approveCards = document.querySelectorAll(".approve-card");
    approveCards.forEach(card => card.remove());
}

function startSocialCreditParty() {
    clearSocialCreditParty();
    const partyDiv = document.createElement("div");
    partyDiv.className = "social-credit-party";
    document.body.appendChild(partyDiv);

    const stamp = document.createElement("div");
    stamp.className = "credit-stamp";
    stamp.innerHTML = "🏅 СОЦИАЛЬНЫЙ КРЕДИТ +1000 🏅";
    document.body.appendChild(stamp);
    const stampTimeout = setTimeout(() => stamp.remove(), 6000);
    animationTimeoutIds.push(stampTimeout);
    
    const toast = document.createElement("div");
    toast.className = "social-credit-toast";
    toast.innerHTML = "📈 +1000 SOCIAL CREDIT 📈";
    document.body.appendChild(toast);
    const toastTimeout = setTimeout(() => toast.remove(), 8000);
    animationTimeoutIds.push(toastTimeout);
    
    const emojis = ["👍", "📈", "🎉", "⭐", "🐉", "🏮", "💯", "🤝", "✨",
        "😻", "🌸", "🍜"];
    for (let i = 0; i < 50; i++) {
        const emojiTimeout = setTimeout(() => {
            const emoji = document.createElement("div");
            emoji.className = "floating-emoji";
            emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            emoji.style.left = (5 + Math.random() * 85) + "%";
            emoji.style.top = (5 + Math.random() * 80) + "%";
            emoji.style.fontSize = (Math.random() * 32 + 22) + "px";
            emoji.style.transform = "rotate(" + (Math.random() * 60 - 30) + "deg)";
            partyDiv.appendChild(emoji);
            setTimeout(() => emoji.remove(), 7000);
        }, i * 80);
        animationTimeoutIds.push(emojiTimeout);
    }
    const approveMessages = ["✅ ОДОБРЕНО ПАРТИЕЙ ✅", "😻 ВЫДАТЬ КОШКО-ЖЕНА 😻",
        "🍜 ВЫДАТЬ МИСКА РИС 🍜", "💯 ВЫСШИЙ БАЛЛ 💯", "🐉 ДУХ ПРЕДКОВ 🐉"];
    const positions = [
        { left: "5%", top: "70%" },
        { left: "75%", top: "15%" },
        { left: "15%", top: "85%" },
        { left: "60%", top: "45%" },
        { left: "30%", top: "60%" },
    ];
    for (let i = 0; i < 5; i++) {
        const cardTimeout = setTimeout(() => {
            const card = document.createElement("div");
            card.className = "approve-card";
            card.textContent = approveMessages[i % approveMessages.length];
            card.style.position = "fixed";
            card.style.left = positions[i].left;
            card.style.top = positions[i].top;
            document.body.appendChild(card);
            setTimeout(() => card.remove(), 5500);
        }, i * 400);
        animationTimeoutIds.push(cardTimeout);
    }
    const cleanContainerTimeout = setTimeout(() => partyDiv.remove(), 8500);
    animationTimeoutIds.push(cleanContainerTimeout);
}

function renderAchievements() {
    const grid = document.getElementById("achievementsGrid");
    if (!grid) return;
    const data = window.achievementsData || [];
    if (data.length === 0) {
        grid.innerHTML = "<div class=\"loading-achievements\">Пока нет достижений :(</div>";
        return;
    }
    likesMemory = data.map(item => item.likes || 0);
    const cardsHTML = data.map((item, idx) => {
        const orientationClass = item.orientation === "portrait" ? "portrait" : "";
        const likeCount = likesMemory[idx] || 0;
        return `
            <div class="achievement-card" data-achievement-index="${idx}">
                <img src="${item.image}" 
                     alt="${escapeHtml(item.title)}" 
                     class="achievement-image ${orientationClass}"
                     data-modal="${item.image}">
                <div class="achievement-content">
                    <div class="achievement-title">${escapeHtml(item.title)}</div>
                    <div class="achievement-description">${escapeHtml(item.description)}</div>
                    <div class="achievement-footer">
                        <div class="like-button" data-idx="${idx}">
                            👍 <span class="like-count" id="likeCount-${idx}">${likeCount}</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join("");
    grid.innerHTML = cardsHTML;
    attachModalHandlers();
    document.querySelectorAll(".like-button").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const idx = parseInt(btn.dataset.idx, 10);
            if (isNaN(idx)) return;
            likesMemory[idx] = (likesMemory[idx] || 0) + 1;
            const countSpan = document.getElementById("likeCount-" + idx);
            if (countSpan) countSpan.innerText = likesMemory[idx];
            playMemeSong();
            startSocialCreditParty();
            btn.style.transform = "scale(0.95)";
            setTimeout(() => { if(btn) btn.style.transform = ""; }, 150);
        });
    });
}

function attachModalHandlers() {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const closeSpan = document.querySelector(".modal-close");
    if (!modal || !modalImg) return;
    document.querySelectorAll(".achievement-image").forEach(img => {
        img.removeEventListener("click", modalHandler);
        img.addEventListener("click", modalHandler);
    });
    function modalHandler(e) {
        e.stopPropagation();
        modal.style.display = "block";
        modalImg.src = this.src;
    }
    if (closeSpan) {
        closeSpan.onclick = () => modal.style.display = "none";
    }
    window.onclick = (event) => {
        if (event.target === modal) modal.style.display = "none";
    };
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
    renderAchievements();
});
