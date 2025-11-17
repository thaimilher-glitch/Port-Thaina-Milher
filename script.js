/* =========================================
    SCROLL SUAVE
========================================= */
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        const target = document.querySelector(this.getAttribute("href"));
        if (!target) return;

        e.preventDefault();
        window.scrollTo({
            top: target.offsetTop - 60,
            behavior: "smooth"
        });
    });
});


/* =========================================
    FILTRO DE PROJETOS (DASHBOARDS / TÉCNICOS)
========================================= */
const filterButtons = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll(".case-card");

filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {

        // Remove seleção anterior
        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const categoria = btn.dataset.filter;

        projects.forEach(card => {
            const cardCategory = card.dataset.category;

            if (categoria === "dashboards" && cardCategory === "dashboards") {
                card.style.display = "block";

            } else if (categoria === "tecnicos" && cardCategory === "tecnicos") {
                card.style.display = "block";

            } else if (categoria !== cardCategory) {
                card.style.display = "none";
            }
        });
    });
});


/* =========================================
    MODAL DE IMAGENS (DINÂMICO)
========================================= */

// OBJETO: cadastra aqui os painéis e imagens reais
const projetosImagens = {
    "pma-pos": [
        "projeto-portf/power bi - Vendas 1.png",
        "projeto-portf/power bi - vendas mobile.png",
        "projeto-portf/power bi - comercial 2.png",
        "projeto-portf/power bi -analise de concorrencia delivery - trimestre 3 de 2025.jpg"
    ],

    "logistica-compra": [
        "projeto-portf/python - regressão logistica 1.png",
        "projeto-portf/python - regressão logistica 2.png",
        "projeto-portf/python regressão logistica 3.png"
    ]
};


// ELEMENTOS DO MODAL
const modal = document.getElementById("modal-imagens");
const modalTitulo = document.getElementById("modal-titulo");
const modalCarrossel = document.getElementById("modal-carrossel");
const closeModal = document.querySelector(".close-modal");


// BOTÕES "VER MAIS"
document.querySelectorAll(".btn-vermais").forEach(btn => {
    btn.addEventListener("click", () => {
        const projetoID = btn.dataset.projeto;
        const imagens = projetosImagens[projetoID] || [];

        // Título automático a partir do card
        modalTitulo.textContent = btn.closest(".case-card").querySelector("h3").textContent;

        // Carrega imagens no modal
        modalCarrossel.innerHTML = imagens
            .map(img => `<img src="${img}" class="modal-img">`)
            .join("");

        // Exibe modal
        modal.style.display = "flex";
    });
});


// FECHAR MODAL (X)
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// FECHAR MODAL AO CLICAR FORA
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
