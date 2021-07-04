import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import MovieDetail from './screens/MovieDetail';
import { ProfileScreen } from './screens/ProfileScreen';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar style="light" />
        {/* <MovieDetail
          rating={9.2}
          peopleWatching={5200}
          urlImageBanner={'https://i.ytimg.com/vi/8GltZA7F7-M/maxresdefault.jpg'}
          urlImageProfile={'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/cover_290x414/public/media/image/2019/02/rMEfTRA5BEbuVweTF1cQZiT7WdZ.jpg?itok=gfuWJ2F5'}
          genders= {"Action, Adventure"}
          title = {'Space Jam: A New Legacy (2021)'}
          description = {`Space Jam: A New Legacy (also known as Space Jam 2) is an upcoming American live-action/animated sports comedy film directed by Malcolm D. Lee, serving as a standalone sequel to Space Jam (1996). It will mark the first theatrically-released film to feature the Looney Tunes characters since Looney Tunes: Back in Action (2003), and like the previous hybrid films, it will be a combination of live-action, traditional hand-drawn animation, and 3D CGI effects. The film stars basketball player LeBron James as a fictionalized version of himself along with Don Cheadle, Khris Davis, and Sonequa Martin-Green in live-action roles, while Jeff Bergman, Eric Bauza, and Zendaya headline the Looney Tunes voice cast.`}
        /> */}
        <ProfileScreen
        image = "https://pbs.twimg.com/profile_images/1299903707337969664/YQP8aByN_400x400.jpg"
        name = "Josue Lemus"
        likes = {23}
        watching = {100}
        comments = {320}
        movies = {['HOLA']}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
