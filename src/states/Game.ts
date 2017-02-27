declare global {const __DEV__: boolean}

import * as Phaser from 'phaser'
import Mushroom from '../sprites/Mushroom'

export default class extends Phaser.State {
  mushroom: Mushroom
  init () {}
  preload () {}

  create () {
    const bannerText = 'Phaser + TypeScript + Webpack'
    let banner = this.add.text(this.world.centerX, this.game.height - 80, bannerText, {})
    banner.font = 'Bangers'
    banner.padding.set(10, 16)
    banner.fontSize = 40
    banner.fill = '#77BFA3'
    banner.smoothed = false
    banner.anchor.setTo(0.5)

    this.mushroom = new Mushroom({
      game: (this as any) as Phaser.Game,
      x: this.world.centerX,
      y: this.world.centerY,
      asset: 'mushroom'
    })

    this.game.add.existing(this.mushroom)
  }

  render () {
    if (__DEV__) {
      this.game.debug.spriteInfo(this.mushroom, 32, 32)
    }
  }
}
