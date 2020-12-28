import React, { useState, useEffect } from "react";

import { apiService } from "../JS/apiService";
import styles from "./Styles.module.css";

const ApiService = new apiService();

function Cast({ id }) {
  const [actors, setActors] = useState();

  useEffect(() => {
    ApiService.fetchActors(id)
      .then((res) => res.json())
      .then((data) => setActors(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ul className={styles.actorsList}>
      {actors &&
        actors.cast.map((cast) => (
          <li className={styles.actor} key={cast.id}>
            <img
              className={styles.img}
              alt={`${cast.name} portrait`}
              src={`https://image.tmdb.org/t/p/w200${cast.profile_path}`}
            />
            <p className={styles.paragraphContainer}>{cast.name}</p>
            <p className={styles.paragraphContainer}>{cast.character}</p>
          </li>
        ))}
    </ul>
  );
}

Cast.propTypes = {};

export default Cast;
