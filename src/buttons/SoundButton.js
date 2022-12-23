class SoundButton extends Button {
    constructor(x, y) {
        super(x, y);
        this.width = 60;
        this.height = 60;

        this.image = loadImage('./assets/images/Buttons/sound-off.png');

        this.muted = true;
    }

    display() {
        image(this.image, this.x, this.y, this.width, this.height);
    }

    isMuted() {
        return this.muted;
    }

    mute() {
        this.image = loadImage('./assets/images/Buttons/sound-off.png');
        this.muted = true;
    }

    unmute() {
        this.image = loadImage('./assets/images/Buttons/sound-on.png');
        this.muted = false;
    }
}