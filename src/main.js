import 'phaser';

class BootGame extends Phaser.Scene {
    constructor() {
        super("BootGame");
    }
    preload() {
        this.load.image('logo', 'assets/logo.png');
    }
    create() {
        this.image = this.add.image(400, 300, 'logo');
    }
    update() {
        this.image.rotation += 0.01;        
    }    
}

new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        parent: "app",
        width: 800,
        height: 600
    },  
    scene: [BootGame]
});