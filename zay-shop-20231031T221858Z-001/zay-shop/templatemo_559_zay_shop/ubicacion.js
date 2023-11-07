// Obtén las referencias al enlace "Perros", la lista de categorías y el contenedor de productos
const perrosLink = document.getElementById('perros-link');
const categoriasLista = document.getElementById('categorias');
const contenedorProductos = document.getElementById('productos');

// Agrega un event listener al enlace "Perros"
perrosLink.addEventListener('click', filtrarProductos);

function filtrarProductos(evento) {
    // Evita el comportamiento predeterminado del enlace
    evento.preventDefault();

    // Obtiene todas las tarjetas de productos
    const tarjetasProductos = contenedorProductos.querySelectorAll('.card');

    // Recorre todas las tarjetas de productos y muestra/oculta en función de la categoría
    tarjetasProductos.forEach((tarjeta) => {
        const categoriaProducto = tarjeta.querySelector('.h3').textContent;
        if (categoriaProducto === 'Perros') {
            tarjeta.style.display = 'block'; // Muestra la tarjeta si está relacionada con "Perros"
        } else {
            tarjeta.style.display = 'none'; // Oculta las demás tarjetas
        }
    });

    // Opcionalmente, puedes quitar la clase "active" de otros enlaces de categorías
    const enlacesCategorias = categoriasLista.getElementsByTagName('a');
    for (const enlace of enlacesCategorias) {
        enlace.classList.remove('active');
    }

    // Agrega la clase "active" al enlace de categoría clicado
    perrosLink.classList.add('active');
}

// Inicialmente, muestra todos los productos
filtrarProductos({ preventDefault: () => {} });

