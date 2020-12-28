import React from "react";
import TrendingTodayList from "../Components/TrandingTodayList/TrendingTodayList";
import NaviBar from "../Components/NaviBar/NaviBar";

import styles from "./Styles.module.css";

function Home() {
  return (
    <div>
      <NaviBar />
      <h2 className={styles.gradientButton}>Trending today</h2>
      <TrendingTodayList />
    </div>
  );
}

export default Home;
