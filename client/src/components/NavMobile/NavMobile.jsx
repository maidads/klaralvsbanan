import { useState } from "react";
import routeIcon from "../../assets/icons/Route_icon.svg";
import searchIcon from "../../assets/icons/Search_icon.svg";
import logo from "../../assets/svg/logo.svg";
import SearchResult from "../SearchResult/SearchResult.jsx";
import "./NavMobile.css";

function NavMobile() {
    const [showSearch, setShowSearch] = useState(false);

    return (
        <>
            <nav className="nav__mobile">
                <div className="nav__mobile-icons-group">
                    <div className="nav__mobile-item">
                        <img
                            className="nav__mobile-icon"
                            src={searchIcon}
                            alt="Search"
                            onClick={() => setShowSearch(true)}
                        />
                        <span className="nav__mobile-text">Sök</span>
                    </div>
                    <img className="nav__mobile-logo" src={logo} alt="Logo" />
                    <div className="nav__mobile-item">
                        <img className="nav__mobile-icon" src={routeIcon} alt="Route" />
                        <span className="nav__mobile-text">Route</span>
                    </div>

                </div>
            </nav>

            {showSearch && <SearchResult onClose={() => setShowSearch(false)} />}
        </>
    );
}

export default NavMobile;