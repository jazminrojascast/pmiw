class Mute {
  constructor() {
    this.x = random(50, width - 50);
    this.y = -250;
    this.vel = 3;
  }
// cuando el objeto choca con el personaje desaparece y se vuelve a crear
  reiniciar() {
    this.y = -50;
    this.x = random(50, width - 50);
  }
// cuando el objeto choca con el personaje desaparece
  chocaCon(taylor) {
    if (dist(this.x, this.y, taylor.x, taylor.y) < 60) {
      return true;
    } else {
      return false;
    }
  }

  caer() {
    this.y += this.vel;
    if (this.y > height + 50) {
      this.reiniciar();
    }
  }

  dibujar() {
    imageMode(CENTER);
    image(ImgMute, this.x, this.y, 50, 50);
  }
}
