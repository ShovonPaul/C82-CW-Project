import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Dimensions
} from "react-native";

import * as Font from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

SplashScreen.preventAutoHideAsync();

let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};

export default class StoryCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (this.state.fontsLoaded) {
      SplashScreen.hideAsync();
      return (
        <View style={styles.container}>
<View style = {styles.cardContainer}>
  <Image source = {require("../assets/story_image_1.png")} style = {styles.storyImage}>

  </Image>
  <View style = {styles.titleContainer} >
<Text style = {styles.storyTitleText}>
  {this.props.story.title}
</Text>
<Text style = {styles.storyAuthorText}>
  {this.props.story.author}
</Text>
<Text style = {styles.descriptionText}>
  {this.props.story.description}
</Text>
  </View>
  <View style = {styles.actionContainer}>
<View style = {styles.likeButton}>
  <Ionicons name = {"heart"} size= {RFValue(30)} color = {"WHITE"}/>
  <Text style = {style.likeText}>
    12k
  </Text>
</View>
  </View>
</View>
        </View>
        
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  cardContainer:{
    margin:RFValue(13),
    backgroundColor:"#2f345d",
    borderRadius:RFValue(20)


  },
  storyImage:{
    resizeMode:"Contain"  ,
    width:"95%",
    alignSelf:"CENTER",
    height:RFValue(250),
  
  },
  titleContainer:{
    paddingLeft:RFValue(20),
    fontFamily:"Bubblegum-Sans",
    color:"white",

  },
  storyTitleText:{
fontSize:RFValue(18),
fontFamily:"Bubblegum-Sans",
color:"WHITE"
},
storyAuthorText:{
  fontSize:RFValue(18),
fontFamily:"Bubblegum-Sans",
color:"WHITE"
},
descriptionText:{
  fontSize:RFValue(13),
fontFamily:"Bubblegum-Sans",
color:"WHITE",
paddingTop:RFValue(10)
},
likeButton:{
  widtyh:RFValue(160),
  height:RFValue(40),
  justifyContent:"CENTER",
  alignItems:"CENTER",
  
}
  

});
