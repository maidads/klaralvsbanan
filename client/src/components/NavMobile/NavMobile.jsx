import "./NavMobile.css";
import searchIcon from "../../assets/icons/Search_icon.svg";
import routeIcon from "../../assets/icons/Route_icon.svg";
import logo from "../../assets/svg/logo.svg";

function NavDesktop() {
    return ( 
        <>
            <nav className="nav__mobile">
                <div className="nav__mobile-icons-group">
                    <img className="nav__mobile-icon" src={searchIcon} alt="" />
                    <img className="nav__mobile-logo" src={logo} alt="" />
                    <img className="nav__mobile-icon" src={routeIcon} alt="" />
                </div>
            </nav>
        </>
    );
}

export default NavDesktop;
