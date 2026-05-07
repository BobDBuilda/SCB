import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

class Map{
    constructor(location = [13.094053451098295, -59.6021500037629], zoom = 17) {
        //this.locationInquiry();
        this.location = location;
        this.zoom = zoom;
    }

    init(){
        this.handleClick = this.map.addEventListener('click', () => {
            console.log("map clciked");
            window.open("https://maps.google.com", "_blank", "noopener,noreferrer");
        })
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

    render(){
        this.root = document.createElement('div');
        this.map = L.map(this.root).setView(this.location, this.zoom);
        //this.markers = [];
        
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.map);
        L.marker(this.location).addTo(this.map)
            .bindPopup('Our Location')
            .openPopup();
        this.root.style.width = '75%';
        this.root.style.height = '600px'; // Set the height of the map

        return this.root;
    }
}

export { Map };