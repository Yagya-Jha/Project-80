import * as React from 'react';
import{Text, View, Alert, StyleSheet, SafeAreaView, Platform, StatusBar, TouchableOpacity, ImageBackground, Image, Linking} from 'react-native';
import axios from 'axios';

export default class DailyPic extends React.Component{
    constructor(){
        super();
        this.state = {apod: ''};
    }
    getApod = ()=>{
        axios.get('https://api.nasa.gov/neo/rest/v1/feed?api_key=nUaqLeBKEXbOU0SEX06khyhgS53QhO1LapOzpZ45').then(
            response => {
                this.setState({apod: response.data});
                console.log(this.state.apod.title);
            }
        )
        .catch(error =>{
            Alert.alret(error.message);
        })

    }
    componentDidMount(){
        this.getApod();
    }
    render(){
        return(
            <View style = {styles.container}>
                <SafeAreaView style = {styles.safeview} />
                    <ImageBackground source = {require('../assets/stars.gif')} style = {styles.bgImg}>
                        <Text style = {styles.tittle}>Astronomy Picture of the Day</Text>
                        <Text style = {styles.options}>{this.state.apod.title}</Text>
                        <TouchableOpacity style = {styles.navButton} onPress = {()=>Linking.openURL(this.state.apod.url).catch(err=>{"Couldn't Load The Page", err})}>
                            <View style = {styles.iconContainer}>
                                <Image source = {require('../assets/play-video.png')} style = {{width: 50, height: 50}} />
                            </View>
                        </TouchableOpacity>
                        <Text style = {styles.explanationtext}>{this.state.apod.explanation}</Text>
                    </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      marginTop: 20,
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      
    },
    tittle: {
        marginTop: -25,
        justifyContent:"center",
        alignSelf:"center",
        color:"white",
        fontSize: 35,
        fontWeight: "bold"
    },
    options: {
        paddingLeft: 20,
        fontSize: 25,
        fontWeight:"bold",
        color: 'rgba(224, 6, 133, 1)'
    },
    safeview: {
        marginTop: Platform.OS==="android"? StatusBar.currentHeight : 0,
    },
    navbutton: {
        flex: 0.25,
        marginLeft:50,
        marginRight: 50,
        marginTop: 50,
        borderRadius: 60,
        backgroundColor: 'white',
        width: 300
    },
    bgImg: {
        flex: 1.25,
        resizeMode: 'cover',
    },
    explanationtext: {
        paddingLeft: 25,
        color: 'red',
        fontSize: 18,
    },
    logo: {
        position:"absolute",
        height: 90,
        width: 90,
        resizeMode: "contain",
        right: -20,
        bottom: 10,
    },
    iconContainer:{
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: "center",
    },
  });