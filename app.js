const productos= [];
let i=0;
const contenedorProductos = document.getElementById("producto-contenedor")
const selectorProductos = document.getElementById("buscador")

// Fetch para solicitar Productos al JSON y renderizar el DOM

let cargaDom = async () => {
    let respuesta = await fetch("stock.json");
    let respuestaData = await respuesta.json();
    renderProductos (respuestaData)
}

// Renderizo los productos de mi stock

const renderProductos = (item) => {
    item.forEach((producto) => {
        productos.push(producto)
        filtro = productos.map((producto) => producto.nombre); // En este array guardo el nombre de cada producto para usarlo en el select
        const div = document.createElement("div")
        div.classList.add("card")
        div.innerHTML += `<div class="card card-filter" style="width: 18rem;">
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

    // Cargo el nombre de los productos en el select para realizar el filtrado por producto

    const option = document.createElement("option")
        option.classList.add(`filtrado${i+1}`)
        option.innerText = filtro[i]
        i++;

        selectorProductos.appendChild(option)

    })
}

cargaDom();

