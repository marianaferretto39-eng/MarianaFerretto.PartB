function setup() {
  createCanvas(800, 800);
  background(0);
  noStroke();
  //fundo preto e sem traçado
}

function draw() {
// Vermelho piscando
if (random(1) > 0.5) {
  fill(238, 36, 0);
} else {
  fill(237, 241, 237);
}

rect(0, 0, 362, 316);

//o fill é o preenchimento branco e com tab consigo manter tudo junto
fill(237,241,237);
  rect(373, 0, 427, 316);
  rect(0, 334, 362, 177);
  rect(373, 334, 427, 177);
  rect(86, 527, 276, 273);
  rect(373, 770, 235, 30);
  rect(620, 527, 180, 273);
  //as cordenadas são x,y,larg,alt

 // Degradê amarelo
  for (let y = 527; y < 800; y++) {
    let r = map(y, 527, 800, 255, 220);
    let g = map(y, 527, 800, 215, 180);
    //map é uma função que mapeia um valor de um intervalo para outro intervalo
    //let é uma variável local, que só existe dentro do bloco de código onde foi declarada
    //for é um laço de repetição que executa um bloco de código várias vezes

    fill(r, g, 0);
    rect(0, y, 75, 1);
  }

  // Degradê azul
  for (let y = 527; y < 757; y++) {
    let r = map(y, 527, 757, 40, 20);
    let g = map(y, 527, 757, 40, 20);
    let b = map(y, 527, 757, 135, 95);

    fill(r, g, b);
    rect(373, y, 235, 1);
  }

   // Sombra mais forte apenas na parte inferior
  for (let y = 400; y < height; y++) {
    let sombra = map(y, 400, height, 0, 60);
    fill(0, 0, 0, sombra);
    rect(0, y, width, 1);
  }
  //let é o que nos ajuda a nomear as variáveis, e map é o que nos ajuda a mapear os valores de um intervalo para outro

//textura com retangulos pretos com transparência
for (let i = 0; i < 100000; i++) {
  fill(0, 0, 0, 10);
  rect(random(width), random(height), 1, 1);
  //random é aleatório, ele vai sortear um valor entre 0 e o valor que eu colocar dentro do random, no caso width e height
  

} 
//noLoop();
//noLoop() faz com que o desenho seja feito apenas uma vez, sem repetir
}
