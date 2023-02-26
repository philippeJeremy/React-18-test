import { NavLink } from "react-router-dom";
import styles from "./AdminNav.module.scss";

function AdminNav() {
  return (
    <ul className={`d-flex flex-column ${styles.list}`}>
      <NavLink
        className={({ isActive }) => (isActive ? styles.active : "")}
        to="recipes"
      >
        Recette
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? styles.active : "")}
        to="users"
      >
        Utilisateurs
      </NavLink>
    </ul>
  );
}

export default AdminNav;
