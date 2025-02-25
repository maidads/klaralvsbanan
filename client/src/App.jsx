import { useState } from 'react';
import MapViewReact from "./components/MapView/MapView.jsx";
import Button from "./components/Button/Button.jsx";
import PlayIcon from "./assets/icons/play-outline.svg";

function App() {
  const [activeOverlay, setActiveOverlay] = useState(null); //för att styra vilken vy man är i

  return (
    <>
      <main>
        <MapViewReact />
        <aside>
          <button className='enlarge-map-btn'></button>
          <button className='center-btn'></button>
          <button className='zoom-in-btn'></button>
          <button className='zoom-out-btn'></button>
        </aside>
        <div className="overlay-view">{activeOverlay}</div>
      </main>
      <footer>
        <img />
        <Button text="Sök" icon={PlayIcon} />
        <button>Filter</button>
        <button>Meny</button>
        <button>Dela</button>
        <button>Route</button>
      </footer>
    </>
  );
}

export default App;