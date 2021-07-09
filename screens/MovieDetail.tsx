import React, { Component } from 'react';
import { Text, View, Image, Dimensions, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

import MovieRating from '../components/MovieRating';

type MovieDetailProps = {
  id: number,
  title: string;
  description: string;
  rating: number;
  peopleWatching: number;
  urlImageBanner: string;
  urlImageProfile: string;
  genders: number[];
  tomatometer: number;
  isFavorite: boolean;

  toggleFavorite: () => void;
}

type MovieDetailState = {
  imdbRating: number;
  tomatometer: number;
}

export class MovieDetail extends Component<MovieDetailProps, MovieDetailState> {

  deviceDimention = Dimensions.get('window')
  gradientBackgroundHeader = ['transparent', 'transparent', '#000000']
  gradientPlay = ['#F8A000', '#EC703A', '#E24572']

  constructor(props: MovieDetailProps) {
    super(props);

    this.state = {
      imdbRating: 5.2,
      tomatometer: this.props.tomatometer,
    }
  }

  changeRating = () => {
    const { imdbRating, tomatometer } = this.state;

    this.setState({
      imdbRating: imdbRating + 0.1,
      tomatometer: tomatometer + 1,
    }, () => {
      console.log('NEW Rating', this.state);
    });
  }

  toggleFavorite = () => {
    this.props.toggleFavorite();
  }

  componentDidMount() {
    console.log(`Movie Detail #${this.props.id} was mount`);
  }

  componentDidUpdate() {
    console.log(`Movie Detail #${this.props.id} was updated`);
  }

  componentWillUnmount() {
    console.log(`Movie Detail #${this.props.id} was unmount - Good Bye!`);
  }

  getGenresNames(genres: number[]) {
    var genresNames = ""
    const saveGenres = JSON.parse(localStorage. getItem('genres'));
    genres.forEach(genreId => {
      saveGenres.forEach(saveGenre => {
        if (saveGenre.id === genreId) {
          genresNames += ` ${saveGenre.name}`
        }
      })
    })
    return genresNames
  }

  render() {
    console.log(`MovieDetail - Render #${this.props.id}`)

    const {
      title,
      description,
      rating,
      peopleWatching,
      urlImageBanner,
      urlImageProfile,
      genders,
      isFavorite,
    } = this.props;

    const genresNames = this.getGenresNames(genders)

    const {
      imdbRating,
      tomatometer,
    } = this.state;

    return (
      <View>
        {/* HEADER WITH IMAGE AND PLAY BUTTON */}
        <View
          style={{ width: this.deviceDimention.width, height: this.deviceDimention.height * 0.4, justifyContent: 'center', alignItems: 'center' }}>
          <Image
            style={styles.absoluteInContainer}
            resizeMode="cover"
            source={{
              uri: urlImageBanner,
            }}
          />
          <LinearGradient
            style={[styles.absoluteInContainer, { position: 'absolute' }]}
            colors={this.gradientBackgroundHeader}
          />
          <TouchableOpacity
            style={styles.playContainer}
            onPress={() => console.log("PLAY")}>
            <LinearGradient
              colors={this.gradientPlay}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.playContainer}>
              <Ionicons name="play-sharp" size={24} color="white" />
            </LinearGradient>
          </TouchableOpacity>
          {/* GO BACK COMPONENT */}
          <View style={styles.topHeaderContainer}>
            <TouchableOpacity style={styles.goBackContainer}>
              <Ionicons name="ios-chevron-back" size={30} color="white" />
              <Text style={styles.backText}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name="share-outline" size={30} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        {/* MOVIE DETAIL IN THE MIDDLE */}
        <View style={styles.containerDetail}>
          <View style={styles.imageContainer}>
            <Image
              style={[styles.absoluteInContainer, { borderRadius: 7 }]}
              source={{
                uri: urlImageProfile,
              }}
            />
          </View>
          <View style={styles.detailMovieContainer}>
            <Text
              numberOfLines={2}
              style={styles.titleMovie}>
              {title}
            </Text>

            <MovieRating
              imdbRating={imdbRating}
              tomatometer={tomatometer}
              onChangeRating={this.changeRating}
            />

            <View style={styles.bottomContainerDetail}>
              <Text>
                {peopleWatching} People Watching
              </Text>
              <Text style={{ marginVertical: 8 }}>
                {genresNames}
              </Text>
              {/* RAITING MOVIE */}
              <View style={styles.raitingContainer}>
                <Text style={{ color: "#DE3321" }}>
                  {rating}
                </Text>
                <View
                  style={styles.starsContainer}
                >
                  <Ionicons name="star" size={14} color="#DE3321" />
                  <Ionicons name="star" size={14} color="#DE3321" />
                  <Ionicons name="star" size={14} color="#DE3321" />
                  <Ionicons name="star" size={14} color="#DE3321" />
                  <Ionicons name="star" size={14} color="#D8D8D8" />
                </View>
              </View>
            </View>
          </View>
        </View>
        <Text numberOfLines={5} style={{ margin: 16, lineHeight: 30, color: 'gray' }}  >
          {description}
        </Text>
        <TouchableOpacity style={styles.button} onPress={this.toggleFavorite} >
          <Text style={styles.textButton}>
            {!isFavorite ? "Mark as Favorite" : "UnMark as Favorite"}
          </Text>
        </TouchableOpacity>

      </View>
    )
  }
}
const styles = StyleSheet.create({
  absoluteInContainer: {
    width: "100%",
    height: "100%"
  },
  // HEADER CONTAINER WITH IMAGE AND PLAY ICON
  playContainer: {
    width: 54,
    height: 54,
    borderRadius: 27,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center'
  },
  //CONTAINER DETAIL MOVIE CENTER
  containerDetail: {
    width: '100%',
    paddingHorizontal: 16,
    height: 180,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: -80
  },
  imageContainer: {
    width: 120,
    height: 188,
    elevation: 20,
    backgroundColor: 'grey',
    shadowColor: '#E44C6A',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    borderRadius: 7,
  },
  detailMovieContainer: {
    width: '60%',
    height: 180
  },
  titleMovie: {
    color: 'white',
    fontSize: 24,
    fontWeight: '800'
  },
  bottomContainerDetail: {
    position: 'absolute',
    bottom: 8,
    width: '100%'
  },
  raitingContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  starsContainer: {
    width: 110,
    justifyContent: 'space-around',
    marginLeft: 8,
    flexDirection: 'row'
  },
  // TOP OF HEADER
  topHeaderContainer: {
    width: '100%',
    paddingHorizontal: 16,
    height: 50,
    flexDirection: 'row',
    position: 'absolute',
    top: 32,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  goBackContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  backText: {
    fontSize: 20,
    color: "white",
    fontWeight: '600'
  },
  button: {
    backgroundColor: 'black',
    padding: 8,
    alignItems: 'center',
  },
  textButton: {
    color: 'white',
    textTransform: 'uppercase',
  }
});
export default MovieDetail
