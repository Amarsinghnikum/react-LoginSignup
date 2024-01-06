import React, {useState, useContext} from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Image, Dimensions } from 'react-native';
import { NativeBaseProvider, Icon, Box, AspectRatio } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { Input, Button } from "react-native-elements";
import { useFonts } from 'expo-font';

const App = () => {
    const navigation = useNavigation();

    let [fontsLoaded] = useFonts({
      'Shadow': require('../assets/fonts/ShadowsIntoLight-Regular.ttf'),
      'Kavoon': require('../assets/fonts/Kavoon-Regular.ttf'),
    });
   return (
    <View style={styles.container}>
        <Image 
            style={styles.paint}
            source={require('../assets/paint.png')}
        />
        <View style={{marginTop: -140}}>
            <Text style={styles.kavoonFont}>artbubbl</Text>
            <Text style={styles.shadowFont}>your personal art space</Text>
        </View>
        <Text style={styles.privacy_policy}>See Privacy Policy</Text>
       
        {/* Email Input Field */}
        <View style={styles.buttonStyleX}>
            <View style={styles.emailInput}>
                <Input 
                    style={{textDecorationLine: 'none'}}
                    variant = "outline"
                    placeholder = "Email"
                    _light={{
                        placeholderTextColor: "blueGray.400"
                    }}
                    _dark={{
                        placeholderTextColor: "blueGray.50"
                    }}
                />
            </View>
        </View>

        {/* Password Input Field */}
        <View style={styles.buttonStyleX}>
            <View style={styles.emailInput}>
                <Input
                   variant = "outline"
                   secureTextEntry={true}
                   placeholder="Password"
                   _light={{
                    placeholderTextColor:"blueGray.400",
                   }}
                   _dark={{
                    placeholderTextColor:"blueGray.50",
                   }}
                />
            </View>
        </View>

        <View style={styles.lineStyle}>
            <View>
                <Text style={styles.resetPassword}>
                    Would you like to reset your password
                </Text>
            </View>
        </View>

    <View style={styles.boxStyle}>
        <TouchableOpacity onPress={()=> navigation.navigate('Signup')}>
            <Image 
                style={styles.signup}
                source={require('../assets/signup.png')}
            />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> navigation.navigate('Signin')}>
        <Image 
            style={styles.signin}
            source={require('../assets/signin.png')}
        />
        </TouchableOpacity>
    </View>
</View>
);
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fff',
  },
  LoginText:{
      marginTop:100,
      fontSize:30,
      fontWeight:'bold',
  },
  Middle:{
      alignItems:'center',
      justifyContent:'center',
  },
  text2:{
      flexDirection:'row',
      justifyContent:'center',
      paddingTop:5
  },
  signupText:{
      fontWeight:'bold'
  },
  emailInput:{
      marginTop:10,
      marginRight:5,
  },
  buttonStyle:{
      marginTop:30,
      marginLeft:15,
      marginRight:15
  },
  buttonStyleX:{
      marginLeft:15,
      marginRight:15,
  },
  buttonDesign:{
      backgroundColor:'#026efd'
  },
  lineStyle:{
      flexDirection:'row',
      marginTop:0,
      marginLeft:15,
      marginRight:15,
      alignItems:'center',
  },
  boxStyle:{
      flexDirection:'row',
      marginTop:10,
      marginLeft:15,
      marginRight: 15,
      justifyContent:'space-around',
  },
  resetPassword: {
    width:400, 
    textAlign:'center', 
    fontWeight: 'bold',
    color: '#12B0E8',
  },
  paint: {
    width: 50,
    height: 150, 
    marginLeft: 30,
    marginTop: 50,
  },
  kavoonFont: {
    fontFamily: 'Kavoon', 
    fontSize: 25, 
    marginLeft: 85,
  },
  shadowFont: {
    fontFamily: 'Shadow', 
    fontSize: 30, 
    marginLeft: 80
  },
  privacy_policy: {
    marginLeft: 245, 
    marginTop: 15,
  },
  signup: {
    width: 270, 
    height: 270,
    marginLeft: 250,
  },
  signin: {
    width: 205, 
    height: 160, 
    marginTop: 262,
    marginRight: 300
  },
});