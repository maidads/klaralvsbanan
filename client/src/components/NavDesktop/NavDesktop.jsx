import "./NavDesktop.css";
import searchIcon from "../../assets/icons/Search_icon.svg";
import filterIcon from "../../assets/icons/Filter_icon.svg";
import menuIcon from "../../assets/icons/Menu_icon.svg";
import routeIcon from "../../assets/icons/Route_icon.svg";
import shareIcon from "../../assets/icons/Share_icon.svg";
import logo from "../../assets/svg/logo.svg";

function NavDesktop() {
    return ( 
        <>
            <nav className="nav__desktop">
                <img className="nav__desktop-logo" src={logo} alt="" />
                <div className="nav__desktop-icons-group">
                    <img className="nav__desktop-icon" src={searchIcon} alt="" />
                    <img className="nav__desktop-icon" src={filterIcon} alt="" />
                    <img className="nav__desktop-icon" src={menuIcon} alt="" />
                    <img className="nav__desktop-icon" src={shareIcon} alt="" />
                    <img className="nav__desktop-icon" src={routeIcon} alt="" />
                </div>
            </nav>
        </>
    );
}

export default NavDesktop;
