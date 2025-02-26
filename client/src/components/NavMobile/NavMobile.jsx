import { useState } from "react";
import "./NavMobile.css";
import searchIcon from "../../assets/icons/Search_icon.svg";
import routeIcon from "../../assets/icons/Route_icon.svg";
import logo from "../../assets/svg/logo.svg";
import SearchResult from "../SearchResult/SearchResult.jsx";

function NavMobile() {
    const [showSearch, setShowSearch] = useState(false);

    return ( 
        <>
            <nav className="nav__mobile">
                <div className="nav__mobile-icons-group">
                    <img 
                        className="nav__mobile-icon" 
                        src={searchIcon} 
                        alt="Search" 
                        onClick={() => setShowSearch(true)}
                    />
                    <img className="nav__mobile-logo" src={logo} alt="Logo" />
                    <img className="nav__mobile-icon" src={routeIcon} alt="Route" />
                </div>
            </nav>

            {showSearch && <SearchResult onClose={() => setShowSearch(false)} />}
        </>
    );
}

export default NavMobile;
