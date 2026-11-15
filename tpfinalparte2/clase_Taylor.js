 class Taylor {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.tam = 200;
    this.alto = 200;
    this.velocidad = 8;
    this.estado = "normal";
    this.contador = 0;
  }

  mover() {
    if (izquierda) {
      this.x -= this.velocidad;
    }
    if (derecha) {
      this.x += this.velocidad;
    }
    if (this.x < this.tam / 2) {
      this.x = this.tam / 2;
    }
    if (this.x > width - this.tam / 2) {
      this.x = width - this.tam / 2;
    }

    if (this.contador > 0) {
      this.contador -= 1;
      if (this.contador == 0) {
        this.estado = "normal";
      }
    }
  }

  cantar() {
    this.estado = "cantando";
    this.contador = 60;
  }

  SinVoz() {
    this.estado = "SinVoz";
    this.contador = 60;
  }

  dibujar() {
    imageMode(CENTER);
    if (this.estado == "cantando") {
      image(ImgTaylorCantando, this.x, this.y, this.tam, this.alto);
    } else if (this.estado == "SinVoz") {
      image(ImgTaylorSinVoz, this.x, this.y, this.tam, this.alto);
    } else {
      image(ImgTaylor, this.x, this.y, this.tam, this.alto);
    }
  }
}
