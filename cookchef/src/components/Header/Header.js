import React, { useState } from "react";
import styles from "./Header.module.scss";
import HeaderMenu from "./components/HeaderMenu/HeaderMenu";
import { NavLink } from "react-router-dom";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className={`${styles.header} d-flex flex-row align-items-center`}>
      <div className="flex-fill">
        <NavLink to="/">
          <img
            src="https://github.com/dymafr/react-c5l4/blob/master/src/assets/images/cookchef.png?raw=true"
            alt="logo cookchef"
          />
        </NavLink>
      </div>
      <ul className={styles.headerList}>
        <NavLink to="admin">
          <button className="mr-15 btn btn-reverse-primary">Admin</button>
        </NavLink>

        <button className="mr-15 btn btn-reverse-primary">
          <i className="fa-solid fa-heart mr-5"></i>
          <span>Wishlist</span>
        </button>
        <button className="btn btn-primary">connexion</button>
      </ul>
      <i
        onClick={() => setShowMenu(true)}
        className={`fa-solid fa-bars mr-15 ${styles.headerXs} `}
      ></i>
      {showMenu && (
        <>
          <div onClick={() => setShowMenu(false)} className="calc"></div>
          <HeaderMenu />
        </>
      )}
    </header>
  );
}

export default Header;
