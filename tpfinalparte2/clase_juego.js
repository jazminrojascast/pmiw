class Juego {
  constructor() {
    this.botonAncho = 200;
    this.botonAlto = 60;
    this.reiniciar();
  }

  // deja todo como al principio y vuelve al menú
  reiniciar() {
    sonidoGanaste.stop();
    sonidoPerdiste.stop();
    sonidoCreditos.stop();
    this.taylor = new Taylor(400, 320);
    this.nota = new Nota();
    this.mute = new Mute();
    this.vidas = 4;
    this.notasAtrapadas = 0;
    this.estado = "jugando";
    this.pantalla = "inicio";
  }

  dibujar() {
    imageMode(CORNER);
    if (this.pantalla == "inicio") {
      this.pantallaInicio();
    } else if (this.pantalla == "instrucciones") {
      this.pantallaInstrucciones();
    } else if (this.pantalla == "creditos") {
      this.pantallaCreditos();
    } else {
      if (this.estado == "gano") {
        this.pantallaGanaste();
      } else if (this.estado == "perdio") {
        this.pantallaPerdiste();
      } else {
        image(fondo, 0, 0, width, height);
        this.jugar();
      }
    }
  }

  // pantallas
  pantallaInicio() {
    image(ImgFondoInicio, 0, 0, width, height);
    this.dibujarBoton(ImgBotonIniciar, 270, 340);
    this.dibujarBoton(ImgBotonCreditos, 530, 340);
  }

  pantallaInstrucciones() {
    image(ImgInstrucciones, 0, 0, width, height);
    this.dibujarBoton(ImgBotonJugar, 400, 350);
  }

  pantallaCreditos() {
    image(ImgCreditos, 0, 0, width, height);
    this.dibujarBoton(ImgBotonReiniciar, 400, 350);
  }

  pantallaGanaste() {
    image(ImgGanaste, 0, 0, width, height);
    this.dibujarBoton(ImgBotonReiniciar, 400, 350);
  }

  pantallaPerdiste() {
    image(ImgPerdiste, 0, 0, width, height);
    this.dibujarBoton(ImgBotonReiniciar, 400, 350);
  }

  //Botones
  dibujarBoton(imagen, x, y) {
    imageMode(CENTER);
    image(imagen, x, y, this.botonAncho, this.botonAlto);
  }

  // true si el mouse está arriba del botón que está en x, y
  sobreBoton(x, y) {
    if (mouseX > x - this.botonAncho / 2 && mouseX < x + this.botonAncho / 2 && mouseY > y - this.botonAlto / 2 && mouseY < y + this.botonAlto / 2) {
      return true;
    } else {
      return false;
    }
  }

click() {
  if (this.pantalla == "inicio") {
    if (this.sobreBoton(270, 340)) {
      this.pantalla = "instrucciones";
      if (cancion.isPlaying() == false) {
        cancion.loop();
      }
    }
    if (this.sobreBoton(530, 340)) {
      this.pantalla = "creditos";
      sonidoCreditos.play();
    }
  } else if (this.pantalla == "instrucciones") {
    if (this.sobreBoton(400, 350)) {
      this.pantalla = "juego";
    }
  } else if (this.pantalla == "creditos") {
    if (this.sobreBoton(400, 350)) {
      this.reiniciar();
    }
  } else if (this.estado != "jugando") {
    if (this.sobreBoton(400, 350)) {
      this.reiniciar();
    }
  }
}
  jugar() {
    this.nota.caer();
    this.mute.caer();
    this.taylor.mover();

    // si agarra una nota el personaje canta
    if (this.nota.chocaCon(this.taylor)) {
      this.nota.reiniciar();
      this.taylor.cantar();
      this.notasAtrapadas += 1;
    }

    // si le cae un mute se queda sin voz y pierde una vida
    if (this.mute.chocaCon(this.taylor)) {
      this.mute.reiniciar();
      this.taylor.SinVoz();
      this.vidas -= 1;
    }

    // al ganar o perder se corta la música y suena el sonido del final
    if (this.notasAtrapadas == 4) {
      this.estado = "gano";
      cancion.stop();
      sonidoGanaste.play();
    }
    if (this.vidas == 0) {
      this.estado = "perdio";
      cancion.stop();
      sonidoPerdiste.play();
    }

    this.nota.dibujar();
    this.mute.dibujar();
    this.taylor.dibujar();
    this.dibujarContadores();
  }

  dibujarContadores() {
    textFont(fuente);
    textSize(32);

    // un corazón rojo por cada vida que queda
    fill(240, 0, 0);
    textAlign(LEFT, TOP);
    for (let i = 0; i < this.vidas; i++) {
      text("♥", 20 + i * 36, 12);
    }

    fill(255);
    stroke(255);
    strokeWeight(1);
    textAlign(RIGHT, TOP);
    text("Notas: " + this.notasAtrapadas + " / 4", width - 20, 12);

    noStroke();
  }
}
