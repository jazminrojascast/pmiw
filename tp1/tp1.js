// JAZMIN ROJAS, COM3,TP1 SEPTIEMBRE 2026
let volando = [];
let quieto = [];
let indicesprite = 0;
let velocidad = 8;
let fondo; 
let estado = 0;
let x = 225;
let y = 150;
let botoninicio;
let velocidadfondo = 2;
let posXfondo = 0;
let contador = 0;
let duracionquieto = 120;
let duracionvolando = 180;

function preload(){
for (let i = 0; i < 4; i++) {
quieto[i] = loadImage ("data/00" + i + ".png");
}
for (let i = 0; i < 8; i++) {
volando[i] = loadImage("data/0" + i + ".png");
 }
 fondo = loadImage("data/fondo.png");
 botoninicio = loadImage ("data/nube.png");
}
function setup() {
createCanvas (800,600);
}

function draw() {
background (100);
if (estado == 0) {
  pantalladeinicio();
} else if (estado == 1) {
  pajaritoquieto(velocidad);
} else if (estado == 2) {
  pajaritovolando(velocidad);
}
contador++; 
if (estado== 1 && contador >= duracionquieto){
  estado = 2;
  contador = 0;
  indicesprite = 0;
} else if (estado == 2 && contador >= duracionvolando){
estado = 1;
contador = 0;
indicesprite= 0;
}
}
