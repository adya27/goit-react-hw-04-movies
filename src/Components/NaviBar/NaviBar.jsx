import React from "react";

import { NavLink, useLocation } from "react-router-dom";

import styles from "./NaviBar.module.css";

function NaviBar() {
  const location = useLocation();
  return (
    <div>
      <NavLink
        className={styles.gradientButton}
        activeClassName={styles.gradientButtonActive}
        exact
        to={{ pathname: "/", state: { from: location } }}
      >
        Home
      </NavLink>
      <NavLink
        exact
        className={styles.gradientButton}
        activeClassName={styles.gradientButtonActive}
        to={{ pathname: "/search", state: { from: location } }}
      >
        Search
      </NavLink>
      <hr />
    </div>
  );
}

export default NaviBar;
