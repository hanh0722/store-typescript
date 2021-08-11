import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.scss";
const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles['list-items']}>
        <div className={styles.logo}>
          <li>React Cart</li>
        </div>
        <div className={styles.list}>
          <NavLink activeClassName={styles.active} to="/" exact>
            <li>Products</li>
          </NavLink>
          <NavLink activeClassName={styles.active} to="/cart">
            <li>Cart</li>
          </NavLink>
          <NavLink activeClassName={styles.active} to="/add-products">
            <li>Add Products</li>
          </NavLink>
        </div>
      </ul>
    </nav>
  );
};

export default Navigation;
