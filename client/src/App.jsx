import { useEffect, useState } from 'react';
import MapViewReact from "./components/MapView/MapView.jsx";
import { getAllTuridData } from './utils/apis/turid.js';
import NavDesktop from './components/NavDesktop/NavDesktop';
import NavMobile from './components/NavMobile/NavMobile';
import './App.css';

function App() {
  const [turidData, setTuridData] = useState(null);
  const [activeOverlay, setActiveOverlay] = useState(null);

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
      </main>

      <NavDesktop />
      <NavMobile />
    </>
  );
}

export default App;