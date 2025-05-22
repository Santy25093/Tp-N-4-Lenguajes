
const productos = [
    {
        nombre: "Auriculares Bluetooth",
        precio: 4500,
        imagen: "img/buds.jpeg",
        descripcion: "Auriculares inalámbricos con gran calidad de sonido."
    },
    {
        nombre: "Mouse Gamer",
        precio: 3200,
        imagen: "img/g203.jpg",
        descripcion: "Mouse ergonómico con luces RGB y alta precisión."
    },
    {
        nombre: "Teclado Mecánico",
        precio: 8700,
        imagen: "img/Teclado.jpg",
        descripcion: "Teclado con switches rojos ideal para escribir y jugar."
    },
    {
        nombre: "Notebook 14\"",
        precio: 120000,
        imagen: "img/Notebook.jpg",
        descripcion: "Notebook liviana y potente, ideal para estudiar o trabajar."
    },
    {
        nombre: "Silla Gamer",
        precio: 30000,
        imagen: "img/Silla.jpeg",
        descripcion: "Diseño ergonómico con soporte lumbar."
    },
    {
        nombre: "Smartphone 128GB",
        precio: 90000,
        imagen: "img/Celular.jpeg",
        descripcion: "Teléfono rápido y con gran almacenamiento."
    },
    {
        nombre: "Monitor 24 Pulgadas",
        precio: 55000,
        imagen: "img/Monitor.jpeg",
        descripcion: "Pantalla Full HD con bordes delgados."
    },
    {
        nombre: "Parlante Bluetooth",
        precio: 8000,
        imagen: "img/Parlante.jpeg",
        descripcion: "Sonido potente para todas tus fiestas."
    },
    {
        nombre: "Cámara Web HD",
        precio: 3500,
        imagen: "img/Camara.jpg",
        descripcion: "Perfecta para videollamadas con imagen clara."
    }
];

// Usamos map() para recorrer los productos
const contenedor = document.getElementById("contenedor-productos");

productos.map(producto => {
    contenedor.innerHTML += `
        <div class="card">
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p><strong>Precio:</strong> $${producto.precio}</p>
            <p>${producto.descripcion}</p>
        </div>
    `;
});
