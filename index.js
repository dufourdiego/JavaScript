let precio, monto, resultado, opcionDePago, opcionValida=0;



const calcular = (precio,opcion) => {
    resultado = precio*opcion;
}

const calculoDeCuota = (cantidadDeCuotas) => {
    cuota = resultado/cantidadDeCuotas;
}

precio = parseInt(prompt("Ingresa el precio del producto"));

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
            calcular(precio,0.9);
            alert(`En efectivo el total a pagar es de ${resultado} pesos`);
            opcionValida=1;
            break;
        }
        case 2: {
            calcular(precio,1);
            alert(`Con débito o crédito el total a pagar es de ${resultado} pesos en 1 pago`);
            opcionValida=1;
            break;
        }
        case 3: {
            calcular(precio,1.1);
            calculoDeCuota(3);
            alert(`Plan de 3 cuotas: 
            El total a pagar es de ${resultado} pesos.
            3 cuotas fijas de ${cuota} pesos`);
            opcionValida=1;
            break;
        }
        case 4: {
            calcular(precio,1.2);
            calculoDeCuota(6);
            alert(`Plan de 6 cuotas: 
            El total a pagar es de ${resultado} pesos.
            6 cuotas fijas de ${cuota} pesos.`);
            opcionValida=1;
            break;
        }
        case 5: {
            calcular(precio,1.3);
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