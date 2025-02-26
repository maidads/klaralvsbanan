import leaflet from 'leaflet';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import "./MapView.css";
import { useEffect, useRef, useState } from 'react';
import { filterOutPlaces, isWithinRange } from '../../utils/apis/turid';

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
    const [lastPosition, setLastPosition] = useState(null);

    useEffect(() => {
        const positionTracker = navigator.geolocation.watchPosition(
            location => {
                const currentPosition = [location.coords.latitude, location.coords.longitude];
                if (!lastPosition || !isWithinRange(lastPosition, currentPosition, 50)) {
                    setPosition(currentPosition);
                    setLastPosition(currentPosition);
                }
            }, error => {
                console.error("Error fetching user location", error);
            }, {
                enableHighAccuracy: true,
                timeout: 10000,
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
        <div style={{position: "relative", height: "100vh", width: "100vw"}}>
            <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }}>
            <ChangeView position={position} />
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
            />
            {places && places.map(place => (
                place.latitude && place.longitude ? (
                    <Marker key={place.id} position={[place.latitude, place.longitude]}>
                        <Popup>{place.title}</Popup>
                    </Marker>
                ) : null
            ))}
            <Marker position={position}>
                <Popup>Du</Popup>
            </Marker>
            </MapContainer>
        </div>
    );
};

export default MapViewReact;