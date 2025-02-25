import { useEffect, useState } from 'react';
import MapViewReact from "./components/MapView/MapView.jsx";
import { getAllTuridData } from './utils/apis/turid.js';
import './App.css';
import logo from './assets/svg/logo.svg';

function App() {
  const [turidData, setTuridData] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [activeOverlay, setActiveOverlay] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const data = await getAllTuridData();
      setTuridData(data);
    };
    getData();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    console.log("Screen width:", window.innerWidth);
    console.log("isMobile updated:", isMobile);
  }, [isMobile]);

  return (
    <>
      <main className="map-container">
        <MapViewReact turidData={turidData} />

        <aside className="map-buttons">
          <button className='enlarge-map-btn'></button>
          <button className='center-btn'></button>
          <button className='zoom-in-btn'></button>
          <button className='zoom-out-btn'></button>
        </aside>

        <div className="overlay-view">{activeOverlay}</div>

        <section className={`map-footer ${isMobile ? "mobile-bg" : "desktop-bg"}`}>


          <section className='footer-menus-container'>
            {isMobile ? (
              <>
                <div className='logo-button-container-mobile'>
                  <button>Sök</button>
                  <img className='logo' src={logo} alt="logo" />
                  <button>Route</button>
                </div>
              </>
            ) : (
              <>
                <div className='logo-button-container-desktop'>
                  <div>
                    <img className='logo' src={logo} alt="logo" />
                  </div>
                  <div className='footer-buttons-container'>
                    <button>Sök</button>
                    <button>Filter</button>
                    <button>Meny</button>
                    <button>Dela</button>
                    <button>Route</button>
                  </div>
                </div>
              </>
            )}
          </section>
        </section>
      </main>
    </>
  );
}

export default App;