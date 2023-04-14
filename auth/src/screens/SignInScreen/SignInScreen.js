import { View,  Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import React, { useState } from 'react';
import Logo from '../../../assets/images/images.jpg'
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
const SignInScreen = () => {
    const height = useWindowDimensions();
    const [userName,setUserName] = useState('');
    const [password,setPassword] = useState('');
    const onSignInPressed =()=>{
        console.warn("pressed")
    }
    const onSignInFacebook =()=>{
        console.warn("pressed")
    }
    const onSignInGoogle =()=>{
        console.warn("pressed")
    } 
    const onSignInApple =()=>{
        console.warn("pressed")
    }

    const onForgotPasswordPressed =()=>{
        console.warn("pressed")
    }
    const onSignUpPressed =()=>{
        console.warn("pressed")
    }
  return (
  <ScrollView showsVerticalScrollIndicator={false} >
    <View style={styles.root} >
    
     <Image source={Logo}
      style={[styles.logo,{height:height*0.3}]} 
      resizeMode='contain'/>
     <CustomInput
       placeholder="user name"
       value={userName}
       setValue={setUserName}
       secureTextEntry={false}
      />
     <CustomInput
       placeholder="password"
       value={password}
       setValue={setPassword}
       secureTextEntry={true}
      />
      <CustomButton text="Sign In" 
       onPress={onSignInPressed}
       />
      <CustomButton 
      text="Forgot Password" 
      onPress={onForgotPasswordPressed}
       type="TERCERY" />
      <CustomButton
       text="Sign In With Facebook"
        onPress={onSignInFacebook}
        bgColor="#E7EAF4"
       fgColor="#4765A9"
         /> 
      <CustomButton text="Sign In With Google"
       onPress={onSignInGoogle}
       bgColor="#FAE9EA"
       fgColor="#DD4D44"
        /> 
      <CustomButton text="Sign In With Apple" 
      onPress={onSignInApple} 
      bgColor="#e3e3e3"
       fgColor="#363636"
      />
           <CustomButton 
      text="You dont have account? create one" 
      onPress={onSignUpPressed}
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
  });
  


export default SignInScreen