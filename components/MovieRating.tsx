import React, { Component } from 'react'
import { Text, StyleSheet, Button } from 'react-native'

type MovieRatingProps = {
  imdbRating: number;
  tomatometer: number;

  onChangeRating: () => void;
}

export default class MovieRating extends Component<MovieRatingProps> {
  render() {
    const {
      imdbRating,
      tomatometer,
    } = this.props;

    return (
      <>
        <Text style={styles.rating}>
          IMDB: {imdbRating.toFixed(2)}
        </Text>

        <Text style={styles.rating}>
          Rotten Tomatoes: {tomatometer}%
        </Text>

        <Button title="+Rating" onPress={this.props.onChangeRating}  />
      </>
    )
  }
}

const styles = StyleSheet.create({
  rating: {
    color: 'white',
  },
})
