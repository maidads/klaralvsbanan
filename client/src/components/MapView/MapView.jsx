import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import "./MapView.css";
import { useEffect, useRef } from 'react';

function MapView() {

    const mapRef = useRef();

    useEffect(() => {
        if (!mapRef.current) {
            mapRef.current = leaflet.map('map').setView([59.37843, 13.50846], 13);

            leaflet
            .tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(mapRef.current);
        }

        return () => {
            if (mapRef.current) {
                mapRef.current.remove();
                mapRef.current = null;
            }
        };
    }, []);

    return (
        <div id="map" style={{ height: '100vh' }}></div>
    );
}

export default MapView;