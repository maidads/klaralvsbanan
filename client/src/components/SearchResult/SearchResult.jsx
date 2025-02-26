import React, { useEffect, useState } from "react";
import "./SearchResult.css";

function SearchResult({ onClose }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(onClose, 300); // Väntar på animation innan den stängs
    };

    return (
        <div className={`search-overlay ${isClosing ? "hidden" : ""}`}>
            <div className={`${isMobile ? "full-screen" : "side-panel"}`}>
                {/* Stäng-knapp i hörnet */}
                <button className="close-btn" onClick={handleClose}>✕</button>

                {/* Sökrutan */}
                <div className="search-box">
                    <span className="search-icon">🔍</span>
                    <input 
                        type="text" 
                        placeholder="Sök" 
                        value={searchTerm} 
                        onChange={(e) => setSearchTerm(e.target.value)} 
                    />
                </div>

                {/* Senaste sökningar */}
                <div className="search-section">
                    <h3>Senaste</h3>
                    <div className="search-item">Aktivitet</div>
                </div>

                {/* Förslag */}
                <div className="search-section">
                    <h3>Förslag</h3>
                    <div className="search-item">Boende</div>
                    <div className="search-item">Vandring</div>
                    <div className="search-item">Restaurang</div>
                    <div className="search-item">Nationalpark</div>
                    <div className="search-item">Toalett</div>
                </div>
            </div>
        </div>
    );
}

export default SearchResult;