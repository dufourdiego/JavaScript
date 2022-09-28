const modalContendor = document.querySelector(".modal-container")
const abrirCarrito = document.getElementById("open")
const cerrarCarrito = document.getElementById("cerrar")
const vaciarCarrito = document.getElementById("vaciarCarrito")

const modalCarrito = document.querySelector(".modal-carrito")

abrirCarrito.addEventListener("click", ()=>{
    modalContendor.classList.toggle("modal-active")
} )

cerrarCarrito.addEventListener("click", ()=>{
    modalContendor.classList.remove("modal-active")
})

vaciarCarrito.addEventListener("click", ()=>{
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

modalContendor.addEventListener("click", ()=>{
    cerrarCarrito.click()
})

modalCarrito.addEventListener("click", (e)=>{
    e.stopPropagation()
})