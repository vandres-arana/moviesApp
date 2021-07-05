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
export class ProfileScreen extends Component<ProfileScreenProps> {
    constructor(props: ProfileScreenProps) {
        super(props);
        console.log('Movie Detail', props);
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
                <StatusBar style="dark" />
                {/* Header Flex 3 */}
                <View style={{ flex: 3 }}>
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
                        type="Like"
                    />
                    <UserRaiting
                        raiting={watching}
                        type="Watching"
                    />
                    <UserRaiting
                        raiting={comments}
                        type="Comments"
                    />
                </View>
                {/* Movie list FLEX 4*/}
                <View style={{ flex: 4 }}>
                    <ScrollView style={{ flex: 1 }}>
                        <View style={styles.movieListContainer}>
                            {movies.map((movie) =>
                                <View style={styles.imageMovieContainer}>
                                    <Image
                                        style={styles.imageMovie}
                                        source={{
                                            uri: movie,
                                        }}
                                    />
                                </View>
                            )}
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
    container:{ 
        flex: 1, 
        marginTop: Constants.statusBarHeight, 
        backgroundColor: "#F8F8F8" 
    },
    topHeaderContainer:{
        flex: 1, 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        paddingHorizontal: 16, 
        alignItems: 'center'
    },
    // User image
    imageContainer:{ 
        flex: 2, 
        justifyContent: 'center',
         alignItems: 'center' ,
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
    userImage:{ height: 110, width: 110, borderRadius: 55 },
    // User name
    userNameContainer:{ flex: 1, justifyContent: 'center' },
    userNameText:{ textAlign: 'center', fontSize: 24 },
    // User raitings
    userRaitingContainer:{ 
        flex: 1, 
        padding: 8, 
        borderRadius: 10, 
        flexDirection: 'row' 
    },
    // Movie list
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
        flex: 1,
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
    }
})