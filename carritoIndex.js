let carrito = [];
let filtro = [];
const contadorCarrito = document.getElementById("contador-carrito");
const contenedorCarrito = document.getElementById("carrito-contenedor")
const precioTotal = document.getElementById("precioTotal")
const buscador = document.getElementById("buscador")

document.addEventListener('DOMContentLoaded', () => {
     carrito = JSON.parse(localStorage.getItem('carrito')) || [];   // Utilizo el operador OR ||
        actualizarCarrito()
    }
)

// Filtro de búsqueda por producto

document.addEventListener("keyup", (e) => {
    console.log(e.target.value)
            if(e.target.value) {
            filtro = productos.filter((producto) =>
            producto.nombre.toLowerCase() === (e.target.value).toLowerCase())
        console.log(filtro)
            contenedorProductos.innerHTML = ""

            filtro.forEach((producto) => {
                
            const div = document.createElement("div")
            div.classList.add("card")
            div.innerHTML = `<div class="card card-filter" style="width: 18rem;">
                                <img src="${producto.img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${producto.nombre}</h5>
                                    <p class="card-text">${producto.desc}</p>
                                    <p class="card-text">Precio:$ ${producto.precio}</p>
                                    <button class="btn btn-primary" id=boton${producto.id}>Comprar</button>
                                </div>
                            </div>`
    
            contenedorProductos.appendChild(div)
            
            const boton = document.getElementById( `boton${producto.id}` )
    
            boton.addEventListener('click', ()=> {
                agregarAlCarrito(producto.id)
                
            })
    
        })
    }else {
        contenedorProductos.innerHTML = ""
        filtro = [];
        console.log(filtro)
        cargaDom();}

})
    
    




const agregarAlCarrito = (productoId) => {
    const existe = carrito.some(producto => producto.id === productoId)
        if(existe){
            const producto = carrito.map(producto => {
                (producto.id === productoId)?   // optimizo el if con operador ternario
                    producto.cantidad++ 
                : "";
            })
        } else {
    const item  = productos.find( producto => producto.id === productoId )
    carrito.push(item)
    
    item.cantidad = 1;}
    Swal.fire({             // Utilizo Sweet alert para avisar que el producto se agregó al carrito
        position: 'top-end',
        icon: 'success',
        title: 'Producto agregado con éxito',
        showConfirmButton: false,
        timer: 1500
      })
    actualizarCarrito();
}

    const actualizarCarrito = () => {
        contenedorCarrito.innerHTML = "";
        carrito.forEach((producto) => {
        let div = document.createElement("div");
        div.classList.add("productoEnCarrito");
            let totalProducto = producto.precio*producto.cantidad;
        div.innerHTML = `<p>${producto.nombre}</p>
                        <p>Precio: ${totalProducto}</p> 
                        <p id="cantidad${producto.id}">Cantidad: ${producto.cantidad}</p>
                        <button onclick="eliminarDelCarrito(${producto.id})" class="boton-eliminar" ><i class="fa-solid fa-trash-can"></i></button>`;
        contenedorCarrito.appendChild(div);

        localStorage.setItem('carrito', JSON.stringify(carrito))
    })
    contadorCarrito.innerText = carrito.length;
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + (prod.precio*prod.cantidad), 0);
    
    if(carrito.length == 0) {
        contadorCarrito.innerText = 0;
        precioTotal.innerText = 0;
        localStorage.clear();
    }    
}

const eliminarDelCarrito = (productoId) => {
    const indice = carrito.findIndex( (producto) => producto.id == productoId );
    carrito.splice(indice, 1);
    actualizarCarrito()
}