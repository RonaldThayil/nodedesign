import React, { Component } from 'react';
import { View, Text, SafeAreaView, Image } from 'react-native';
import wp from '../utils/themeUtils'
import {Color} from '../utils/colors'
import Lab from '../component/ui/label/label'
import Label from '../component/ui/label/label';
export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex:1,backgroundColor:Color.LIGHT_GRAY}}>
          <SafeAreaView />
        <Image source={require("../assets/images/logo.jpeg")} 
        style={{height:wp.relativeHeight(30),width:wp.relativeWidth(60),alignSelf:'center',
        resizeMode:'contain',borderWidth:5,borderRadius:15}} />
            
        <Lab xxlarge bold align='center' mt={10} mb={10}> SignUp</Lab>
        <View style={{backgroundColor:'white',marginHorizontal:30,borderRadius:10,flex:2,marginBottom:10}}>
            <Lab > Enter First Name</Lab>


        </View>



      </View>
    );
  }
}
