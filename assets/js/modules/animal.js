class Animal {
    constructor(name, age, img, comment, sound) {
        this.name = name;
        this.age = age;
        this.img = img;
        this.comment = comment;
        this.sound = sound;
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }

    getComment() {
        return this.comment;
    }
    
    getImg() {
       return this.img;
    }

    getSound() {
        return this.sound;
    }

    // crear tarjeta de animal 
    createCard() {
        const card = document.createElement('div');
        card.classList.add('card');

        const img = document.createElement('img');
        img.classList.add('card-img-top');
        img.src = this.getImg();

        const name = document.createElement('p');
        name.classList.add('card-title');
        name.textContent = this.getName();

        const sound = document.createElement('div');
        sound.classList.add('custom-audio');
        sound.addEventListener('click', () => {
            this.playSound();
        });

        const audioIcon = document.createElement('i');
        audioIcon.classList.add('fa-solid', 'fa-circle-play');

        sound.appendChild(audioIcon);

        card.setAttribute('data-age', this.getAge());
        card.setAttribute('data-comment', this.getComment());

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(sound);

        return card;
    }

    playSound() {
        const audio = new Audio(this.getSound());
        audio.play();
    }

}

export default Animal;