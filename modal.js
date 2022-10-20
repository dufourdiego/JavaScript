const modalContenedor = document.querySelector(".modal-container")
const abrirCarrito = document.querySelector("#open")
const cerrarCarrito = document.getElementById("cerrar")
const vaciarCarrito = document.getElementById("vaciarCarrito")
const modalCarrito = document.querySelector(".modal-carrito")
const comprarCarrito = document.getElementById("comprarCarrito")

// Escucho los eventos de click para abrir, cerrar, vaciar y comprar los productos del carrito

abrirCarrito.addEventListener("click", ()=>{
    modalCarrito.classList.add("modal-active")
    modalContenedor.style.opacity = "1";
    modalContenedor.style.visibility = "visible";
} )

cerrarCarrito.addEventListener("click", ()=>{
    modalCarrito.classList.remove("modal-active")
    modalContenedor.style.opacity = "0";
    modalContenedor.style.visibility = "hidden";}
)

vaciarCarrito.addEventListener("click", ()=>{     // Agrego Sweet alert para que el usuario confirme si desea vaciar el carrito
    Swal.fire({
        title: 'Seguro que desea vaciar el carrito?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, vaciarlo!',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Hecho!',
            'Tu carrito está vacío',
            'success'
          )
          carrito.length = 0;
          precioTotal.innerText = 0;
          actualizarCarrito ();
          localStorage.clear();
        }
      })
    
})

comprarCarrito.addEventListener("click", ()=>{     // Agrego Sweet alert para que el usuario confirme si desea vaciar el carrito
  if(carrito.length){
  Swal.fire({
      title: 'Finalizar la compra?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Felicidades!',
          'Tu compra se realizó con éxito',
          'success'
        )
        carrito.length = 0;
        precioTotal.innerText = 0;
        actualizarCarrito ();
        localStorage.clear();
        contenedorProductos.innerHTML = ""
        selectorProductos.innerHTML = `<option>Todos los productos</option>`    
        cargaDom();
      }
    })
  }else {
    Swal.fire({
      icon: 'error',
      title: 'Tu carrito está vacío',
      text: 'Compra cancelada'
    })
  }
    })
  


modalContenedor.addEventListener("click", ()=>{
    cerrarCarrito.click()
})

modalCarrito.addEventListener("click", (e)=>{
    e.stopPropagation()
})