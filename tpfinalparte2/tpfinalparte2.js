//Jazmín Rojas 127580/3 y Maria Del Mar Rossi 124988/2
// Noviembre 2026
//COM: 3
// link al video:https://youtu.be/4pj8s-gq9MY
let juego;
let fuente;
let ImgTaylor;
let ImgTaylorCantando;
let ImgTaylorSinVoz;
let ImgNota;
let ImgMute;
let ImgFondoInicio;
let ImgBotonIniciar;
let ImgBotonCreditos;
let ImgBotonReiniciar;
let ImgBotonJugar;
let ImgGanaste;
let ImgPerdiste;
let ImgCreditos;
let ImgInstrucciones;
let fondo;
let cancion;
let sonidoGanaste;
let sonidoPerdiste;
let sonidoCreditos;
let izquierda = false;
let derecha = false;

function preload() {
  fondo = loadImage("data/fondo.jpg");
  fuente = loadFont ("data/unifont.otf");
  ImgFondoInicio = loadImage("data/fondoInicio.png");
  ImgBotonIniciar = loadImage("data/botonIniciar.png");
  ImgBotonCreditos = loadImage("data/botonCreditos.png");
  ImgBotonReiniciar = loadImage("data/botonReiniciar.png");
  ImgBotonJugar = loadImage("data/botonJugar.png");
  ImgGanaste = loadImage("data/ganaste.png");
  ImgPerdiste = loadImage("data/perdiste.png");
  ImgCreditos = loadImage("data/creditos.png");
  ImgInstrucciones = loadImage("data/instrucciones.png");
  ImgTaylor = loadImage("data/TaylorSwift.png");
  ImgTaylorCantando = loadImage("data/TaylorCantando.png");
  ImgTaylorSinVoz = loadImage("data/TaylorSinVoz.png");
  ImgNota = loadImage("data/NotaMusical.png");
  ImgMute = loadImage("data/ObstaculoMute.png");
  sonidoGanaste = loadSound ("data/ganaste.mp3");
  sonidoPerdiste = loadSound ("data/perdiste.mp3");
  sonidoCreditos = loadSound("data/creditos.mp3");
  cancion = loadSound("data/cancion.mp3");
}

function setup() {
  createCanvas(800, 400);
  juego = new Juego();
}

function draw() {
  juego.dibujar();
}

function mousePressed() {
  juego.click();
}

function keyPressed() {
  if (key == 'a' || key == 'A') {
    izquierda = true;
  }
  if (key == 'k' || key == 'K') {
    derecha = true;
  }
}

function keyReleased() {
  if (key == 'a' || key == 'A') {
    izquierda = false;
  }
  if (key == 'k' || key == 'K') {
    derecha = false;
  }
}
