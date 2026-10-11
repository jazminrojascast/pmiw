// Nombres: Valentin Perez Mayoral 125659/1 y Jazmin Rojas Castaño 127580/3
// Comision: 3
// Docente: David Bedoian
// Tematica: Un dia en la vida de Taylor Swift
// Link del video: https://youtu.be/v2-SQ95Wf8w

//Variables
let imagenes = [];
let sonido;
let sonidoFracaso;
let sonidoExito;
let tipografia;
let pantalla = 0;
let posCreditos = 450;

// Textos de cada pantalla
let textos = [
  "Recorre un dia en la vida de Taylor Swift",
  "Taylor se despierta 8AM con su celular repleto de llamadas y correos de su productora. ¿Cómo inicia su día?",
  "Taylor desayuna apurada tras horas de responder a su equipo.",
  "Taylor desayuna tranquila para afrontar el día.",
  "Taylor comienza a sentir náuseas. ¿Qué hará?",
  "Taylor recibe la información de que su gata está mal durante su reunión previa al show. ¿Qué debe hacer?",
  "Se dirige hacia la clínica.",
  "Taylor realiza la prueba de sonido sintiendose muy mal.",
  "Taylor pierde la prueba de sonido previa al show por pasar la tarde en el veterinario.",
  "Taylor tiene un golpe de inspiración y escribe una canción que puede cantar a capella en el show. ¿Qué hacer?",
  "Taylor pasa toda su tarde en el hospital internada y pierde su show.",
  "Taylor tiene un mal show.",
  "Taylor comienza su prueba de sonido realizando ejercicios vocales.",
  "Taylor nota su voz un poco ronca. ¿Qué debe hacer?",
  "Taylor pierde la voz y no puede utilizarla por completo en el show.",
  "Taylor termina su prueba de sonido tranquila y su voz permanece intacta.",
  "Taylor tiene un gran show."
];

// Texto de la opcion A
let textosA = [
  "Comenzar",
  "A. Responder a todos los correos de su manager y llamadas de la productora.",
  "Continuar",
  "Continuar",
  "A. Notificar a su equipo de su malestar.",
  "A. Taylor se encarga de llevar a su gata al veterinario personalmente.",
  "Continuar",
  "Continuar",
  "Continuar",
  "A. Ignorar su instinto compositor y simplemente cantar el setlist.",
  "Volver al inicio",
  "Volver al inicio",
  "Continuar",
  "A. Forzar la voz y terminar la prueba.",
  "Continuar",
  "Continuar",
  "Volver al inicio"
];

// Texto de la opcion B
let textosB = [
  "",
  "B. Apagar el teléfono y priorizar unos minutos de calma.",
  "",
  "",
  "B. Ignorar el malestar sin avisarle a su equipo y asistir a la prueba de sonido.",
  "B. Taylor le pide a su equipo que se encargue de su mascota.",
  "",
  "",
  "",
  "B. Seguir su corazón y ensayar la canción en la prueba de sonido.",
  "",
  "",
  "",
  "B. Realizar ejercicios y luego retomar.",
  "",
  "",
  ""
];

// Pantalla siguiente de la opcion A
let siguienteA = [
  1, 2, 4, 5, 6, 8, 10, 11, 11,
  11, 0, 0, 13, 14, 11, 16, 0
];

// Pantalla siguiente de la opcion B
let siguienteB = [
  0, 3, 0, 0, 7, 9, 0, 0, 0,
  12, 0, 0, 0, 15, 0, 0, 0
];

function preload() {
  imagenes[0] = loadImage("data/00.JPG");

  for (let i = 1; i <= 9; i++) {
    imagenes[i] = loadImage("data/0" + i + ".jpg");
  }

  for (let i = 10; i <= 17; i++) {
    imagenes[i] = loadImage("data/" + i + ".jpg");
  }

  soundFormats("mp3");
  sonido = loadSound("data/musica.mp3");
  sonidoFracaso = loadSound("data/fracaso.mp3");
  sonidoExito = loadSound("data/exito.mp3");

  tipografia = loadFont("data/animeace2_ital.ttf");
}

function setup() {
  createCanvas(800, 450);
  textAlign(CENTER, CENTER);
  textFont(tipografia);
}

function draw() {
  image(imagenes[pantalla], 0, 0, 800, 450);

  if (pantalla == 17) {
    dibujarCreditos();
  } else {
    dibujarHistoria();
  }
}

