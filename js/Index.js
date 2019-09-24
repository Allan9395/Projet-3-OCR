/*l'Objet Index: Le mouvement des differentes partie pour la reservation (details de la station, renseignement de la personne,
canvas, recapitulatif de la comande)
*/

class Index {
  constructor() {
    this.dataStations = document.querySelector('#dataStations')
    this.btnReserver = document.querySelector('#btn-Reserver')
    this.formReservation = document.querySelector('.formReservation')
    this.btnReservation = document.querySelector('.btnReservation')
    this.formCanvas = document.querySelector('.formCanvas')
    this.btnValider = document.querySelector('.btnValider')
    this.btnReset = document.querySelector('.btnReset')
    this.btnStop = document.querySelector('#btnAnnuler')
    this.bonReservation = document.querySelector('#bookingData')
    this.nom = document.querySelector('#lastName')
    this.prenom = document.querySelector('#firstName')
    this.email = document.querySelector('#email')
    this.validInput = document.querySelector('#validInput')
    this.dataClientLastName = document.querySelector('#dataClientLastName')
    this.dataClientFirstName = document.querySelector('#dataClientFirstName')
    this.nameStationDataReservation = document.querySelector('#nameStationDataReservation')
    this.addressSattionDataReservation = document.querySelector('#addressSattionDataReservation')
    this.dataCanvasDom = document.querySelector('#dataCanvasDom')
    this.tempsTimer = sessionStorage.getItem('tempsTimer')
    this.timer = Timer
    this.loadingPage()
    this.reservationProgress()
    this.clickBtnReserver()
    this.clickBtnReservation()
    this.clickBtnValider()
  }

  loadingPage() {
    const imageSlider = document.querySelector('.imgSlider')
    const diapo1 = new Diaporama(imageSlider)
    const map = new Map()
    const signature = new Canvas()
  }

  reservationProgress() {
    if (sessionStorage.getItem('tempsTimer') > 0) {
      this.bonReservation.style.display = 'block'
      this.dataClientLastName.innerHTML = localStorage.getItem('nom')
      this.dataClientFirstName.innerHTML = localStorage.getItem('prenom')
      this.nameStationDataReservation.innerHTML = sessionStorage.getItem('Nom de la Station')
      this.addressSattionDataReservation.innerHTML = sessionStorage.getItem('Adresse de la Station')
      this.dataCanvasDom.src = sessionStorage.getItem('dataCanvas')
      this.timer = new Timer(this.tempsTimer, document.querySelector('#time'))
    } else {
      this.bonReservation.style.display = 'none'

    }
  }

  clickBtnReserver() {
    this.btnReserver.addEventListener('click', (e) => {
      this.nom.value = localStorage.getItem('nom')
      this.prenom.value = localStorage.getItem('prenom')
      if (this.formReservation.style.display = 'none') {
        this.formReservation.style.display = 'flex'
        this.dataStations.style.display = 'none'

      }
    })
  }

  clickBtnReservation() {
    this.btnReservation.addEventListener('click', (e) => {

      if (this.nom.checkValidity() == true, this.prenom.checkValidity() == true) {
        this.formCanvas.style.display = 'block'
        this.formReservation.style.display = 'none'
        this.dataStations.style.display = 'none'
        e.preventDefault()
      }

      let lastName = document.querySelector('#lastName').value
      let lastNameStrContenu = localStorage.setItem('nom', lastName)
      let firstName = document.querySelector('#firstName').value
      let firstNameStrContenu = localStorage.setItem('prenom', firstName)
    })
  }

  clickBtnValider() {
    this.btnValider.addEventListener('click', (e) => {
      this.timer = new Timer(1200, document.querySelector('#time'))
      e.preventDefault()
      if (this.countStorage <= 10) {
        this.bonReservation.style.display = 'block'
        this.formCanvas.style.display = 'none'
       
      }
        this.dataClientLastName.innerHTML = localStorage.getItem('nom')
        this.dataClientFirstName.innerHTML = localStorage.getItem('prenom')
        this.nameStationDataReservation.innerHTML = sessionStorage.getItem('Nom de la Station')
        this.addressSattionDataReservation.innerHTML = sessionStorage.getItem('Adresse de la Station')
        this.dataCanvasDom.src = sessionStorage.getItem('dataCanvas')

        scrollBy(0, 550)
    })
  }
 
}
const index = new Index()