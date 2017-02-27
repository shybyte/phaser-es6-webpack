import * as Phaser from 'phaser'

export const centerGameObjects = (objects: Phaser.Sprite[]) => {
  objects.forEach((object) => {
    object.anchor.setTo(0.5)
  })
}
