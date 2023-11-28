document.addEventListener("DOMContentLoaded", function() {
    jogar();
    reinciarJogo();
});

function jogar() {

    let maximoTentativas = 5;
    let numeroDefinido = definirNumeroSecreto();
    
    setarMaximoTentativas(maximoTentativas);

    document.getElementById("btn_enviar").addEventListener("click", () => {

        let numeroDigitado = pegarNumeroDigitado();
        document.getElementById("numero_digitado").value = "";
        
        atingiuTotalTentativas = validarLimiteTentativas(maximoTentativas, recuperarTotalTentativas());

        calcularTotalTentativas(recuperarTotalTentativas());
        compararValores(numeroDefinido, numeroDigitado);

        if(atingiuTotalTentativas) {
            exibirMensagemFimJogo(exibirMensagemDerrota());
            die();
        }
        
    });
}

function setarMaximoTentativas(maximoTentativas) {
    document.getElementById("maximo_tentativas").innerHTML = maximoTentativas;
}

function definirNumeroSecreto() {
    let intervaloNumero = 100;
    return Math.floor(Math.random() * intervaloNumero);
}

function validarLimiteTentativas(maximoTentativas, totalQtdTentativas) {
    
    if(totalQtdTentativas < (maximoTentativas - 1)) {
        return false;
    }

    return true;

}

function recuperarTotalTentativas() {
    
    let spanQtdTentativas = document.getElementById("quantidade_tentativas");
    return parseInt(spanQtdTentativas.textContent);
}

function calcularTotalTentativas(totalQtdTentativas) {

    let spanQtdTentativas = document.getElementById("quantidade_tentativas");
    spanQtdTentativas.innerHTML = totalQtdTentativas + 1;

}

function pegarNumeroDigitado() {
    
    numeroDigitado = document.getElementById("numero_digitado").value;
    
    if(!validarNumeroDigitado(numeroDigitado)) {
        exibirDica(`Insira um número válido!`);
        die();
    }

    return numeroDigitado;
}

function validarNumeroDigitado(numeroDigitado) {
    return (numeroDigitado != "" ? true : false);
}

function compararValores(numeroDefinido, numeroDigitado) {


    if(numeroDefinido == numeroDigitado) {
        exibirMensagemFimJogo(exibirMensagemVitoria());
        die();
    }

    let textoDica = "";
    
    if(numeroDefinido < numeroDigitado) {
        textoDica = `O número definido é menor que ${numeroDigitado}`;
    }

    if(numeroDefinido > numeroDigitado) {
        textoDica = `O número definido é maior que ${numeroDigitado}`;
    }
    
    exibirDica(textoDica);

}

function exibirDica(textoDica) {

    spanDica = document.getElementById("dica");        
    spanDica.innerHTML = textoDica;

}

function exibirMensagemFimJogo(fraseFinal) {
    document.getElementById("dica").innerHTML = fraseFinal;
    finalizarJogo();
}

function exibirMensagemVitoria() {
    return `Parabéns, você ganhou!`
}

function exibirMensagemDerrota()
{
    return `Game Over!`;
}

function finalizarJogo() {
    document.getElementById("btn_enviar").setAttribute("disabled", true);
    document.getElementById("btn_reiniciar").removeAttribute("disabled");
    document.getElementById("numero_digitado").setAttribute("disabled", true);
}

function reinciarJogo() {
    document.getElementById("btn_reiniciar").addEventListener("click", function() {
        window.location.reload(true);
    })
}

function abrirGithub() {
    window.open('https://github.com/NevesSFelipe/Numero_Secreto');
}