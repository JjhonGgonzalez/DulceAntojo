const formulario = document.getElementById("miFormulario");

// Escuchar el evento submit del formulario
formulario.addEventListener("submit", function(event) {
  event.preventDefault(); // Evitar que se envíe el formulario

  // Obtener los valores del formulario
  const referencia = formulario.referenciaProd.value;
  const nombre = formulario.nombreProd.value;
  const precio = formulario.precioProd.value;
  const stock = formulario.stockProd.value;
  const imagen = formulario.imagenProd.value;

  // Guardar los valores en el Local Storage
  const producto = { referencia, nombre, precio, stock, imagen };
  const productos = JSON.parse(localStorage.getItem("productos")) || [];
  productos.push(producto);
  localStorage.setItem("productos", JSON.stringify(productos));

  // Actualizar la tabla de productos
  actualizarTabla();
});

