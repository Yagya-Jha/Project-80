import * as React from 'react';
import{Text, View, StyleSheet, TextInput, SafeAreaView, Platform, StatusBar, KeyboardAvoidingView} from 'react-native';
import { WebView } from 'react-native-webview';

export default class StarMap extends React.Component{
    constructor(){
        super();
        this.state = {latitude: 0, longitude: 0,};
    }
    render(){
        const path = 'https://virtualsky.lco.global/embed/index.html?longitude='+this.state.longitude+'&latitude='+this.state.latitude+'&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true&projection=stereo&showdate=false&showposition=false';

        return(
            <View style = {styles.container}>
                 <SafeAreaView  style = {styles.safeview}/>
                    <Text style = {styles.titleText}>Star Map</Text>
                    <View style = {styles.inputContainer}>
                        <KeyboardAvoidingView>
                        <TextInput
                        style = {styles.input}
                        placeholder = "Enter Your Latitude"
                        placeholderTextColor = 'white'
                        onChangeText = {(text)=>{
                            this.setState({latitude: text})
                        }}>
                        </TextInput>

                        <TextInput
                        style = {styles.input}
                        placeholder = "Enter Your Longitude"
                        placeholderTextColor = 'white'
                        onChangeText = {(text)=>{
                            this.setState({longitude: text})
                        }}>
                        </TextInput>
                        </KeyboardAvoidingView>
                    </View>
                    <View style = {styles.startmap}>
                        <WebView 
                        scalesPageToFit = {true}
                        source = {{uri: path}}
                        style = {{marginTop: 20, marginBottom: 20}}
                        />
                    </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems:"center",
        backgroundColor:"black"
    },
    titleText:{
        color: "white",
    },
    inputContainer:{
        backgroundColor:'#15193c',
        width: '100%',
    },
    input:{
        height: 40,
        borderColor:'gray',
        borderWidth: 1,
    },
    safeview: {
        marginTop: Platform.OS==="android"? StatusBar.currentHeight : 0,
    },
    startmap:{
        flex: 0.6,
    }
});