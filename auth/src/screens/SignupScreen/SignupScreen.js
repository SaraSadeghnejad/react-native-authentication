import { View,  Image, StyleSheet, useWindowDimensions, ScrollView, Text } from 'react-native';
import React, { useState } from 'react';
import Logo from '../../../assets/images/images.jpg'
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButton from '../../components/SocialSignInButtons/SocialSignInButton';
const SignupScreen = () => {
    const height = useWindowDimensions();
    const [userName,setUserName] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [email,setEmail] = useState('');
    const onRegisterPressed =()=>{
        console.warn("pressed")
    }
    const onSignInPressed =()=>{
        console.warn("pressed")
    }
    const onTermsOfUsePressed =()=>{
        console.warn("onTermsOfUsePressed")
    }
    const onPrivacyPressed =()=>{
        console.warn("onTermsOfUsePressed")
    }
  return (
  <ScrollView showsVerticalScrollIndicator={false} >
    <View style={styles.root} >
    <Text style={styles.title}>Create an account</Text>
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
       placeholder="email"
       value={email}
       setValue={setEmail}
       secureTextEntry={false}
      />
     <CustomInput
       placeholder="password"
       value={password}
       setValue={setPassword}
       secureTextEntry={true}
      />
       <CustomInput
       placeholder="confirm password"
       value={confirmPassword}
       setValue={setConfirmPassword}
       secureTextEntry={true}
      />
      <CustomButton text="Sign In" 
       onPress={onRegisterPressed}
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