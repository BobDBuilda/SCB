import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

class Map{
    constructor(mountPoint, location = [13.094053451098295, -59.6021500037629], zoom = 17) {
        this.mountPoint = mountPoint;
        this.root = document.createElement('div');
        this.map = L.map(this.root).setView(location, zoom);
        this.markers = [];

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.map);
        L.marker(location).addTo(this.map)
            .bindPopup('Our Location')
            .openPopup();

        this.root.style.height = '400px'; // Set the height of the map
        this.mount(); 
        this.locationInquiry();
    }

    mount(){
        this.mountPoint.appendChild(this.root);
    }

    locationInquiry(){
        try{
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;
                L.marker([latitude, longitude]).addTo(this.map)
                    .bindPopup('You are here!')
            });
        } catch (error) {
            console.error('Error occurred while fetching location:', error);
        }
    }

    addMarker(location, popupText) {
        const marker = L.marker(location).addTo(this.map)
            .bindPopup(popupText);
        this.markers.push(marker);
    }

    removeMarker(){
        if(this.markers.length > 0){
            const marker = this.markers.pop();
            this.map.removeLayer(marker);
        }
    }
}

export { Map };