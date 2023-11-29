let listaNumerosSorteados = [];
let quantidadeDisponível = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativa = 1;
console.log(numeroSecreto)
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.25});
}

function telaInicial() {
    exibirTextoNaTela("h1", 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

telaInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
    if (chute == numeroSecreto) {
    exibirTextoNaTela('h1', 'BOOOOOOOAAAAAAA');
    exibirTextoNaTela('p', `MUITO BEM!!! Vc acertou com ${tentativa} ${palavraTentativa}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
       exibirTextoNaTela('h1', 'tente de novo');
       if (chute > numeroSecreto) {
        exibirTextoNaTela('p', 'tente um número menor');
       } else exibirTextoNaTela('p', 'tente um número maior');
       tentativa++;
       limparCampo()
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * 10 + 1);
    let quantidadeDeElementosDaLista = listaNumerosSorteados.length;

    if (quantidadeDeElementosDaLista == quantidadeDisponível) {
        listaNumerosSorteados = [];
    }
    if (listaNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio()
    } else{
        listaNumerosSorteados.push(numeroEscolhido);
        console.log(listaNumerosSorteados)
        return numeroEscolhido;
    }
}                                                                                       

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativa = 1;
    telaInicial();
    console.log(numeroSecreto);
    document.getElementById('reiniciar').setAttribute('disabled', true)
}