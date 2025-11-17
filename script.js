// script.js limpo e otimizado
// Mantido para futuras animações, interações e melhorias.

// =============================
// SCROLL SUAVE PARA LINKS
// =============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        const targetID = this.getAttribute("href");

        // Evita erro caso o link seja externo
        if (!targetID.startsWith("#")) return;

        e.preventDefault();
        const targetElement = document.querySelector(targetID);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 60,
                behavior: "smooth"
            });
        }
    });
});
