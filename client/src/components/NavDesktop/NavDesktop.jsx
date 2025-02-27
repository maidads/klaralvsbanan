import { useState } from "react";
import filterIcon from "../../assets/icons/Filter_icon.svg";
import menuIcon from "../../assets/icons/Menu_icon.svg";
import routeIcon from "../../assets/icons/Route_icon.svg";
import searchIcon from "../../assets/icons/Search_icon.svg";
import shareIcon from "../../assets/icons/Share_icon.svg";
import logo from "../../assets/svg/logo.svg";
import SearchResult from "../SearchResult/SearchResult.jsx";
import "./NavDesktop.css";

function NavDesktop() {
    const [showSearch, setShowSearch] = useState(false);

    return (
        <>
            <nav className="nav__desktop">
                <img className="nav__desktop-logo" src={logo} alt="Logo" />
                <div className="nav__desktop-icons-group">
                    <div className="nav__desktop-item">
                        <img 
                            className="nav__desktop-icon"
                            src={searchIcon}
                            alt="Search"
                            onClick={() => setShowSearch(true)}
                        />
                        <span className="nav__desktop-text">Sök</span>
                    </div>
                    <div className="nav__desktop-item">
                        <img className="nav__desktop-icon" src={filterIcon} alt="Filter" />
                        <span className="nav__desktop-text">Filter</span>
                    </div>
                    <div className="nav__desktop-item">
                        <img className="nav__desktop-icon" src={menuIcon} alt="Menu" />
                        <span className="nav__desktop-text">Meny</span>
                    </div>
                    <div className="nav__desktop-item">
                        <img className="nav__desktop-icon" src={shareIcon} alt="Share" />
                        <span className="nav__desktop-text">Dela</span>
                    </div>
                    <div className="nav__desktop-item">
                        <img className="nav__desktop-icon" src={routeIcon} alt="Route" />
                        <span className="nav__desktop-text">Route</span>
                    </div>
                </div>
            </nav>
            {showSearch && <SearchResult onClose={() => setShowSearch(false)} />}
        </>
    );
}

export default NavDesktop;
