import React, { useState, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";

import styles from "./Styles.module.css";
import { apiService } from "../../JS/apiService";

const ApiService = new apiService();

function TrendingTodayList() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    ApiService.fetchTrends()
      .then((res) => res.json())
      .then((data) => {
        setTrendingMovies(data.results);
      });
  }, []);

  let match = useRouteMatch();

  return (
    <div>
      <ul>
        {trendingMovies.map((elem) => {
          return (
            <li className={styles.gradientButton} key={elem.id}>
              <Link to={`${match.url}${elem.id}`}>{elem.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TrendingTodayList;
