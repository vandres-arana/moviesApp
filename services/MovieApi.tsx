import MovieApi from '../models/api/movie';
import Movie from '../models/movie';

const URL = 'https://api.themoviedb.org/3/movie';
const ApiKey = 'f7addb2b33200531278cc5f24dac8400';

const wrapMovie = (movie: MovieApi): Movie => ({
  id: movie.id,
  title: movie.title,
  description: movie.overview,
  rating: movie.vote_average,
  peopleWatching: movie.popularity,
  urlImageBanner: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
  urlImageProfile: `https://image.tmdb.org/t/p/w300/${movie.backdrop_path}`,
  genders: movie.genre_ids,
  tomatometer: 0,
  isFavorite: false,
})

export const getPopular = (page = 1): Promise<Movie[]> => {
  const input = `${URL}/popular?api_key=${ApiKey}&language=en-US&page=${page}`

  return fetch(input)
    .then(response => response.json())
    .then(response => {
      const moviesFromApi = response.results as MovieApi[];

      return moviesFromApi.map(wrapMovie);
    });
}