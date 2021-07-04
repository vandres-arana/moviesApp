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
            <View style={{ backgroundColor: "#FFFFFF", elevation: 9, flex:1, justifyContent: 'center', 
            alignItems: 'center',marginHorizontal:8,borderRadius:10,
            shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 4,
},
shadowOpacity: 0.32,
shadowRadius: 5.46 }}>
                <Text style={{ fontSize: 30, color: "#222222" }}>{raiting}</Text>
                <Text style={{ fontSize: 15, color: "#999999" }}>{type}</Text>
            </View>
        )

    }
}