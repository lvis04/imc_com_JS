const form = document.querySelector('#form');

function recebeEventoForm(e){
    e.preventDefault(); 

    const peso = form.querySelector('#peso').value
    const altura = form.querySelector('#altura').value
    const imc = getIMC(peso, altura)

    const resultadoDiv = document.querySelector('#resultado');
    resultadoDiv.innerHTML = '';

    const verificarCampos = (peso, altura) => {
        return !peso ? (resultado.innerHTML = "peso inválido", true)
                     : !altura ? (resultado.innerHTML = "Altura iválida", true)
                     : false;
    }
    if (verificarCampos(peso, altura)) return;    

    const imcMensagem = imc => {

        if (imc < 18.5) return `IMC: ${imc}; Você está abaixo do peso ideal`
        if (imc >= 18.5 && imc <= 24.9) return `IMC: ${imc}; Você está no peso ideal`
        if (imc >= 25 && imc <= 29.9) return `IMC: ${imc}; Você está com sobrepeso`
        if (imc >= 30 && imc <= 34.9) return `IMC: ${imc}; Você está com Obesidade Grau I`
        if (imc >= 35 && imc <= 29.9) return `IMC: ${imc}; Você está com Obesidade Grau II`
        return `IMC: ${imc}; Você está com Obesidade Grau III`
    }

    resultado.innerHTML += imcMensagem(imc);
}

function getIMC(peso, altura){
    const imc = peso / altura ** 2;
    return imc.toFixed(2);    
}

form.addEventListener('submit', recebeEventoForm)
