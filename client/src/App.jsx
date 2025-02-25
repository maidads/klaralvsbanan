import { useEffect, useState } from 'react';
import MapViewReact from "./components/MapView/MapView.jsx";
import { getAllTuridData } from './utils/apis/turid.js';
import NavDesktop from './components/NavDesktop/NavDesktop'

function App() {

  const [turidData, setTuridData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const data = await getAllTuridData();
      setTuridData(data);
    }
    getData();
  }, []);

  const [activeOverlay, setActiveOverlay] = useState(null); //för att styra vilken vy man är i
  
  return (
    <>
      <main>
        <MapViewReact turidData={turidData}></MapViewReact>
        <aside>
          <button className='enlarge-map-btn'></button>
          <button className='center-btn'></button>
          <button className='zoom-in-btn'></button>
          <button className='zoom-out-btn'></button>
        </aside>
        <div className="overlay-view">{activeOverlay}</div>
      </main>
      < NavDesktop />
    </>
  );
}

export default App;