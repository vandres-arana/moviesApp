import React, { Component } from 'react';
import { Text, View } from 'react-native';

type MovieDetailProps = {
  rating: number;
  peopleWatching: number;
}

export class MovieDetail extends Component<MovieDetailProps> {
  title = 'Justice League';
  description = `Thousands of years ago, Steppenwolf and his legions of Parademons had attempted to take over the Earth using the combined energies of the three Mother Boxes. The attempt was foiled by a unified alliance including the Olympian Gods, Amazons, Atlanteans, humanity, and extraterrestrial beings.[N 3] After Steppenwolf's army was repelled, the Mother Boxes were separated and hidden in different locations. In the present, humanity is still in mourning two years after Superman's death, which triggered the Mother Boxes' reactivation and Steppenwolf's return to Earth. Steppenwolf aims to regain favor with his master Darkseid by gathering the boxes to form "The Unity", which will destroy Earth's ecology and terraform it in the image of Steppenwolf's homeworld.`
  rating = 9.8;

  constructor(props: MovieDetailProps) {
    console.log('Movie Detail', props);
    super(props);
  }

  render() {
    const {
      rating,
      peopleWatching,
    } = this.props;

    return (
      <View>
        <Text>
          {this.title}
        </Text>

        <Text>
          {rating}
        </Text>

        <Text>
          {peopleWatching} People Watching
        </Text>

        <Text numberOfLines={3}>
          {this.description}
        </Text>
      </View>
    )
  }
}

export default MovieDetail
