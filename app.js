let listaDeNumeros = [];
let numerAleatorio = randonNumber();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
};
function start(){
    
    exibirTextoNaTela('h1' , 'Randon Number Gamer');
    exibirTextoNaTela('p' , 'Escolha um número entre 1 e 10!');
    document.getElementById('reiniciar').setAttribute('disabled' , true);
};

start();

function tentativa (){
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    exibirTextoNaTela( 'p' , `Foram: ${tentativas} ${palavraTentativa}.`);
};
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function verificarChute(){
    let chute = document.querySelector('input').value;
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    console.log('Clicou!');
    if(chute == numerAleatorio){
        exibirTextoNaTela('H1' , `Acertou! o número era ${numerAleatorio}`);
        exibirTextoNaTela('p' , `Foram um total de: ${tentativas} ${palavraTentativa}.`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        console.log(numerAleatorio);
        } else {
            if (chute > numerAleatorio) {
                exibirTextoNaTela('H1' , 'Errou!!');
                exibirTextoNaTela('p' ,`O número secreto é menor que ${chute}, Já foram: ${tentativas} ${palavraTentativa}.`);
             } else {
                exibirTextoNaTela('H1' , 'Errou!!');
                exibirTextoNaTela('p' ,`O número secreto é maior que ${chute}, Já foram: ${tentativas} ${palavraTentativa}.`);
                }
            };
        tentativas++;
        limparCampo()
        
};

function reiniciar(){
    limparCampo();
    tentativas = 1;
    numerAleatorio = randonNumber();
    if(listaDeNumeros.length == 10){
        listaDeNumeros = [];
        };
    start();
    
};

function randonNumber(){
    let numeroEscolhido = parseInt(Math.random() * 10 + 1);
    if(listaDeNumeros.includes(numeroEscolhido)){
        return randonNumber();
    } else {
        listaDeNumeros.push(numeroEscolhido);
        return numeroEscolhido;
    }
};

