import React, { useState, useEffect } from "react";
import { Link, useParams, useRouteMatch, Route } from "react-router-dom";

import { apiService } from "../JS/apiService";
import Cast from "./Cast";
import Reviews from "./Reviews";
import ButtonGoBack from "../Components/ButtonGoBack/ButtonGoBack";
import NaviBar from "../Components/NaviBar/NaviBar";
import styles from "./Styles.module.css";
import noImage from "../Images/noImage.png";

const ApiService = new apiService();

function Movie() {
  const [Movie, setMovie] = useState();
  const { movieId } = useParams();
  let match = useRouteMatch();

  useEffect(() => {
    ApiService.fetchMovie(movieId)
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, [movieId]);

  return (
    <div>
      {Movie && (
        <>
          <NaviBar />
          <ButtonGoBack />
          <div className={styles.container}>
            <div className={styles.imgContainer}>
              {Movie.backdrop_path ? (
                <img
                  className={styles.img}
                  alt={`${Movie.title} poster`}
                  src={`https://image.tmdb.org/t/p/w500/${Movie.backdrop_path}`}
                />
              ) : (
                <img
                  className={styles.img}
                  alt={`${Movie.title} poster`}
                  src={noImage}
                />
              )}
            </div>

            <div className={styles.textContainer}>
              <h2 className={styles.movieTitle2}>
                {Movie.title} ({(Movie.release_date ?? "unknown").split("-")[0]}
                )
              </h2>
              <p className={styles.movieParagraf}>
                User score: {Movie.vote_average}
              </p>
              <h3 className={styles.movieTitle3}>Overview</h3>
              <p className={styles.movieParagraf}>{Movie.overview}</p>
              <h3 className={styles.movieTitle3}>Genres</h3>
              <ul>
                {Movie.genres &&
                  Movie.genres.map((genre) => (
                    <li className={styles.movieParagraf} key={genre.id}>
                      {genre.name}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <ul>
            <li className={styles.movieTitle3}>
              <Link className={styles.movieTitle3} to={`${match.url}/cast`}>
                Cast
              </Link>
            </li>
            <li className={styles.movieTitle3}>
              <Link className={styles.movieTitle3} to={`${match.url}/reviews`}>
                Reviews
              </Link>
            </li>
          </ul>

          <hr />
          <Route path={`${match.url}/cast`}>
            {movieId && <Cast id={movieId} />}
          </Route>
          <Route path={`${match.url}/reviews`}>
            {movieId && <Reviews id={movieId} />}
          </Route>
        </>
      )}
    </div>
  );
}

export default Movie;
