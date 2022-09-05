// Declaración de variables

let total=0, precioProducto=0;
let miCompra = [], totalAPagar, posicion = 0, compra="Productos elegidos:\n";
let precio, monto, resultado, opcionDePago, opcionValida=0;

// Defino el objeto con los productos en stock

const productos = [{producto: "Mother", precio: 10000}, 
    {producto: "Memoria", precio: 5000},
    {producto: "Procesador", precio: 20000},
    {producto: "Gabinete", precio: 15000},
    {producto: "Disco", precio: 8000} ];

// Función para calcular descuento o interes

const calcular = (precio,opcion) => {
    resultado = precio*opcion;
}

// Función para calcular las cuotas a pagar

const calculoDeCuota = (cantidadDeCuotas) => {
    cuota = resultado/cantidadDeCuotas;
}

    // Función para guardar el listado de productos seleccionados

    const agregarAlCarrito = (item) => {
        miCompra.push(item);
        console.log(miCompra);
        return(miCompra);
    }

    // Funcion para mostrar todos los productos del carrito de compras

    const mostrarCompra = () => {
        for(let n=0; n<miCompra.length;n++){
        compra = compra + `${miCompra[n].producto}, Precio: $${miCompra[n].precio}\n`;}
        console.log(miCompra);
        alert(compra);
        alert(`El total de su compra es $${total}`);
    }

    const sumarPrecios = (item) => {
        precioProducto = parseInt(item.precio);
        total += precioProducto;
        return(total);
    }

    // El usuario ingresa el producto a comprar

function ingresarProducto(){
    let encontrado=0;
    let seleccion = prompt("Ingrese el producto a comprar");
    seleccion = seleccion.toLowerCase();
    

    // Recorro el Array buscando si existe el producto elegido dentro del objeto

    for(const item of productos){

        if(seleccion===(item.producto).toLowerCase()){  // Producto encontrado
            let mensaje = `Producto elegido: ${item.producto}, Precio: $${item.precio}`;
            alert(mensaje); // Muestra el producto elegido y su precio
            encontrado = 1; // Asigna un 1 a la variable encontrado
            agregarAlCarrito(item);
            sumarPrecios(item);
            return(item);
             // Deja de recorrer el Array porque ya encontró lo que buscaba
            }
        }
        if(encontrado === 0)  // Si no encontró el producto avisa por alert 
            alert("Producto no encontrado");
        
}

    ingresarProducto();

   let seguirComprando = prompt(`Desea seguir comprando? Si - No`);

   while (seguirComprando.toLowerCase()==="si"){
       ingresarProducto();
       seguirComprando = prompt(`Desea seguir comprando? Si - No`);
   }
   
   console.log(miCompra);
    
    mostrarCompra();

    // El usuario elige la forma de pago y financiación

    opcionDePago = parseInt(prompt(`Ingresa tu opción de pago - Formas de Pago:
1- Efectivo (10% de descuento)
2- Tarjetas de Débito o Tarjetas de Crédito en 1 pago
3- Ahora3 - 3 cuotas con interés del 10% 
4- Ahora6 - 6 cuotas con interés del 20% 
5- Ahora12 - 12 cuotas con interés del 30%` 
));

while(opcionValida===0) {
    switch(opcionDePago){
        case 1: {
            calcular(total,0.9);
            alert(`En efectivo el total a pagar es de ${resultado} pesos`);
            opcionValida=1;
            break;
        }
        case 2: {
            calcular(total,1);
            alert(`Con débito o crédito el total a pagar es de ${resultado} pesos en 1 pago`);
            opcionValida=1;
            break;
        }
        case 3: {
            calcular(total,1.1);
            calculoDeCuota(3);
            alert(`Plan de 3 cuotas: 
            El total a pagar es de ${resultado} pesos.
            3 cuotas fijas de ${cuota} pesos`);
            opcionValida=1;
            break;
        }
        case 4: {
            calcular(total,1.2);
            calculoDeCuota(6);
            alert(`Plan de 6 cuotas: 
            El total a pagar es de ${resultado} pesos.
            6 cuotas fijas de ${cuota} pesos.`);
            opcionValida=1;
            break;
        }
        case 5: {
            calcular(total,1.3);
            calculoDeCuota(12);
            alert(`Plan de 12 cuotas: 
            El total a pagar es de ${resultado} pesos.
            12 cuotas fijas de ${cuota} pesos.`);
            opcionValida=1;
            break;
        }
        default: {
            alert("Opción inválida");
        }
    opcionDePago = parseInt(prompt(`Ingresa tu opción de pago - Formas de Pago:
    1- Efectivo (10% de descuento)
    2- Tarjetas de Débito o Tarjetas de Crédito en 1 pago
    3- Ahora3 - 3 cuotas con interés del 10% 
    4- Ahora6 - 6 cuotas con interés del 20% 
    5- Ahora12 - 12 cuotas con interés del 30%`));
    }
}
    