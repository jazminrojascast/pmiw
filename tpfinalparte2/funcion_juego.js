function dibujarJuego() {
    taylor.actualizar();
    nota.actualizar();
    obstaculo.actualizar();
}
    class Taylor {
      constructor(x_, y_) {
        this.x = x_;
        this.y = y_;
        this.tam = 140;
        this.velocidad = 10;
      }
      actualizar() {
        this.mover();
        this.dibujar();
      }

      mover() {

        if (izquierda == true) {
          this.x -= this.velocidad;
        }

        if (derecha == true) {
          this.x += this.velocidad;
        }

        if (this.x < this.tam / 2) {
          this.x = this.tam / 2;
        }

        if (this.x > width - this.tam / 2) {
          this.x = width - this.tam / 2;
        }
      }
      dibujar() {
        imageMode(CENTER);
        image(ImgTaylor, this.x, this.y, this.tam, this.tam);
      }
    }
    class Nota {

      constructor(x_, y_) {
        this.x = x_;
        this.y = y_;
        this.tam = 65;
        this.velocidad = 3;
      }

      mover() {

        this.y += this.velocidad;

        if (this.y - this.tam / 2 > height) {
          this.y = -this.tam / 2 - 50;
          this.x = random(40, width - 40);
        }
      }

      dibujar() {
        imageMode(CENTER);
        image(ImgNota, this.x, this.y, this.tam, this.tam);
      }

      actualizar() {
        this.mover();
        this.dibujar();
      }
    }

    class Obstaculo {

      constructor(x_, y_) {
        this.x = x_;
        this.y = y_;
        this.tam = 65;
        this.velocidad = 3;
      }
      actualizar() {
        this.mover();
        this.dibujar();
      }
      dibujar() {
        imageMode(CENTER);
        image(ImgMute, this.x, this.y, this.tam, this.tam);
      }
      mover() {

        this.y += this.velocidad;

        if (this.y - this.tam / 2 > height) {
          this.y = -this.tam / 2 - 50;
          this.x = random(40, width - 40);
        }
      }
    }
