document.addEventListener("DOMContentLoaded", () => {

    // Fade-in inicial del card principal
    const mainCard = document.getElementById("mainCard");
    setTimeout(() => {
        mainCard.classList.remove("opacity-0");
        mainCard.classList.add("opacity-100");
    }, 100);

    // Animación al cargar la tabla
    const tableBody = document.getElementById("tableBody");
    setTimeout(() => {
        tableBody.classList.remove("opacity-0");
        tableBody.classList.add("opacity-100");
    }, 400);

    // Animación del botón
    const btn = document.getElementById("btnSubmit");
    btn.addEventListener("mouseover", () => {
        btn.classList.add("scale-105");
    });
    btn.addEventListener("mouseout", () => {
        btn.classList.remove("scale-105");
    });

    // Animación del formulario al enviar
    const form = document.getElementById("leadForm");
    form.addEventListener("submit", () => {
        btn.innerText = "Guardando...";
        btn.classList.add("animate-pulse");
    });
});
