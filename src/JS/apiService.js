class apiService {
  API_KEY = "00247c3a79a23ea8d225678fa2dae566";

  fetchTrends = (page = 1) => {
    return fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${this.API_KEY}&page=${page}`
    );
  };

  fetchSearch = (query, page = 1) => {
    return fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${this.API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`
    );
  };

  fetchMovie = (movieId) => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${this.API_KEY}&language=en-US`
    );
  };

  fetchActors = (movieId) => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${this.API_KEY}&language=en-US`
    );
  };
  fetchReviews = (movieId, page = 1) => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${this.API_KEY}&language=en-US&page=${page}`
    );
  };
}

export { apiService };
