import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";

import NaviBar from "../Components/NaviBar/NaviBar";
import ButtonGoBack from "../Components/ButtonGoBack/ButtonGoBack";
import { apiService } from "../JS/apiService";
import styles from "./Styles.module.css";

const ApiService = new apiService();

function Search(props) {
  const [search, setSearch] = useState("");
  const [matches, setMatches] = useState([]);
  const [results, setResults] = useState(1);

  const history = useHistory();
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");

  let previous = {};

  const searchMovies = (e) => {
    e.preventDefault();

    previous = location;

    history.push({ ...location, search: `query=${search}` });
    setSearch("");
  };

  useEffect(() => {
    if (location.search === "") {
      return;
    }

    ApiService.fetchSearch(query)
      .then((res) => res.json())
      .then((data) => {
        setMatches(data.results);
        setResults(data.total_results);
      });
  }, [location.search, query]);

  const message = results ? "" : "No matches";

  return (
    <>
      <NaviBar />
      <ButtonGoBack previous={previous} />
      <form onSubmit={searchMovies} action="">
        <input
          className={styles.gradientButton}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          name=""
          id=""
          value={search}
        />
        <button className={styles.gradientButton} type="submit">
          Search
        </button>
      </form>

      <hr />

      <>
        <ul>
          {matches.length !== 0 ? (
            matches.map((movie) => (
              <li key={movie.id}>
                <Link
                  to={{
                    pathname: `/${movie.id}`,
                    state: { from: location },
                  }}
                >
                  {movie.title}
                </Link>
              </li>
            ))
          ) : (
            <li>{message}</li>
          )}
        </ul>
      </>
    </>
  );
}

export default Search;
