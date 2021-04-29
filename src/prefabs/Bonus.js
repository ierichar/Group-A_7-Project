class Bonus extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(x, y, texture, frame);

        // add object to existing scene
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.moveSpeed = gameSpeed;
        this.inInventory = false;
    }

    update() {
        // move bonus left
        this.x -= this.moveSpeed;
        // wrap around from left to right edge
        if (this.x <= 0 - this.width - borderUISize) {
            this.reset();
        }
        if (this.inInventory) {
            // include animation
            this.reset();
        }
    }

    reset() {
        this.x = game.config.width;
    }
}