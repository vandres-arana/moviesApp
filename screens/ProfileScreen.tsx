import React, { Component } from 'react';
import { Text, View, Image, Dimensions, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import { UserRaiting } from '../components/UserRaiting';
type ProfileScreenProps = {
  image: string;
  name: string;
  likes: number;
  watching: number;
  comments: number;
  movies: string[];
}

export class MovieDetail extends React.Component<{
  movie: string,
}> {
  render() {
    const { movie } = this.props;

    return (
      <View
        style={styles.imageMovieContainer}>
        <Image
          style={styles.imageMovie}
          source={{
            uri: movie,
          }}
        />
      </View>
    )
  }
}

export class ProfileScreen extends Component<ProfileScreenProps> {
  constructor(props: ProfileScreenProps) {
    super(props);
  }

  movieDetail(properties: {
    movie: any,
  }) {
    const { movie } = properties;

    return (
      <View
        style={styles.imageMovieContainer}>
        <Image
          style={styles.imageMovie}
          source={{
            uri: movie,
          }}
        />
      </View>
    )
  }

  movieDetailAsFunction(index: number, movie: string) {
    return (
      <View
        key={index}
        style={styles.imageMovieContainer}>
        <Image
          style={styles.imageMovie}
          source={{
            uri: movie,
          }}
        />
      </View>
    )
  }

  render() {
    const {
      image,
      name,
      likes,
      watching,
      comments,
      movies
    } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.profile}>
          <View style={styles.topHeaderContainer}>
            <Text style={{ fontSize: 24 }}>Profile</Text>

            <Ionicons name="settings" size={30} color="black" />

          </View>
          <View style={styles.imageContainer}>
            <View style={styles.userImageContainer}>
              <Image style={styles.userImage}
                resizeMode='cover'
                source={{
                  uri: image,
                }}
              />
            </View>
          </View>
          <View style={styles.userNameContainer}>
            <Text style={styles.userNameText} numberOfLines={2}>
              {name}
            </Text>
          </View>
        </View>
        {/* User raitings container FLEX 1*/}
        <View style={styles.userRaitingContainer}>
          <UserRaiting
            raiting={likes}
            label="Like"
          />
          <UserRaiting
            raiting={watching}
            label="Watching"
          />
          <UserRaiting
            raiting={comments}
            label="Comments"
          />
        </View>

        {/* Movie list FLEX 4*/}
        <View style={styles.movieList}>
          <ScrollView style={{ flex: 1 }}>
            <View style={styles.movieListContainer}>
              {movies.map((movie, index) => (
                // <this.movieDetail key={index} movie={movie} />
                // <MovieDetail key={index} movie={movie} />
                this.movieDetailAsFunction(index, movie)
              ))}
            </View>
          </ScrollView>
        </View>

        {/* bottom navigation FLEX 1*/}
        <View style={styles.bottomNavigationContainer}>
          <View style={styles.itemBottomNavigationContainer}>
            <Ionicons name="ios-videocam-outline" size={26} color="#979797" />
            <Text style={styles.textBottomNavigation}>Movies</Text>
          </View>
          <View style={styles.itemBottomNavigationContainer}>
            <Ionicons name="ios-tv-outline" size={26} color="#979797" />
            <Text style={styles.textBottomNavigation}>TV</Text>
          </View>
          <View style={styles.itemBottomNavigationContainer}>
            <Ionicons name="ios-person-outline" size={26} color='#E24951' />
            <Text style={[styles.textBottomNavigation, { color: '#E24951' }]}>Profile</Text>
          </View>


        </View>

      </View>
    )

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: "#F8F8F8"
  },
  profile: {
    height: 368,
    backgroundColor: '#446BCF',
  },
  topHeaderContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    alignItems: 'center'
  },
  // User image
  imageContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userImageContainer: {
    width: 110,
    height: 110,
    backgroundColor: 'pink',
    borderRadius: 55,
    shadowColor: "grey",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,

    elevation: 24
  },
  userImage: {
    height: 110,
    width: 110,
    borderRadius: 55
  },
  userNameContainer: { flex: 1, justifyContent: 'center' },
  userNameText: { textAlign: 'center', fontSize: 24 },
  userRaitingContainer: {
    padding: 8,
    borderRadius: 10,
    flexDirection: 'row'
  },
  movieListContainer: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    paddingHorizontal: 8
  },
  imageMovieContainer: {
    width: 75,
    height: 119,
    backgroundColor: 'green',
    margin: 8,
    borderRadius: 5,
    elevation: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.45,
    shadowRadius: 10
  },
  imageMovie: {
    width: "100%",
    height: "100%",
    borderRadius: 5
  },

  // bottom navigation
  bottomNavigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FEFEFE'
  },
  textBottomNavigation: {
    fontSize: 10,
    color: "#979797"
  },
  itemBottomNavigationContainer: {
    height: 50,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 8
  },
  movieList: {
    flexGrow: 1,
  },
})