/* =========================================
   SCROLL SUAVE PARA LINKS DO MENU
========================================= */
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        const target = document.querySelector(this.getAttribute("href"));
        if (!target) return;

        e.preventDefault();
        window.scrollTo({
            top: target.offsetTop - 70,
            behavior: "smooth"
        });
    });
});


/* =========================================
   FILTRO DOS PROJETOS (Dashboards / Técnicos)
========================================= */

const filterButtons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".case-card");

filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {

        // Remove seleção antiga
        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const filtro = btn.dataset.filter;

        cards.forEach(card => {
            const categoria = card.dataset.category;

            if (filtro === categoria) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });

    });
});


/* =========================================
   BANCO DE IMAGENS DO MODAL
========================================= */

const projetosImagens = {

    crm: [
        "projeto-portf/power bi - operação de crm.png"
    ],

    logistica: [
        "projeto-portf/power bi - receita logistica.png"
    ],

    concorrencia: [
        "projeto-portf/power bi -analise de concorrencia delivery - trimestre 3 de 2025.jpg"
    ],

    rh: [
        "projeto-portf/power bi - analise de RH.png"
    ],

    executivo: [
        "projeto-portf/power bi - executivo de pedidos.png"
    ],

    delivery: [
        "projeto-portf/power bi - delivery 1.png",
        "projeto-portf/power bi - delivery 2.png",
        "projeto-portf/power bi - delivery 3.png",
        "projeto-portf/power bi - delivery 4.png",
        "projeto-portf/power bi - delivery 5.png"
    ],

    ecomm: [
        "projeto-portf/power bi - ecomm 1.png",
        "projeto-portf/power bi - ecomm 2.png",
        "projeto-portf/power bi - ecomm 3.png"
    ]
};


/* =========================================
   MODAL DE IMAGENS DOS PROJETOS
========================================= */

const modal = document.getElementById("modal-imagens");
const modalTitulo = document.getElementById("modal-titulo");
const modalCarrossel = document.getElementById("modal-carrossel");
const closeBtn = document.querySelector(".close-modal");

document.querySelectorAll(".btn-vermais").forEach(button => {

    button.addEventListener("click", () => {

        const projetoID = button.dataset.projeto;
        const imagens = projetosImagens[projetoID] || [];

        // Título do card
        const titulo = button.closest(".case-card").querySelector("h3").textContent;
        modalTitulo.textContent = titulo;

        // Carregar imagens
        modalCarrossel.innerHTML = imagens
            .map(img => `<img src="${img}" class="modal-img">`)
            .join("");

        modal.style.display = "flex";
    });

});


/* =========================================
   FECHAR MODAL
========================================= */

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
