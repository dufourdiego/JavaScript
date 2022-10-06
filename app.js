// Función que renderiza los productos de mi stock

const productos= []


    const contenedorProductos = document.getElementById("producto-contenedor")

// Fetch para solicitar Productos al JSON y renderizar el DOM

    let cargaDom = async () => {
        let respuesta = await fetch("./stock.json");
        let respuestaData = await respuesta.json();
        console.log(respuestaData)
        respuestaData.forEach((producto) => {
            productos.push(producto)
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
            console.log(`Mostrando ${producto.id}`)
        })

    })
}


cargaDom();