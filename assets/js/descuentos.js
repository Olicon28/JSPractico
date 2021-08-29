
function calcularPrecioConDescuento(precioReal, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precioReal * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;

}


function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById('inputPrice').value;
    const inputDiscount = document.getElementById('inputDiscount').value;

    const precioConDescuento = calcularPrecioConDescuento(inputPrice, inputDiscount);

    document.getElementById("resultPrice").innerText = `El precio con descuento es: $ ${precioConDescuento}`;

}


function validarCupon(codigo){
    const cupones = [ "Soy_es_Batman", "pero_no_le_digas_a_nadie", "es_un_secreto",]
    
    if(cupones.includes(codigo)){
        return true;
    };
        return false;

}


function consultarCupon(){
    const cupon = document.getElementById('inputCupon').value;
    const resultado = document.querySelector("#validateCupon");

    if(validarCupon(cupon)){
        switch(cupon){
            case "Soy_es_Batman" :
                
                document.getElementById('inputDiscount').value = '5';
                if(resultado.classList.contains("error") ){
                    resultado.classList.remove("error");
                    resultado.classList.add("success");
                }else{                    
                    resultado.classList.add("success");
                }
                
                resultado.innerHTML = `<p>Se ha hecho un descuento de 5%</p>`
                break;
            case "pero_no_le_digas_a_nadie" :

                document.getElementById('inputDiscount').value = '20';

                if(resultado.classList.contains("error") ){
                    resultado.classList.remove("error");
                    resultado.classList.add("success");
                }else{                    
                    resultado.classList.add("success");
                }

                resultado.innerHTML = `<p>Se ha hecho un descuento de 20%</p>`;                
                break;
            case "es_un_secreto":
                document.getElementById('inputDiscount').value = '90';
                
                if(resultado.classList.contains("error") ){
                    resultado.classList.remove("error");
                    resultado.classList.add("success");
                }else{                    
                    resultado.classList.add("success");
                }
                resultado.innerHTML = `<p>Se ha hecho un descuento de 90%</p>`;
                break;
        }

    }else{
        resultado.style.display = "block";
        
        resultado.innerHTML = `<p>Código de cupón incorrecto</p>`;

        if(!resultado.classList.contains("error")){
            resultado.classList.add("error");

            if(resultado.classList.contains("success")){
                resultado.classList.remove("success");
            }
        }
        document.getElementById('inputDiscount').value = '0';

    }
}