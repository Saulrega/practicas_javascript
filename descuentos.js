// const precioOriginal = 120;
// const descuento = 18;

const cuopons = ["SaulDC_es_Batman", "pero_no_le_digas_a_nadie", "es_un_secreto",];

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}


function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputCuopon = document.getElementById("inputCuopons");
    const cuoponValue = inputCuopon.value;

    let descuento ;

    if (!cuopons.includes(cuoponValue)){
        alert("El cupon " + cuoponValue + " no es valido");
    }
    else if (cuoponValue === "SaulDC_es_Batman"){
        descuento = 15;
    }
    else if (cuoponValue === "pero_no_le_digas_a_nadie"){
        descuento = 30;
    }
    else if (cuoponValue === "es_un_secreto"){
        descuento = 25;
    }
    else{
        descuento = 0;
    }
    // switch(cuoponValue){
    //     case "SaulDC_es_Batman":
    //         descuento = 15;
    //         break;
    //     case "pero_no_le_digas_a_nadie":
    //         descuento = 30;
    //         break;
    //     case "es_un_secreto":
    //         descuento = 25;
    //         break;
    //     default:
    //         descuento = 0;
    //         break;
    // }
    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
    
    const resultP = document.getElementById("resultPrice");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;

}


// console.log({precioOriginal, descuento, porcentajePrecioConDescuento, precioConDescuento});