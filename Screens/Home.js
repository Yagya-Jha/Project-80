import * as React from 'react';
import{Text, View, StyleSheet, SafeAreaView, Platform, StatusBar, TouchableOpacity, ImageBackground, Image} from 'react-native';

export default class Home extends React.Component{
    render(){
        return(
            <View style = {styles.container}>
                <SafeAreaView  style = {styles.safeview}/>
                    <ImageBackground source = {require("../assets/space.gif")} style = {styles.bgImg}>
                        <Image source = {require('../assets/main-icon.png')} style = {styles.icon}/>
                        <Text style = {styles.tittle}>Stellar App</Text>

                        <TouchableOpacity
                         style = {styles.navbutton}
                         onPress = {()=>this.props.navigation.navigate("SpaceCrafts")}>
                            <Text style = {styles.options}>Space Crafts</Text>
                            <Text style = {styles.knowmore}>{"Know More--->"}</Text>
                            <Image source = {require("../assets/space_crafts.png")} style = {styles.logo}></Image>
                        </TouchableOpacity>

                        <TouchableOpacity 
                         style = {styles.navbutton}
                         onPress = {()=>this.props.navigation.navigate("DailyPic")}>
                            <Text style = {styles.options}>Daily Pictures</Text>
                            <Text style = {styles.knowmore}>{"Know More--->"}</Text>
                            <Image source = {require("../assets/daily_pictures.png")} style = {styles.logo}></Image>
                        </TouchableOpacity>

                        <TouchableOpacity
                         style = {styles.navbutton}
                         onPress = {()=>this.props.navigation.navigate("StarMap")}>
                            <Text style = {styles.options}>Star Map</Text>
                            <Text style = {styles.knowmore}>{"Know More--->"}</Text>
                            <Image source = {require("../assets/star_map.png")} style = {styles.logo}></Image>
                        </TouchableOpacity>
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
    knowmore: {
        paddingLeft: 25,
        color: 'red',
        fontSize: 12,
    },
    logo: {
        position:"absolute",
        height: 90,
        width: 90,
        resizeMode: "contain",
        right: -20,
        bottom: 10,
    },
    icon:{
        alignSelf: "center",
        height: 300,
        width: 300,
        resizeMode: "contain",
    },
  });
  