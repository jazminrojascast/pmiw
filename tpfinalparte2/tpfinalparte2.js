let ImgTaylor;
let ImgNota;
let ImgMute;
let fondo;
let taylor;
let nota;
let obstaculo;
let izquierda = false;
let derecha = false;

function preload() {
  ImgTaylor = loadImage("data/TaylorSwift.png");
  ImgNota = loadImage ("data/NotaMusical.png");
  ImgMute = loadImage("data/Obstaculomute.png");
}
function setup() {
  createCanvas(800, 400);
  taylor = new Taylor(400, 340);
  nota = new Nota(200, 50);
  obstaculo = new Obstaculo(600, 50);
}

function draw() {
  background (0);
  dibujarJuego();
  // image(fondo, 0, 0, width, height);
  //while ((posnota <= posobstaculo+10) || (posnota >= posobstaculo-10) ){
  //}
}
function keyPressed () {
  if (key == 'a') {
    izquierda = true;
  }
  if (key =='ñ') {
    derecha = true;
  }
}
function keyReleased() {

  if (key == 'a') {
    izquierda = false;
  }

  if (key == 'ñ') {
    derecha = false;
  }
}
