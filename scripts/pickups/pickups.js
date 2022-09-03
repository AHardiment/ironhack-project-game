class Pickup {
  constructor({ game, position, image, frames = { max: 1 }, sprites }) {
    this.game = game;
    this.position = position;
    this.image = image;
    this.frames = { ...frames, val: 0, elapsed: 0 };
    this.image.onload = () => {
      this.width = this.image.width / this.frames.max;
      this.height = this.image.height;
    };
    this.moving = false;
    this.sprites = sprites;
  }

  draw() {
    this.game.context.save();
    this.game.context.fillStyle = "rgba(255, 0, 0, 255)";
    this.game.context.fillRect(
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
    this.game.context.restore();
    /*  this.game.context.drawImage(
      this.image,
      this.frames.val * this.width,
      0,
      this.image.width / this.frames.max,
      this.image.height,
      this.position.x,
      this.position.y,
      this.image.width / this.frames.max,
      this.image.height
    ); */
  }
}