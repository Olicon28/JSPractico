console.group("Cuadrado");

function perimetroCuadrado(lado){
    return lado * 4
}

function areaCuadrado(lado){
    return lado * lado;
}
console.groupEnd();


console.group("Triángulo");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
};

function areaTriangulo(base, altura){
    return (base * altura) / 2;

}

console.groupEnd();

console.group("Circulo"); 


function diametroCirculo(radio){
    return radio * 2;
}

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * Math.PI;
}

function areaCirculo(radio){
    return (radio * radio) * Math.PI;
}


console.groupEnd();




function calcularPerimetroCuadrado(){
    let radio = document.querySelector('#ladoCuadrado').value;
    let perimetro = perimetroCuadrado(radio);
    document.querySelector('#cuadrado_resultado p').textContent = `El perimetro del cuadrado es: ${perimetro}`;
    clearInputs();
}
function calcularAreaCuadrado(){
    let radio = document.querySelector('#ladoCuadrado').value;
    let area = areaCuadrado(radio);
    document.querySelector('#cuadrado_resultado p').textContent = `El área del cuadrado es: ${area}`;
    clearInputs();
}

function calcularPerimetroCirculo(){
    let radio = document.querySelector('#radioCirculo').value;
    let perimetro = perimetroCirculo(radio);
    document.querySelector('#circulo_resultado p').textContent = `El perimetro del círuculo es: ${perimetro}`;
    clearInputs();
}
function calcularDiametroCirculo(){
    let radio = document.querySelector('#radioCirculo').value;
    let diametro = diametroCirculo(radio);
    document.querySelector('#circulo_resultado p').textContent = `El diametro del círuculo es: ${diametro}`;
    clearInputs();
}
function calcularAreaCirculo(){
    let radio = document.querySelector('#radioCirculo').value;
    let area = areaCirculo(radio);
    document.querySelector('#circulo_resultado p').textContent = `El área del círuculo es: ${area}`;
    clearInputs();
}

function calcularPerimetroTriangulo(){
    let lado1 = document.querySelector('#triangulo_lado1').value;
    let lado2 = document.querySelector('#triangulo_lado2').value;
    let base = document.querySelector('#triangulo_base').value;
    let perimetro = areaCirculo(lado1, lado2, base);
    document.querySelector('#triangulo_resultado p').textContent = `El perímetro del triángulo es: ${perimetro}`;
    clearInputs();
}
function calcularAreaTriangulo(){
    let altura = prompt("Cual es la altura del triangulo?", 0);
    let lado1 = document.querySelector('#triangulo_lado1').value;
    let lado2 = document.querySelector('#triangulo_lado2').value;
    let base = document.querySelector('#triangulo_base').value;


    let area = areaTriangulo(base, altura);
    document.querySelector('#triangulo_resultado p').textContent = `El área del triángulo es: ${area}`;
    clearInputs();
}

function clearInputs(){
    let inputs = document.querySelectorAll("input[type='number']");
    for(input of inputs){
        input.value = '';
    }
}

