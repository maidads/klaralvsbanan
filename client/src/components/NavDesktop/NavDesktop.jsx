import { useState } from "react";
import "./NavDesktop.css";
import searchIcon from "../../assets/icons/Search_icon.svg";
import filterIcon from "../../assets/icons/Filter_icon.svg";
import menuIcon from "../../assets/icons/Menu_icon.svg";
import routeIcon from "../../assets/icons/Route_icon.svg";
import shareIcon from "../../assets/icons/Share_icon.svg";
import logo from "../../assets/svg/logo.svg";
import SearchResult from "../SearchResult/SearchResult.jsx";

function NavDesktop() {
    const [showSearch, setShowSearch] = useState(false);

    return ( 
        <>
            <nav className="nav__desktop">
                <img className="nav__desktop-logo" src={logo} alt="Logo" />
                <div className="nav__desktop-icons-group">
                    <img 
                        className="nav__desktop-icon" 
                        src={searchIcon} 
                        alt="Search" 
                        onClick={() => setShowSearch(true)}
                    />
                    <img className="nav__desktop-icon" src={filterIcon} alt="Filter" />
                    <img className="nav__desktop-icon" src={menuIcon} alt="Menu" />
                    <img className="nav__desktop-icon" src={shareIcon} alt="Share" />
                    <img className="nav__desktop-icon" src={routeIcon} alt="Route" />
                </div>
            </nav>

            {showSearch && <SearchResult onClose={() => setShowSearch(false)} />}
        </>
    );
}

export default NavDesktop;
