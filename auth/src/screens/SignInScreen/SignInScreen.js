
import { TextInput,View,  Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import React, { useState } from 'react';
import Logo from '../../../assets/images/images.jpg'
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from "@react-navigation/native"
import SocialSignInButton from '../../components/SocialSignInButtons/SocialSignInButton';
import { useForm } from 'react-hook-form';
const SignInScreen = () => {
  const navigation = useNavigation(); 
  const height = useWindowDimensions();
    // const [userName,setUserName] = useState('');
    // const [password,setPassword] = useState('');
    const onSignInPressed =()=>{
      navigation.navigate("Home")
      }
    const onForgotPasswordPressed =()=>{
        navigation.navigate("ForgotPassword")
      }
    const onSignUpPressed =()=>{
      navigation.navigate("Signup")
    }
    const {handlesubmit,control,formState:{errors}} = useForm()
  return (
  <ScrollView showsVerticalScrollIndicator={false} >
    <View style={styles.root} >
    
     <Image source={Logo}
      style={[styles.logo,{height:height*0.3}]} 
      resizeMode='contain'/>
     <CustomInput
       name="username"
       placeholder="user name"
       control={control}
       rules={{required:"Username is required"}}
      />
     <CustomInput
       name="password"
       placeholder="password"
       control={control}
       secureTextEntry={true}
       rules={{required:"Password is required",
       minLength:{value:3,
        message:"Password should be minimum 3 characters long"
       }, 
       }}
      />
      
      <CustomButton text="Sign In" 
       onPress={handlesubmit(onSignInPressed)}
       />
      <CustomButton 
      text="Forgot Password" 
      onPress={onForgotPasswordPressed}
       type="TERCERY" />
       <SocialSignInButton />
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