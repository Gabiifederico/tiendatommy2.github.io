// carga de productos mas id
const productos = [
    // Abrigos
    {
        id: "sweater-01",
        titulo: "Sweater inscripcion tejida",
        imagen: "./img/abrigos/sweatertejido.webp",
        categoria: {
            nombre: "sweater",
            id: "abrigos"
        },
        precio: 24000
    },
    {
        id: "sweater-02",
        titulo: "Sweater tricolor",
        imagen: "./img/abrigos/sweatertricolor.webp",
        categoria: {
            nombre: "sweater",
            id: "abrigos"
        },
        precio: 49000
    },
    {
        id: "sweater-03",
        titulo: "Sweter cierre textura mixta",
        imagen: "./img/abrigos/sweatercierre.webp",
        categoria: {
            nombre: "sweater",
            id: "abrigos"
        },
        precio: 1000
    },
    {
        id: "sweater-04",
        titulo: "sweater punto trenzado",
        imagen: "./img/abrigos/sweaterpunto.webp",
        categoria: {
            nombre: "sweater",
            id: "abrigos"
        },
        precio: 25000
    },
    {
        id: "sweater-05",
        titulo: "Sweater basico algodon rojo",
        imagen: "./img/abrigos/sweaterbasico.webp",
        categoria: {
            nombre: "sweater",
            id: "abrigos"
        },
        precio: 42000
    },
    // Camisas
    {
        id: "camisas-01",
        titulo: "Camisa lino a rayas",
        imagen: "./img/camisas/camisalino.webp",
        categoria: {
            nombre: "Camisas",
            id: "camisetas"
        },
        precio: 35000
    },
    {
        id: "camisas-02",
        titulo: "camisa jean",
        imagen: "./img/camisas/camisajean.webp",
        categoria: {
            nombre: "Camisas",
            id: "camisetas"
        },
        precio: 32000
    },
    {
        id: "camisas-03",
        titulo: "Camisa bandera",
        imagen: "./img/camisas/camisabandera.webp",
        categoria: {
            nombre: "Camisas",
            id: "camisetas"
        },
        precio: 42000
    },
    {
        id: "camisas-04",
        titulo: "Camisa a rayas",
        imagen: "./img/camisas/camisaarayas.webp",
        categoria: {
            nombre: "Camisas",
            id: "camisetas"
        },
        precio: 32000
    },
    {
        id: "camisas-05",
        titulo: "Camisa cuadros y rayas",
        imagen: "./img/camisas/camisacuadrosrayas.webp",
        categoria: {
            nombre: "Camisas",
            id: "camisetas"
        },
        precio: 33000
    },
    {
        id: "camisas-06",
        titulo: "Camisa microestampado",
        imagen: "./img/camisas/camisamicroestampado.jpg",
        categoria: {
            nombre: "Camisas",
            id: "camisetas"
        },
        precio: 31000
    },
    {
        id: "camisas-07",
        titulo: "Camisa pique",
        imagen: "./img/camisas/camisapique.webp",
        categoria: {
            nombre: "Camisas",
            id: "camisetas"
        },
        precio: 29000
    },
    {
        id: "camisas-08",
        titulo: "Camisa diseño geometrico",
        imagen: "./img/camisas/camisageometrico.webp",
        categoria: {
            nombre: "Camisas",
            id: "camisetas"
        },
        precio: 36000
    },
    // Pantalones
    {
        id: "pantalon-01",
        titulo: "Pantalon chino bleecker",
        imagen: "./img/pantalones/pantalonchino.webp",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 45000
    },
    {
        id: "pantalon-02",
        titulo: "Pantalon chino bleecker slimfit",
        imagen: "./img/pantalones/pantalonchinoelastizado.webp",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 47000
    },
    {
        id: "pantalon-03",
        titulo: "Pantalón jogger scanton",
        imagen: "./img/pantalones/joggerscanton.webp",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 25000
    },
    {
        id: "pantalon-04",
        titulo: "pantalon chino straight fit",
        imagen: "./img/pantalones/chinostraigh.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 36000
    },
    {
        id: "pantalon-05",
        titulo: "jogger gris fit",
        imagen: "./img/pantalones/joggergrisfit.webp",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 46000
    }

   
];


const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");

// contenedor de productos con div de cat de productos
function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {
// botones con id por categorias
        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}