import { View,  Image, StyleSheet, useWindowDimensions, ScrollView, Text } from 'react-native';
import React, { useState } from 'react';
import Logo from '../../../assets/images/images.jpg'
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';

const ForgotPasswordScreen = () => {
    const [userName,setUserName] = useState('');
    const onSendPressed =()=>{
        console.warn("pressed")
    }

  const onSignInPressed =()=>{
    console.warn("pressed")
} 
  return (
  <ScrollView showsVerticalScrollIndicator={false} >
    <View style={styles.root} >
    <Text style={styles.title}>Reset your password</Text>
     <Image source={Logo}
      style={[styles.logo,{height:height*0.3}]} 
      resizeMode='contain'/>
     <CustomInput
       placeholder="Enter your confirmation code"
       value={userName}
       setValue={setUserName}
      />

      <CustomButton text="Send" 
       onPress={onSendPressed}
       />
      
           <CustomButton 
      text="Back To Sign in" 
      onPress={onSignInPressed}
       type="TERCERY" />
         </View>
    </ScrollView>
  
  );
};
  const styles = StyleSheet.create({
    root:{
        alignItems: 'center',
        padding: 20
    },
    logo: {
      width:'70%',
      maxWidth:300,
      height:100
    },
    title:{
        fontSize:'24px',
        fontWeight:"bold",
        color:"#051C60",
        margin:10,
    }
  });
  


export default ForgotPasswordScreen