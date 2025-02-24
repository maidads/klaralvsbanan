import leaflet from 'leaflet';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import "./MapView.css";
import { useEffect, useRef, useState } from 'react';

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

const ChangeView = ({ position }) => {
    const map = useMap();
    useEffect(() => {
        map.setView(position, 13);
    }, [position, map]);
    return null
}

const MapViewReact = () => {
    const [position, setPosition] = useState([59.3793, 13.5036]);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (location) => {
                setPosition([location.coords.latitude, location.coords.longitude]);
            },
            (error) => {
              console.error('Error fetching location', error);
            }
        );
    }, []);

    return (
        <div style={{position: "relative", height: "400px", width: "100%"}}>
            <MapContainer center={position} zoom={13} style={{ height: '400px', width: '100%' }}>
            <ChangeView position={position} />
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
            />
            </MapContainer>
        </div>
    );
};

export default MapViewReact;