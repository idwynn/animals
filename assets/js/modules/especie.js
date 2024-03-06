import  Animal from "./animal.js";

// leon
class Leon extends Animal {
    constructor(name, age, img, comment, sound) {
        super(name, age, img, comment, sound);
    }

    rugir() {
        return this.getSound();
    }
}

// lobo
class Lobo extends Animal {
    constructor(name, age, img, comment, sound) {
        super(name, age, img, comment, sound);
    }

    aullar() {
        return this.getSound();
    }
}

// oso
class Oso extends Animal {
    constructor(name, age, img, comment, sound) {
        super(name, age, img, comment, sound);
    }

    gruñir() {
        return this.getSound();
    }
}

// serpiente
class Serpiente extends Animal {
    constructor(name, age, img, comment, sound) {
        super(name, age, img, comment, sound);
    }

    sisear() {
        return this.getSound();
    }
}

// aguila
class Aguila extends Animal {
    constructor(name, age, img, comment, sound) {
        super(name, age, img, comment, sound);
    }

    chillar() {
        return this.getSound();
    }
}

export { Leon, Lobo, Oso, Serpiente, Aguila };
