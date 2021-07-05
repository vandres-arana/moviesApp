import React, { Component } from 'react';
import { Text, View, Image, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';
type UserRaitingProps = {
    raiting: number;
    type: string;
}
export class UserRaiting extends Component<UserRaitingProps> {
    constructor(props: UserRaitingProps) {
        super(props);
    }
    render() {
        const {
            raiting,
            type
        } = this.props;
        return (
            <View style={styles.container }>
                <Text style={styles.topText}>{raiting}</Text>
                <Text style={styles.bottomText}>{type}</Text>
            </View>
        )

    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        elevation: 7,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 8,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3
    },
    topText:{ 
        fontSize: 30, 
        color: "#222222" 
    },
    bottomText:{
        fontSize: 15, 
        color: "#999999"
    }
})