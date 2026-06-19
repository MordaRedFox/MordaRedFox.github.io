// Выравнивает заголовки карточек навыков по минимальной высоте
function alignSkillsHeaders() {
    const headers = document.querySelectorAll(".skills-category h3");
    if (!headers.length) return;
    headers.forEach(h => h.style.minHeight = "");
    const heights = [];
    headers.forEach(h => heights.push(h.offsetHeight));
    if (!heights.length) return;
    const maxHeight = Math.max(...heights);
    headers.forEach(h => h.style.minHeight = maxHeight + "px");
}

document.addEventListener("DOMContentLoaded", alignSkillsHeaders);

let skillsResizeTimer;
window.addEventListener("resize", () => {
    clearTimeout(skillsResizeTimer);
    skillsResizeTimer = setTimeout(alignSkillsHeaders, 150);
});
