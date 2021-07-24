//Código del cuadrado
console.group("Cuadrados");

// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");


function perimetroCuadrado(lado){
    return lado * 4;
} 
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + " cm");


function areaCuadrado (lado){
    return lado * lado;
}
// console.log("El area del cuadrado es: " + areaCuadrado + " cm^2");

console.groupEnd(); 



//Código del triangulo
console.group("Triangulos")

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;
// console.log("Los lados del triángulo miden: " + ladoTriangulo1 + " cm, " + ladoTriangulo2 + " cm, " + baseTriangulo + " cm.");
// console.log("La altura del triángulo mide: " + alturaTriangulo + " cm." );



function perimetroTriangulo (lado1, lado2, base){
    return lado1 + lado2 +base;
}
// console.log("El perímetro del triángulo es: " + perimetroTriangulo + " cm");



function areaTriangulo (base, altura){
    return (base  * altura) / 2 ;
}
// console.log("El área del triangulo es: " + areaTriangulo + " cm^2.")

console.groupEnd();





//Código del circúlo
console.group("Círculos"); 

// const radioCirculo = 4;
// const diametroCirculo = radioCirculo * 2;
const PI = Math.PI

// console.log("El radio del círculo es: " + radioCirculo + " cm");
// console.log("El diametro del círculo es: " + diametroCirculo + " cm");
// console.log("PI es: " + PI);


function diametroCirculo (radio){
    return  radio * 2;
}

function perimetroCirculo (radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
// console.log("El perímetro del círculo es: " + perimetroCirculo + " cm");

function areaCirculo (radio){
    return (radio * radio) * PI;
}
// console.log("El area del círculo es: " + areaCirculo + " cm^2");

console.groupEnd(); 




//Aqui empezamos a interactuar con html

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value)
    alert(perimetro)
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value)
    alert(area)
}