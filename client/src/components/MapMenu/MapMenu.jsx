import React, { useState, useEffect, useRef } from 'react';
import styles from './MapMenu.module.css';
import { FiLayers } from "react-icons/fi";
import { MdLanguage } from "react-icons/md";
import { TbRoute } from "react-icons/tb";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";


const MapMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isMapLayerOpen, setIsMapLayerOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('Swedish');
  const [selectedMapLayer, setSelectedMapLayer] = useState('Layer 1');
  const menuRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleLanguage = () => setIsLanguageOpen(!isLanguageOpen);
  const toggleMapLayer = () => setIsMapLayerOpen(!isMapLayerOpen);

  
  //Stänger modalen om användaren klickar utanför modalen
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
      setIsLanguageOpen(false);
      setIsMapLayerOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.mapMenu} ref={menuRef}>
      <button onClick={toggleMenu} className={styles.mapMenu__menuButton}>
      <MdOutlineMenu className={styles.mapMenu__menuIcon} size={20} />
      </button>
      {isMenuOpen && (
        <div className={styles.mapMenu__dropdownMenu}>
          <div className={styles.mapMenu__title}>Settings</div>
          <div className={`${styles.mapMenu__dropdownItem} ${styles['mapMenu__dropdownItem--language']}`} onMouseEnter={toggleLanguage} onMouseLeave={toggleLanguage}>
            <div className={styles.mapMenu__itemContent}>
              <MdLanguage className={styles.mapMenu__icon} size={20} />
              Language
            </div>
            <MdOutlineKeyboardArrowRight className={styles.mapMenu__arrow} size={20}/>
            {isLanguageOpen && (
              <div className={styles.mapMenu__submenu}>
                <label>
                  <input
                    type="radio"
                    name="language"
                    value="English"
                    checked={selectedLanguage === 'English'}
                    onChange={() => setSelectedLanguage('English')}
                  />
                  English
                </label>
                <label>
                  <input
                    type="radio"
                    name="language"
                    value="Swedish"
                    checked={selectedLanguage === 'Swedish'}
                    onChange={() => setSelectedLanguage('Swedish')}
                  />
                  Swedish
                </label>
              </div>
            )}
          </div>
          <div className={`${styles.mapMenu__dropdownItem} ${styles['mapMenu__dropdownItem--mapLayer']}`} onMouseEnter={toggleMapLayer} onMouseLeave={toggleMapLayer}>
            <div className={styles.mapMenu__itemContent}>
              <FiLayers className={styles.mapMenu__icon} size={20} />
              Map Layer
            </div>
            <MdOutlineKeyboardArrowRight className={styles.mapMenu__arrow} size={20} />
            {isMapLayerOpen && (
              <div className={styles.mapMenu__submenu}>
                <label>
                  <input
                    type="radio"
                    name="mapLayer"
                    value="Layer 1"
                    checked={selectedMapLayer === 'Layer 1'}
                    onChange={() => setSelectedMapLayer('Layer 1')}
                  />
                  Layer 1
                </label>
                <label>
                  <input
                    type="radio"
                    name="mapLayer"
                    value="Layer 2"
                    checked={selectedMapLayer === 'Layer 2'}
                    onChange={() => setSelectedMapLayer('Layer 2')}
                  />
                  Layer 2
                </label>
                <label>
                  <input
                    type="radio"
                    name="mapLayer"
                    value="Layer 3"
                    checked={selectedMapLayer === 'Layer 3'}
                    onChange={() => setSelectedMapLayer('Layer 3')}
                  />
                  Layer 3
                </label>
              </div>
            )}
          </div>
          <div className={`${styles.mapMenu__dropdownItem} ${styles.mapMenu__routePlanner}`}>
            <div className={styles.mapMenu__itemContent}>
              <TbRoute className={styles.mapMenu__icon} size={20} />
              Route planner
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MapMenu;