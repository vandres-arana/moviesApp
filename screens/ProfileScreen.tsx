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
    movies: [string];
}
export class ProfileScreen extends Component<ProfileScreenProps> {
    moviesTest = ["https://i.pinimg.com/474x/4a/a7/09/4aa709fb827464c325ee3c63f07b8a6c.jpg",
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
            <View style={{ flex: 1, marginTop: Constants.statusBarHeight, backgroundColor: "#F8F8F8" }}>
                <StatusBar style="dark" />
                <View style={{ flex: 3, backgroundColor: 'red' }}>
                    <View style={{
                        flex: 1, backgroundColor: 'blue', flexDirection: 'row', justifyContent: 'space-between'
                        , paddingHorizontal: 16, alignItems: 'center'
                    }}>
                        <Text style={{ fontSize: 24 }}>Profile</Text>

                        <Ionicons name="settings" size={30} color="black" />

                    </View>
                    <View style={{ flex: 2, backgroundColor: 'green', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ width: 110, height: 110, backgroundColor: 'pink', borderRadius: 50 }}>
                            <Image style={{ height: 110, width: 110, borderRadius: 50 }}
                                resizeMode='contain'
                                source={{
                                    uri: image,
                                }}
                            />
                        </View>
                    </View>
                    <View style={{ flex: 1, backgroundColor: 'grey', justifyContent: 'center' }}>
                        <Text style={{ textAlign: 'center', fontSize: 24 }}>
                            {name}
                        </Text>
                    </View>
                </View>
                <View style={{ flex: 1, backgroundColor: '#F8F8F8', padding: 8, borderRadius: 10, flexDirection: 'row' }}>
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
                <View style={{ flex: 4 }}>
                    <ScrollView style={{ flex: 1 }}>
                        <View style={{ width: '100%', height: '100%', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
                            {this.moviesTest.map((movie) =>
                                <View style={{
                                    width: 75, height: 119, backgroundColor: 'green', margin: 8, borderRadius: 5, elevation: 16,
                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 16,
                                    },
                                    shadowOpacity: 0.45,
                                    shadowRadius: 10
                                }}>
                                    <Image
                                        style={{ width: "100%", height: "100%", borderRadius: 5 }}
                                        source={{
                                            uri: movie,
                                        }}
                                    />
                                </View>
                            )}


                        </View>
                    </ScrollView>
                </View>


                <View style={{ flex: 1, backgroundColor: 'yellow' }}>

                </View>

            </View>
        )

    }
}