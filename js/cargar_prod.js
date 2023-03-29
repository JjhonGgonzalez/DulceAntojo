// Función para crear una tabla y mostrar los valores almacenados
function actualizarTabla() {
    // Obtener la referencia al cuerpo de la tabla
    const tabla = document.getElementById("tablaProductos");
    const tbody = tabla.getElementsByTagName("tbody")[0];
  
    // Limpiar la tabla existente
    tbody.innerHTML = "";
  
    // Obtener los productos del Local Storage
    const productos = JSON.parse(localStorage.getItem("productos")) || [];
  
    // Recorrer los productos y agregar una fila por cada uno
    productos.forEach(function(producto) {
      const fila = document.createElement("tr");
      fila.innerHTML = `
        <td>${producto.referencia}</td>
        <td>${producto.nombre}</td>
        <td>${producto.precio}</td>
        <td>${producto.stock}</td>
        <td><img src="${producto.imagen}" width="50" height="50"></td>
      `;
      tbody.appendChild(fila);
    });
  }
  
  // Llamar a la función de actualización al cargar la página
  actualizarTabla();
  
  
  <table id="tablaProductos">
  <thead>
    <tr>
      <th>Referencia</th>
      <th>Nombre</th>
      <th>Precio</th>
      <th>Stock</th>
      <th>Imagen</th>
    </tr>
  </thead>
  <tbody>
  </tbody>
  </table>