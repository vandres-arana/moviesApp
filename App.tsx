import React from 'react';
import { StyleSheet, View } from 'react-native';

import MovieDetail from './MovieDetail';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MovieDetail
          rating={9.2}
          peopleWatching={8200}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
