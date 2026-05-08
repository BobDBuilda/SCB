import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { TemplateEngine } from './TemplateEngine.js';
import '../Styles/Map.css';

class Map {
    constructor(location = [13.094053451098295, -59.6021500037629], zoom = 17) {
        this.location = location;
        this.zoom = zoom;
    }

    render() {
        this.root = TemplateEngine.create('<div class="map-container"></div>');
        
        // Use requestAnimationFrame to ensure the element is in the DOM 
        // before Leaflet tries to calculate its size.
        requestAnimationFrame(() => this.mount());
        
        return this.root;
    }

    mount() {
        if (this.map) return; // Prevent double initialization

        this.map = L.map(this.root).setView(this.location, this.zoom);
        
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(this.map);

        L.marker(this.location)
            .addTo(this.map)
            .bindPopup('Our Location')
            .openPopup();

        this.initEvents();
    }

    initEvents() {
        this.root.addEventListener('click', () => {
            console.log("Map clicked");
            window.open("https://maps.google.com", "_blank", "noopener,noreferrer");
        });
    }
}

export { Map };