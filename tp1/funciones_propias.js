//Botón para comenzar la animacion
function mousePressed () {
  if (estado== 0) {
    if (mouseX >= 225 && mouseX <= 225 + 350 && mouseY >= 200 && mouseY <= 200 + 212) {  
    estado = 1;
    }
  }
}
  function pantalladeinicio (){
  image (fondo, 0, 0, width, height);
  image (botoninicio, 225, 200, 350, 212);   
  }

function pajaritovolando(velocidad) {
  image(fondo, posXfondo, 0, width, height);
  image (fondo, posXfondo + width, 0, width, height);
  posXfondo -= velocidadfondo;
   if (posXfondo <= -width) {
      posXfondo = 0;
    }
  image (volando[indicesprite], x, y);
  if (frameCount % velocidad == 0) {
    indicesprite = avanzarSprite(indicesprite, volando.length);
  }
}
function pajaritoquieto (velocidad) {
  image(fondo, posXfondo, 0, width, height);
  image (fondo, posXfondo + width, 0, width, height);
  posXfondo -= velocidadfondo;
   if (posXfondo <= -width) {
      posXfondo = 0;
    }
  image (quieto[indicesprite], x, y);
  if (frameCount % velocidad == 0) {
    indicesprite =  avanzarSprite(indicesprite, quieto.length);
  }
}
function avanzarSprite(actual, total) {
  let nuevo = actual + 1;
  if (nuevo >= total) {
    nuevo = 0;
  }
  return nuevo;
}
//Apretar "R" o "r" para reiniciar la animación
function keyPressed() {
  if (key == 'r' || key == 'R') {
    estado = 0;
    indicesprite = 0;
    contador = 0;
    posXfondo = 0;
  }
}
