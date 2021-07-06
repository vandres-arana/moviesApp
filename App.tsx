import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import MovieDetail from './screens/MovieDetail';
import { ProfileScreen } from './screens/ProfileScreen';

type AppProps = {
  favorites: number;
}
export default class App extends React.Component<AppProps> {
  movieList = ["https://i.pinimg.com/474x/4a/a7/09/4aa709fb827464c325ee3c63f07b8a6c.jpg",
    "https://gcdn.emol.cl/comics/files/2019/04/dceased04.jpg",
    "https://i.pinimg.com/736x/c2/49/78/c2497819e6b99cc35c73a9fcde98a6f4.jpg",
    "https://i.pinimg.com/474x/4a/a7/09/4aa709fb827464c325ee3c63f07b8a6c.jpg",
    "https://gcdn.emol.cl/comics/files/2019/04/dceased04.jpg",
    "https://i.pinimg.com/736x/c2/49/78/c2497819e6b99cc35c73a9fcde98a6f4.jpg",
    "https://i.pinimg.com/474x/4a/a7/09/4aa709fb827464c325ee3c63f07b8a6c.jpg",
    "https://gcdn.emol.cl/comics/files/2019/04/dceased04.jpg",
    "https://i.pinimg.com/736x/c2/49/78/c2497819e6b99cc35c73a9fcde98a6f4.jpg",
    "https://i.pinimg.com/474x/4a/a7/09/4aa709fb827464c325ee3c63f07b8a6c.jpg",
    "https://gcdn.emol.cl/comics/files/2019/04/dceased04.jpg",
    "https://i.pinimg.com/736x/c2/49/78/c2497819e6b99cc35c73a9fcde98a6f4.jpg",
    "https://i.pinimg.com/474x/4a/a7/09/4aa709fb827464c325ee3c63f07b8a6c.jpg",
    "https://gcdn.emol.cl/comics/files/2019/04/dceased04.jpg",
    "https://i.pinimg.com/736x/c2/49/78/c2497819e6b99cc35c73a9fcde98a6f4.jpg",
    "https://i.pinimg.com/474x/4a/a7/09/4aa709fb827464c325ee3c63f07b8a6c.jpg",
    "https://gcdn.emol.cl/comics/files/2019/04/dceased04.jpg",
    "https://i.pinimg.com/736x/c2/49/78/c2497819e6b99cc35c73a9fcde98a6f4.jpg",
    "https://i.pinimg.com/474x/4a/a7/09/4aa709fb827464c325ee3c63f07b8a6c.jpg",
    "https://gcdn.emol.cl/comics/files/2019/04/dceased04.jpg",
    "https://i.pinimg.com/736x/c2/49/78/c2497819e6b99cc35c73a9fcde98a6f4.jpg",
    "https://i.pinimg.com/474x/4a/a7/09/4aa709fb827464c325ee3c63f07b8a6c.jpg",
    "https://gcdn.emol.cl/comics/files/2019/04/dceased04.jpg",
    "https://i.pinimg.com/736x/c2/49/78/c2497819e6b99cc35c73a9fcde98a6f4.jpg"
  ]
  render() {
    const { favorites } = this.props;


    return (
      <SafeAreaView style={styles.container}>
        <StatusBar />
        {/* <ProfileScreen
        image = "https://cdn3.vectorstock.com/i/1000x1000/10/07/paper-cut-smile-face-icon-isolated-on-black-vector-28211007.jpg"
        name = "Josue Lemus"
        likes = {23}
        watching = {100}
        comments = {320}
        movies = {this.movieList}
        /> */}

        <Text style={styles.total}>
          TOTAL Favorites: {favorites || 0}
        </Text>

        <ScrollView>
          <MovieDetail
            title="Justice League"
            description="Fueled by his restored faith in humanity and inspired by Superman's selfless act, Bruce Wayne enlists the help of his newfound ally, Diana Prince, to face an even greater enemy..."
            rating={8.2}
            peopleWatching={1200}
            urlImageBanner="https://tvline.com/wp-content/uploads/2021/01/justice-league.jpg?w=620"
            urlImageProfile="https://upload.wikimedia.org/wikipedia/en/2/26/Justice_League.png"
            genders=""
            tomatometer={60}
          />

          <MovieDetail
            title="Justice League"
            description="Fueled by his restored faith in humanity and inspired by Superman's selfless act, Bruce Wayne enlists the help of his newfound ally, Diana Prince, to face an even greater enemy..."
            rating={8.2}
            peopleWatching={1200}
            urlImageBanner="https://tvline.com/wp-content/uploads/2021/01/justice-league.jpg?w=620"
            urlImageProfile="https://upload.wikimedia.org/wikipedia/en/2/26/Justice_League.png"
            genders=""
            tomatometer={60}
          />

          <MovieDetail
            title="Justice League"
            description="Fueled by his restored faith in humanity and inspired by Superman's selfless act, Bruce Wayne enlists the help of his newfound ally, Diana Prince, to face an even greater enemy..."
            rating={8.2}
            peopleWatching={1200}
            urlImageBanner="https://tvline.com/wp-content/uploads/2021/01/justice-league.jpg?w=620"
            urlImageProfile="https://upload.wikimedia.org/wikipedia/en/2/26/Justice_League.png"
            genders=""
            tomatometer={60}
          />
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
