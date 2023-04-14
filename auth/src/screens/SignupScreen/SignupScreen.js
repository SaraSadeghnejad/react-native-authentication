import { View,  Image, StyleSheet, useWindowDimensions, ScrollView, Text } from 'react-native';
import React, { useState } from 'react';
import Logo from '../../../assets/images/images.jpg'
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButton from '../../components/SocialSignInButtons/SocialSignInButton';
import {useNavigation} from "@react-navigation/native"

const SignupScreen = () => {
const navigation = useNavigation();
    const height = useWindowDimensions();
   const {handleSubmit,control,watch}=useForm({defaultValue:{
    username:"Default userName",
   }});
     const pwd= watch("password")
    const onRegisterPressed =()=>{
        console.warn("pressed")
        navigation.navigate("ConfirmEmail")
    }
    const onSignInPressed =()=>{
        console.warn("pressed")
        navigation.navigate("SignIn")
    }
    const onTermsOfUsePressed =()=>{
        console.warn("onTermsOfUsePressed")
    }
    const onPrivacyPressed =()=>{
        console.warn("onTermsOfUsePressed")
    }
    const Email_regex="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/."
    
    return (
  <ScrollView showsVerticalScrollIndicator={false} >
    <View style={styles.root} >
    <Text style={styles.title}>Create an account</Text>
     <Image source={Logo}
      style={[styles.logo,{height:height*0.3}]} 
      resizeMode='contain'/>
     <CustomInput
       placeholder="username"
       name="username"
       control={control}
       rules={{required:"Username is required",
       minLength:{
        value:3,
       message:"Username should be at least 3 characters"
       },
       maxLength:{
        value:26,
        message:"Username should be max 26 characters"
       }
       }}
      />
       <CustomInput
       placeholder="email"
       name="email"
       control={control}
       rules={{required:"Email is required",
       pattern:{value: Email_regex,message:"Email is invalid"}
       }}
      />
     <CustomInput
       placeholder="password"
       control={control}
       rules={{
        required:"Password is required",
       minLength:{
        value:3,
       message:"Password should be at least 3 characters"
       },
      }}
       secureTextEntry={true}
      />
       <CustomInput
       placeholder="confirm password"
       name="password-repeat"
       control={control}
       rules={{
        validate: value => value === pwd || "password do not match",
       }}
       secureTextEntry={true}
      />
      <CustomButton text="Sign In" 
       onPress={handleSubmit(onRegisterPressed)}
       />
       <Text>
        By registering, you confirm that you accept our new password
        <Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of Use</Text>
        and <Text style={styles.link} onPress={onPrivacyPressed}>Privacy Policy</Text>
       </Text>

        <SocialSignInButton />
           <CustomButton 
      text="You have account? Sign in" 
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
  


export default SignupScreen