function dibujarHistoria() {
  fill(105, 75, 145, 220);
  noStroke();
  rect(20, 15, 760, 100);

  fill(255);
  textFont(tipografia);
  textSize(16);
  text(textos[pantalla], 40, 25, 720, 80);

  if (pantalla == 0) {
    dibujarBoton(300, 340, 200, 45, textosA[pantalla]);
    dibujarBoton(650, 405, 120, 30, "Creditos");
  } else if (
    pantalla == 1 ||
    pantalla == 4 ||
    pantalla == 5 ||
    pantalla == 9 ||
    pantalla == 13
  ) {
    dibujarBoton(35, 330, 350, 85, textosA[pantalla]);
    dibujarBoton(415, 330, 350, 85, textosB[pantalla]);
  } else if (
    pantalla == 2 ||
    pantalla == 3 ||
    pantalla == 6 ||
    pantalla == 7 ||
    pantalla == 8 ||
    pantalla == 12 ||
    pantalla == 14 ||
    pantalla == 15
  ) {
    dibujarBoton(300, 360, 200, 45, textosA[pantalla]);
  } else {
    dibujarBoton(280, 360, 240, 45, textosA[pantalla]);
  }
}

function dibujarBoton(x, y, ancho, alto, textoBoton) {
  fill(234, 144, 230);
  noStroke();
  rect(x, y, ancho, alto);

  fill(255);
  textFont(tipografia);
  textSize(14);
  text(textoBoton, x + 8, y + 5, ancho - 16, alto - 10);
}

function dibujarCreditos() {
  fill(0, 0, 0, 190);
  noStroke();
  rect(0, 0, 800, 450);

  fill(234, 144, 230);
  textFont(tipografia);
  textSize(28);
  text("CRÉDITOS", 400, posCreditos);

  textSize(18);
  text(
    "Alumnxs: Valentin Perez Mayoral y Jazmin Rojas Castaño",
    400,
    posCreditos + 60
  );
  text("Obra inspirada en Taylor Swift <3", 400, posCreditos + 100);
  text("Imagenes generadas con IA", 400, posCreditos + 140);

  posCreditos = posCreditos - 1;

  if (posCreditos < 120) {
    posCreditos = 450;
  }

  dibujarBoton(300, 385, 200, 40, "Volver al inicio");
}

function mousePressed() {
  // Pantalla inicial
  if (pantalla == 0) {
    if (clicSobre(300, 340, 200, 45)) {
      pantalla = 1;
    } else if (clicSobre(650, 405, 120, 30)) {
      sonido.stop();
      sonidoFracaso.stop();
      sonidoExito.stop();

      sonido.play();
      pantalla = 17;
      posCreditos = 450;
    }
  }

  // Créditos
  else if (pantalla == 17) {
    if (clicSobre(300, 385, 200, 40)) {
      sonido.stop();
      sonidoFracaso.stop();
      sonidoExito.stop();

      pantalla = 0;
      posCreditos = 450;
    }
  }

  // Pantallas con dos opciones
  else if (
    pantalla == 1 ||
    pantalla == 4 ||
    pantalla == 5 ||
    pantalla == 9 ||
    pantalla == 13
  ) {
    if (clicSobre(35, 330, 350, 85)) {
      pantalla = siguienteA[pantalla];
      reproducirSiEsFinal();
    } else if (clicSobre(415, 330, 350, 85)) {
      pantalla = siguienteB[pantalla];
      sonidosFinales();
    }
  }

  // Pantallas con boton para continuar
  else if (
    pantalla == 2 ||
    pantalla == 3 ||
    pantalla == 6 ||
    pantalla == 7 ||
    pantalla == 8 ||
    pantalla == 12 ||
    pantalla == 14 ||
    pantalla == 15
  ) {
    if (clicSobre(300, 360, 200, 45)) {
      pantalla = siguienteA[pantalla];
      sonidosFinales();
    }
  }

  // Pantallas finales
  else if (pantalla == 10 || pantalla == 11 || pantalla == 16) {
    if (clicSobre(280, 360, 240, 45)) {
      sonido.stop();
      sonidoFracaso.stop();
      sonidoExito.stop();

      pantalla = 0;
    }
  }
}

function sonidosFinales() {
  if (pantalla == 10 || pantalla == 11) {
    sonido.stop();
    sonidoFracaso.stop();
    sonidoExito.stop();

    sonidoFracaso.play();
  } else if (pantalla == 16) {
    sonido.stop();
    sonidoFracaso.stop();
    sonidoExito.stop();

    sonidoExito.play();
  }
}

function clicSobre(x, y, ancho, alto) {
  if (
    mouseX > x &&
    mouseX < x + ancho &&
    mouseY > y &&
    mouseY < y + alto
  ) {
    return true;
  } else {
    return false;
  }
}
