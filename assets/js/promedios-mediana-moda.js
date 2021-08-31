function calcularPromedio(arr){
    const sumaArr = arr.reduce(function(valorAcumulado, valorElemento){
        return valorAcumulado + valorElemento;

    }, 0);

    return sumaArr / arr.length;
}


function calcularMediana(arr){
    debugger;

    if(isPair(arr.length)){
        const mediana = [arr[(arr.length / 2) - 1], arr[ arr.length / 2] ];

        return calcularPromedio(mediana);

    }else{

        return arr[ Math.ceil((arr.length / 2) - 1) ];

    }
}

function isPair(num){
    
    if(num % 2 === 0){
        return true
    }
    return false;
}