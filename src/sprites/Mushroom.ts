import * as Phaser from 'phaser'

export default class extends Phaser.Sprite {

  constructor ({ game, x, y, asset }: {game: Phaser.Game, x: number, y: number, asset: string}) {
    super(game, x, y, asset)
    this.anchor.setTo(0.5)
  }

  update () {
    this.angle += 1
  }

}
