import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import MovieDetail from './screens/MovieDetail';
import { ProfileScreen } from './screens/ProfileScreen';

export default class App extends React.Component {
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
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar />
        <ProfileScreen
        image = "https://cdn3.vectorstock.com/i/1000x1000/10/07/paper-cut-smile-face-icon-isolated-on-black-vector-28211007.jpg"
        name = "Josue Lemus"
        likes = {23}
        watching = {100}
        comments = {320}
        movies = {this.movieList}
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
});
