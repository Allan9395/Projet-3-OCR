// Le Timer: creation d'un minuteur de 20 minutes

class Timer {
    constructor(tempsTimer, display) {
        this.display = display
        this.tempsTimer = tempsTimer
        this.btnValider = document.querySelector('.btnValider')
        this.timeElt = document.querySelector('#timeElt')
        this.textElt = document.querySelector('#textElt')
        this.bonReservation = document.querySelector('#bookingData')
        this.btnStop = document.querySelector('#btnAnnuler')
        this.textAnnulationElt = document.querySelector('#stopReservation')
        this.time = document.querySelector('#time')
        this.countStorage = sessionStorage.getItem('countStorage')
        this.startTimer()
    }

    startTimer() {

            const x = setInterval(() => {

                this.minutes = parseInt(this.tempsTimer / 60, 10)
                this.seconds = parseInt(this.tempsTimer % 60, 10)

                this.minutes = this.minutes < 10 ? "0" + this.minutes : this.minutes
                this.seconds = this.seconds < 10 ? "0" + this.seconds : this.seconds

                sessionStorage.setItem('secondes', this.seconds)
                sessionStorage.setItem('minutes', this.minutes)
                sessionStorage.setItem('tempsTimer', this.tempsTimer)

                this.display.textContent = ' ' + this.minutes + " : " + this.seconds;

                this.tempsTimer--

                if (this.tempsTimer < 0) {
                    this.textElt.style.display = 'none'
                    this.timeElt.style.display = 'block'
                    this.tempsTimer = 0
                }
            }, 1000)

            this.btnStop.addEventListener('click', () => {
                this.textElt.style.display = 'none'
                this.timeElt.style.display = 'none'
                this.time.style.display = 'none'
                this.textAnnulationElt.style.display = 'block'
                sessionStorage.setItem('tempsTimer', 0)
                clearInterval(x)

            })

            this.btnValider.addEventListener('click', (e) => {
                        clearInterval(x)
                        this.textElt.style.display = 'block'
                        this.time.style.display = 'block'
                        this.timeElt.style.display = 'none'
                        this.textAnnulationElt.style.display = 'none'
                        const time1 = new Timer(1200, this.time)
            })
    }
}