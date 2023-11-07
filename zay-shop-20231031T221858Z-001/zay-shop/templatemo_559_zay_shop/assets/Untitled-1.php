<?php
// Array de productos (nombre => URL)
$productos = array(
    "Dog Chow Adulto" => "https://9039444613871.gumroad.com/l/dfpkq",
    "Otro Producto" => "https://www.ejemplo.com/producto/otro-producto",
);

// Obtener el término de búsqueda desde la URL
$termino_busqueda = isset($_GET["producto"]) ? $_GET["producto"] : "";

// Verificar si el producto existe en el array
if (array_key_exists($termino_busqueda, $productos)) {
    // Redirigir al producto correspondiente
    header("Location: " . $productos[$termino_busqueda]);
    exit;
} else {
    // Redirigir a una página de "Producto no encontrado" o realizar otra acción
    header("Location: producto-no-encontrado.html");
    exit;
}
?>
