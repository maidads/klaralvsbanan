import { useEffect, useState } from 'react';
import MapViewReact from "./components/MapView/MapView.jsx";
import { getAllTuridData } from './utils/apis/turid.js';
import SearchResult from "./components/SearchResult/SearchResult.jsx";
import NavDesktop from './components/NavDesktop/NavDesktop'
import NavMobile from './components/NavMobile/NavMobile'
import './App.css';
import logo from './assets/svg/logo.svg';

function App() {
  const [turidData, setTuridData] = useState(null);
  const [activeOverlay, setActiveOverlay] = useState(null);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const data = await getAllTuridData();
      setTuridData(data);
    };
    getData();
  }, []);

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
                  <button onClick={() => setShowSearch(true)}>Sök</button>
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
                    <button onClick={() => setShowSearch(true)}>Sök</button>
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
      {showSearch && <SearchResult onClose={() => setShowSearch(false)} />}

      <NavDesktop />
      <NavMobile />
    </>
  );
}

export default App;