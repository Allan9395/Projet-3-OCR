// l'Objet Diaporama: Le mouvement d'une image à l'autre

class Diaporama {
    constructor(elementImgSlider) {
        this.elementImgSlider = elementImgSlider
        this.elementPrev = document.querySelector('#prev')
        this.elementNext = document.querySelector('#next')
        this.play = document.querySelector('.play')
        this.stop = document.querySelector('.stop')
        this.imagesTab = ['assets/01.jpeg', 'assets/02.jpeg', 'assets/03.jpeg', 'assets/04.jpeg', 'assets/05.jpeg']
        this.counter = 0
        this.interval = 0
        this.init()
    }
    next() {
        this.counter++
        if (this.counter >= this.imagesTab.length) {
            this.counter = 0
        }
        this.elementImgSlider.src = this.imagesTab[this.counter]
    }

    prev() {
        this.counter--
        if (this.counter < 0) {
            this.counter = this.imagesTab.length - 1
        }
        this.elementImgSlider.src = this.imagesTab[this.counter]
    }
    demarrer() {
        clearInterval(this.interval)
        this.interval = setInterval(() => {this.next()}, 5000)
      }

    arreter() {
        clearInterval(this.interval)
      }
    init() {
        this.elementNext.addEventListener('click', () => this.next())
        this.elementPrev.addEventListener('click', () => this.prev())
        document.addEventListener('keydown', event => {
            if (event.key === 'ArrowRight') this.next()
            if (event.key === 'ArrowLeft') this.prev()
        })
        this.play.addEventListener('click', () => this.demarrer())
        this.stop.addEventListener('click', () => this.arreter())
        this.interval = setInterval(() => {this.next()}, 5000)
    }
}