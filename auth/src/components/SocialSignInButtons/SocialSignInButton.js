import React from 'react'
import CustomButton from '../CustomButton/CustomButton'

const SocialSignInButton = () => {
    const onSignInFacebook =()=>{
        console.warn("pressed")
    }
    const onSignInGoogle =()=>{
        console.warn("pressed")
    } 
    const onSignInApple =()=>{
        console.warn("pressed")
    }
 
    return (
    <>
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
    </>
  )
}

export default SocialSignInButton