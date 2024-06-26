const form = document.querySelector('#form');

function recebeEventoForm(e){
    e.preventDefault(); 

    const inputPeso = form.querySelector('#peso')
    const inputAltura = form.querySelector('#altura')
    const peso = parseFloat(inputPeso.value)
    const altura = parseFloat(inputAltura.value)
    const imc = getIMC(peso, altura)

    const resultadoDiv = document.querySelector('#resultado');
    resultadoDiv.innerHTML = '';


    if (!peso){
        resultado.innerHTML = "peso inválido";
        return;
    }
    if (!altura){
        resultado.innerHTML = "Altura inválida";
        return;
    }


    if (imc < 18.5){
        resultado.innerHTML += `Seu IMC é de ${imc}. Você está abaixo do peso ideal!`

    }
    else if (imc >= 18.5 && imc <= 24.9){

        resultado.innerHTML += `Seu IMC é de ${imc}. Você está no peso ideal!`
    }
    else if (imc >= 25 && imc <= 29.9){

        resultado.innerHTML += `Seu IMC é de ${imc}. Você está com sobrepeso!`
    }
    else if (imc >= 30 && imc <= 34.9){

        resultado.innerHTML += `Seu IMC é de ${imc}. Você está com Obesidade Grau I`
    }
    else if (imc >= 35 && imc <= 39.9){
    
        resultado.innerHTML += `Seu IMC é de ${imc}. Você está com Obesidade Grau II`
    }
    else{
    
        resultado.innerHTML += `Seu IMC é de ${imc}. Você está com Obesidade Grau III`
    }


}
function getIMC(peso, altura){
    const imc = peso / altura ** 2;
    return imc.toFixed(2);    
}


form.addEventListener('submit', recebeEventoForm)
