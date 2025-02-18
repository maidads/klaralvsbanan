import { useState } from 'react';
import './App.css';
import {MapView} from "./components/MapView/MapView";

function App() {

  const [activeOverlay, setActiveOverlay] = useState(null); //för att styra vilken vy man är i

  return (
    <>
      <main>
        <MapView></MapView>
        <aside>
          <button className='enlarge-map-btn'></button>
          <button className='center-btn'></button>
          <button className='zoom-in-btn'></button>
          <button className='zoom-out-btn'></button>
        </aside>
        <div className="overlay-view">{activeOverlay}</div>
      </main>
      <footer>
        <img src="" alt="" />
        <button>Sök</button>
        <button>Filter</button>
        <button>Meny</button>
        <button>Dela</button>
        <button>Route</button>
      </footer>
    </>
  );
}

export default App;
