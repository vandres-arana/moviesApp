import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, Text, VirtualizedList } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import MovieDetail from './screens/MovieDetail';
import { ProfileScreen } from './screens/ProfileScreen';
import { allMovies } from './App.api';
import { getPopular } from './services/MovieApi';
import Movie from './models/movie';

type AppProps = {
}

type AppState = {
  movies: Movie[];
}
export default class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = {
      movies: [],
    };
  }

  loadApp = async () => {
    const movies = await getPopular();
    this.setState({ movies });
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

  componentDidMount() {
    this.loadApp();
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

        {/* <ScrollView>
          {movies.map((movie, index) => {
            return (
              <MovieDetail
                key={movie.id}
                {...movie}
                toggleFavorite={this.toggleMovieIsFavorite(index)}
              />
            )
          })}
        </ScrollView> */}

        <VirtualizedList
          data={movies}
          initialNumToRender={2}
          renderItem={({ item }) => (
            <MovieDetail
              {...item}
              toggleFavorite={this.toggleMovieIsFavorite(0)}
            />
          )}
          keyExtractor={(item: Movie) => item.id.toString()}
          getItemCount={() => movies.length}
          getItem={(data, index) => movies[index]}
        />
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
