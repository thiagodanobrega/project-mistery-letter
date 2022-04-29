const cartaTexto = document.querySelector('#carta-texto');
const criarCarta = document.querySelector('#criar-carta');
const cartaGerada = document.querySelector('#carta-gerada');
const cartaContador = document.querySelector('#carta-contador');
const body = document.querySelector('body');

// Array com o nome das classes de cada grupo de estilo
let grupoEstilo = [`newspaper`, `magazine1`, `magazine2`];
let grupoTamanho = [`medium`, `big`, `reallybig`];
let grupoRotacao = [`rotateleft`, `rotateright`];
let grupoInclinacao = [`skewleft`, `skewright`];

// Cria classe aleatórias
function classeAleatoria (){
  let class1 = grupoEstilo[Math.floor(Math.random() * grupoEstilo.length)];
  let class2 = grupoTamanho[Math.floor(Math.random() * grupoTamanho.length)];
  let class3 = grupoRotacao[Math.floor(Math.random() * grupoRotacao.length)];
  let class4 = grupoInclinacao[Math.floor(Math.random() * grupoInclinacao.length)];
  return `${class1} ${class2} ${class3} ${class4}`
}

// Criar carta
criarCarta.addEventListener('click', gerarCarta)
function gerarCarta(){
  const cartaTextoValue = cartaTexto.value;
  let cont = 0;
  if(cartaTextoValue === '' || cartaTextoValue.trim() === ''){
    cartaGerada.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    cartaGerada.innerText = '';
    let arrString = cartaTextoValue.split(' ')
    for(str of arrString){
      cont += 1;
      const span = document.createElement('span');
      span.classList = classeAleatoria();
      span.innerText = str;
      cartaGerada.appendChild(span)
    }
    cartaContador.innerText = cont;
  }
}

// Mudar estilo de uma palavra específica ao clicar nela
cartaGerada.addEventListener('click', mudarEstilo)
function mudarEstilo(event){
  const span = event.target;
  span.classList = classeAleatoria();
}