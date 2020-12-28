import React from "react";

import { NavLink } from "react-router-dom";

import styles from "./NaviBar.module.css";

function NaviBar() {
  return (
    <div>
      <NavLink
        className={styles.gradientButton}
        activeClassName={styles.gradientButtonActive}
        exact
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        exact
        className={styles.gradientButton}
        activeClassName={styles.gradientButtonActive}
        to="/search"
      >
        Search
      </NavLink>
      <hr />
    </div>
  );
}

export default NaviBar;
