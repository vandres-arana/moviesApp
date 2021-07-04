import React, { Component } from 'react';
import { View } from 'react-native';
import Constants from 'expo-constants';
type ProfileScreenProps = {
    image: string;
    name: string;
    likes: number;
    watching: number;
    comments: number;
    movies: [string];
}
export class ProfileScreen extends Component<ProfileScreenProps> {
    constructor(props: ProfileScreenProps) {
        super(props);
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
            <View style={{ flex: 1, marginTop: Constants.statusBarHeight }}>
                

            </View>
        )

    }
}