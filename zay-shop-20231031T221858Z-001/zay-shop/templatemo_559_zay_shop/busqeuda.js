document.addEventListener("DOMContentLoaded", function () {
    const searchForm = document.getElementById("searchForm");

    searchForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevenir la acción predeterminada del formulario

        const searchTerm = document.getElementById("inputMobileSearch").value;
        const targetURL = "https://9039444613871.gumroad.com/l/dfpkq?search=" + encodeURIComponent(searchTerm);
        
        // Redirige a la URL con el término de búsqueda
        window.location.href = targetURL;
    });
});
