import { lazy, Suspense } from "react";

import logo from "./logo.svg";
import Loader from "react-loader-spinner";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Home = lazy(() =>
  import("./Views/Home.jsx" /* webpackChunkName: "home-view" */)
);
const Search = lazy(() =>
  import("./Views/Search" /* webpackChunkName: "search-view" */)
);
const Movie = lazy(() =>
  import("./Views/Movie.jsx" /* webpackChunkName: "movie-view" */)
);

function App() {
  return (
    <Suspense
      fallback={
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      }
    >
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/search">
              <Search />
            </Route>
            <Route path="/:movieId">
              <Movie />
            </Route>
          </Switch>
        </div>
      </Router>
    </Suspense>
  );
}

export default App;
