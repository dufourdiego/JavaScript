const modalContenedor = document.querySelector(".modal-container")
const abrirCarrito = document.getElementById("open")
const cerrarCarrito = document.getElementById("cerrar")
const vaciarCarrito = document.getElementById("vaciarCarrito")
const modalCarrito = document.querySelector(".modal-carrito")

abrirCarrito.addEventListener("click", ()=>{
    modalCarrito.classList.add("modal-active")
    setTimeout(function(){
    modalContenedor.style.opacity = "1";
    modalContenedor.style.visibility = "visible";},500)
} )

cerrarCarrito.addEventListener("click", ()=>{
    modalCarrito.classList.remove("modal-active")
    modalContenedor.style.opacity = "0";
    setTimeout(function(){
    modalContenedor.style.visibility = "hidden";},500)
})

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

modalContenedor.addEventListener("click", ()=>{
    cerrarCarrito.click()
})

modalCarrito.addEventListener("click", (e)=>{
    e.stopPropagation()
})