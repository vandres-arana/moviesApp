import React, { Component } from 'react';
import { Text, View, Image, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
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
            <View style={{flex:1,marginTop: Constants.statusBarHeight, backgroundColor:"#F8F8F8"}}>
                <StatusBar style="dark" />
                <View style={{flex:3,backgroundColor:'red'}}>
                    <View style={{flex:1, backgroundColor:'blue', flexDirection:'row', justifyContent:'space-between'
                ,paddingHorizontal:16, alignItems:'center'}}>
                        <Text style={{fontSize:24}}>Profile</Text>
                        
                        <Ionicons name="settings" size={30} color="black" />
                           
                    </View>
                    <View style={{flex:2, backgroundColor:'green',justifyContent:'center',alignItems:'center'}}>
                        <View style={{width:100,height:100, backgroundColor:'pink', borderRadius:50}}>
                        <Image style={{height:100,width:100, borderRadius:50}}
                            resizeMode='contain'
                            source={{
                                uri: image,
                            }}
                            />
                        </View>
                    </View>
                    <View style={{flex:1, backgroundColor:'grey',justifyContent:'center'}}>
                        <Text style={{textAlign:'center',fontSize:24}}>
                        {name}
                        </Text>
                    </View>
                </View>
                <View style={{flex:1, backgroundColor:'#F8F8F8',padding:8,borderRadius:10}}>
                        <View style={{backgroundColor:"#FFFFFF",elevation:50, height:88, width:106, justifyContent:'center',alignItems:'center'}}>
                            <Text style={{fontSize:30, color:"#222222"}}>{likes}</Text>
                            <Text style={{fontSize:15, color:"#999999"}}>Like</Text>
                        </View>
                </View>
                <View style={{flex:4,backgroundColor:'red'}}>

                </View>
                <View style={{flex:1, backgroundColor:'yellow'}}>

                </View>
                
            </View>
        )

    }
}