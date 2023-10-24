const { createApp } = Vue;

createApp({
    data() {
        return {
            currentIndex: 0,
            games : [
                {
                    image: 'img/01.webp',
                    title: "Marvel's Spiderman Miles Morales",
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                    length: 'Up to the player',
                },
                {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                    length: 'Up to the player',
                },
                {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
                    length: 'Up to the player',
                },
                {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                    length: 'Up to the player',
                },
                {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
                    length: 'Up to the player',
                },
            ]
        }
    },
    methods: {
        nextImage() {
            this.currentIndex++;
            if (this.currentIndex > this.games.length - 1) {
                this.currentIndex = 0;
            }
        },
        prevImage() {
            this.currentIndex--;
            if (this.currentIndex < 0) {
                this.currentIndex = this.games.length - 1;
            }
        },
        changeImage(thumbIndex) {
            this.currentIndex = thumbIndex;
        },
        stopCarousel() {
            clearInterval(this.intervalID)
	        this.intervalID = null 
        },
        restartCarousel() {
            if (!this.intervalID) {
                this.intervalID = setInterval(() => {
                    this.nextImage()
                  }, 3000)
            }
        }
    },
    mounted() {
        console.log("VUE WORKA");
// INTERVAL ID E' DICHIARATA IN MOUNTED
        this.intervalID = setInterval(() => {
            this.nextImage()
          }, 3000)
    }
}).mount('#app');

