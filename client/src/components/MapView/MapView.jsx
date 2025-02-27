import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import { filterOutPlaces } from '../../utils/apis/turid';
import "./MapView.css";
import ZoomControls from "./ZoomControls";

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

const MapViewReact = ({ turidData }) => {
    const [position, setPosition] = useState([59.3793, 13.5036]);

    useEffect(() => {
        const positionTracker = navigator.geolocation.watchPosition(
            location => {
                setPosition([location.coords.latitude, location.coords.longitude]);
            }, error => {
                console.error("Error fetching user location", error);
            }, {
                enableHighAccuracy: true,
                timeout: 30000,
                maximumAge: 0
            }
        );
        return () => navigator.geolocation.clearWatch(positionTracker);
    }, []);

    const [places, setPlaces] = useState(null);

    useEffect(() => {
        if (turidData) {
            setPlaces(filterOutPlaces(turidData));
        }
    }, [turidData]);

    return (
        <div className="map-container">
            <MapContainer 
                center={position} 
                zoom={13} 
                zoomControl={false}
                style={{ height: "100vh", width: "100vw" }}
            >
                <ChangeView position={position} />
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
                />
                <Marker position={position}>
                    <Popup>Din position</Popup>
                </Marker>
                <ZoomControls />
            </MapContainer>
        </div>
    );
};

export default MapViewReact;