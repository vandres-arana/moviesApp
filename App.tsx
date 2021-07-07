import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import MovieDetail from './screens/MovieDetail';
import { ProfileScreen } from './screens/ProfileScreen';
import { allMovies } from './App.api';

type AppProps = {
}
export default class App extends React.Component<AppProps> {
  state = {
    movies: allMovies,
  }

  countFavorites = () => {
    const { movies } = this.state;

    return movies.reduce((acc, movie) => acc + Number(movie.isFavorite), 0);
  }

  toggleMovieIsFavorite = (index: number) => () => {
    const { movies } = this.state;
    const movie = movies[index];
    movie.isFavorite = !movie.isFavorite;

    this.setState({ movies })
  }

  render() {
    const favorites = this.countFavorites();
    const { movies } = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar />
        <Text style={styles.total}>
          TOTAL Favorites: {favorites || 0}
        </Text>

        <ScrollView>
          {movies.map((movie, index) => {
            if (movie.isFavorite) {
              return <Text key={movie.id}>
                {movie.title} is Favorite!
              </Text>
            }

            return (
              <MovieDetail
                key={movie.id}
                {...movie}
                toggleFavorite={this.toggleMovieIsFavorite(index)}
              />
            )
          })}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  total: {
    marginTop: 40,
    padding: 12,
    fontSize: 24,
  },
});
