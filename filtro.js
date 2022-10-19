// Filtro de búsqueda por producto



selectorProductos.addEventListener('change', () => {
    let productoElegido = selectorProductos.value;
    console.log(productoElegido)


            if(productoElegido != "Todos los productos") {
            let filtroProd = productos.find((producto) =>
            producto.nombre.toLowerCase() === (productoElegido).toLowerCase())
            console.log(filtroProd)
            contenedorProductos.innerHTML = "";
            
            const div = document.createElement("div")
        div.classList.add("card")
        div.innerHTML = `<div class="card card-filter" style="width: 18rem;">
                            <img src="${filtroProd.img}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${filtroProd.nombre}</h5>
                                <p class="card-text">${filtroProd.desc}</p>
                                <p class="card-text">Precio:$ ${filtroProd.precio}</p>
                                <button class="btn btn-primary" id=boton${filtroProd.id}>Comprar</button>
                            </div>
                        </div>`

    contenedorProductos.appendChild(div)
        
    const boton = document.getElementById( `boton${filtroProd.id}` )

    boton.addEventListener('click', ()=> {
        agregarAlCarrito(filtroProd.id)

    })

    }
    else {
            contenedorProductos.innerHTML = ""
            filtroProd = [];
            filtro = [];
            selectorProductos.innerHTML = `<option>Todos los productos</option>`    
            cargaDom();}
        })



    
    




