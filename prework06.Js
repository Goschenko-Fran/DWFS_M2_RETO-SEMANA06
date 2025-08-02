// Carro de compras sin nada.
let carroCompras = [];

// 1. Función de declaracion,  agregarProducto
function agregarProducto(nombre, precio) {
  carroCompras.push({ nombre, precio });
  console.log(`Producto agregado: ${nombre} - $${precio}`);
}

// 2. Función de expresion: eliminarProducto
const eliminarProducto = function(nombre) {
  const index = carroCompras.findIndex(p => p.nombre === nombre);
  if (index !== -1) {
    const eliminado = carroCompras.splice(index, 1)[0];
    console.log(`Producto eliminado: ${eliminado.nombre}`);
  } else {
    console.log(`Producto no encontrado para eliminar: ${nombre}`);
  }
};

// 3. Funcion anonima, buscarProducto
const buscarProducto = function(nombre) {
  return carroCompras.find(function(p) {
    return p.nombre === nombre;
  });
};

// 4. Funcion de flech, mostrarProductos
const mostrarProductos = () => {
  if (carroCompras.length === 0) {
    console.log("📭 El carro de compras está vacío.");
    return;
  }
  console.log("🛒 Productos en el carro de compras:");
  carroCompras.forEach(p => console.log(`- ${p.nombre}: $${p.precio}`));
};

// PRUEBAS DE USO 

// Agregar productos
agregarProducto("Smartphone", 1200);
agregarProducto("Audífonos", 150);
agregarProducto("Cargador", 50);

// Mostrar productos
mostrarProductos();

// Buscar un producto
let resultado = buscarProducto("Audífonos");
if (resultado) {
  console.log(`Producto encontrado: ${resultado.nombre} - $${resultado.precio}`);
} else {
  console.log("Producto no encontrado.");
}

// Eliminar producto
eliminarProducto("Cargador");

// Mostrar productos nuevamente
mostrarProductos();

// Buscar un producto que ya fue eliminado
let resultado2 = buscarProducto("Cargador");
if (resultado2) {
  console.log(`Producto encontrado: ${resultado2.nombre}`);
} else {
  console.log("Producto no encontrado.");
}