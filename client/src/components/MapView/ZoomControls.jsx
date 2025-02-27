import { useMap } from "react-leaflet";
import zoomButtonsImage from "../../assets/icons/zoomknappar.svg";
import "./ZoomControls.css";

const ZoomControls = () => {
    const map = useMap();

    const handleZoomIn = () => {
        map.zoomIn();
    };

    const handleZoomOut = () => {
        map.zoomOut();
    };

    return (
        <div className="zoom-container">
            <img src={zoomButtonsImage} alt="Zoom-knappar" className="zoom-img" />
            <button className="zoom-area zoom-in" onClick={handleZoomIn}></button>
            <button className="zoom-area zoom-out" onClick={handleZoomOut}></button>
        </div>
    );
};

export default ZoomControls;