import { MapContainer, TileLayer, useMap, Marker, Popup, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import "./MapView.css";
import { useEffect, useState } from 'react';
import { filterOutPlaces, isWithinRange } from '../../utils/apis/turid';
import geoJson from "../../assets/geojson/banan.geojson?raw";
const trackPoints = JSON.parse(geoJson);

const ChangeView = ({ position }) => {
    const map = useMap();
    useEffect(() => {
        map.setView(position, 13);
    }, [position, map]);
    return null
}

const MapView = ({ turidData }) => {
    const [position, setPosition] = useState([59.3793, 13.5036]);
    const [mapPosition, setMapPosition] = useState([59.3793, 13.5036]);
    const [lastPosition, setLastPosition] = useState(null);

    useEffect(() => {
        const positionTracker = navigator.geolocation.watchPosition(
            location => {
                const currentPosition = [location.coords.latitude, location.coords.longitude];
                setPosition(currentPosition);
                if (!isWithinRange(lastPosition, currentPosition, 50)) {
                    setMapPosition(currentPosition);
                    setLastPosition(currentPosition);
                }
            }, error => {
                console.error("Error fetching user location", error);
            }, {
                enableHighAccuracy: true,
                timeout: 1000,
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
            <MapContainer center={mapPosition} zoom={13} style={{ height: '100%', width: '100%' }}>
            <ChangeView position={mapPosition} />
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
            />
            {trackPoints && <GeoJSON data={trackPoints}/>}
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

export default MapView;