// L'objet Map: La cration de la Map avec Leaflet; L'appel de l'API Jcdecaux en asynchrone; La création de markers

class Map {
	constructor() {
		this.map = L.map('mapid').setView([43.6044622, 1.4442469], 14)
		this.url = 'https://api.jcdecaux.com/vls/v1/stations?contract=toulouse&apiKey=59b13c3a163f23a9565bbe85ecf928ed623a0747'
		this.statutStation = document.querySelector('#statutStation')
		this.dataStations = document.querySelector('#dataStations')
		this.btnReserver = document.querySelector('#btn-Reserver')
		this.formReservation = document.querySelector('.formReservation')
		this.formCanvas = document.querySelector('.formCanvas')
		this.bonReservation = document.querySelector('#bookingData')
		this.divData = document.querySelector('#Data')
		this.LeafIcon = L.Icon.extend({
			options: {
				shadowUrl: 'assets/assetsMarkers/marker-shadow.png',
				iconSize: [25, 41],
				shadowSize: [41, 41],
				iconAnchor: [13, 41],
				shadowAnchor: [0, 41],
				popupAnchor: [0, -40]
			}
		})
		this.greenIcon = new this.LeafIcon({
			iconUrl: 'assets/assetsMarkers/marker-icon.png'
		})
		this.redIcon = new this.LeafIcon({
			iconUrl: 'assets/assetsMarkers/marker-icon2.png'
		})
		this.createMap()
		this.getStationData()
	}

	createMap() {

		//cration du calque image 
		L.tileLayer('https://maps.heigit.org/openmapsurfer/tiles/roads/webmercator/{z}/{x}/{y}.png', {
			maxZoom: 17
		}).addTo(this.map)
	}

	// recuperation des donnée de l'api
	getStationData() {
		const getStationDataJson = async () => {
			this.response = await fetch(this.url)
			this.stationTab = await this.response.json()

			this.stationTab.forEach(station => {
				this.nameStation = station.name
				this.positionStation = station.position
				this.adresseStation = station.address
				this.nbVeloSattion = station.bike_stands
				this.nbVeloDisponible = station.available_bikes

				if (this.nbVeloDisponible > 0) {
					this.marker = new L.marker(this.positionStation, {
						icon: this.greenIcon
					}).addTo(this.map)

					this.marker.addEventListener('click', () => {
						document.getElementById('nameStation').innerHTML = station.name
						document.getElementById('address').innerHTML = station.address
						document.getElementById('nbVeloStation').innerHTML = station.bike_stands
						document.getElementById('nbVeloDisponible').innerHTML = station.available_bikes
						this.statutStation.innerHTML = 'Ouvert'
						

						let nameStationStrContenu = sessionStorage.setItem('Nom de la Station', station.name)
						let addressStationStrContenu = sessionStorage.setItem('Adresse de la Station', station.address)

						if (this.formReservation.style.display = 'block', this.formCanvas.style.display = 'block', this.btnReserver.style.display = 'none') {
							this.btnReserver.style.display = 'block'
							this.dataStations.style.display = 'block'
							this.formReservation.style.display = 'none'
							this.formCanvas.style.display = 'none'
						}
					})
				} else {
					this.marker = new L.marker(this.positionStation, {
						icon: this.redIcon
					}).addTo(this.map)

					this.marker.addEventListener('click', () => {
						document.getElementById('nameStation').innerHTML = station.name
						document.getElementById('address').innerHTML = station.address
						document.getElementById('nbVeloStation').innerHTML = station.bike_stands
						document.getElementById('nbVeloDisponible').innerHTML = station.available_bikes
						statutStation.innerHTML = 'Fermé'

						if (this.formReservation.style.display = 'block', this.formCanvas.style.display = 'block', this.btnReserver.style.display = 'none') {
							this.btnReserver.style.display = 'none'
							this.dataStations.style.display = 'block'
							this.formReservation.style.display = 'none'
							this.formCanvas.style.display = 'none'
						}
					})
				}
			})
		}
		getStationDataJson()
	}
}