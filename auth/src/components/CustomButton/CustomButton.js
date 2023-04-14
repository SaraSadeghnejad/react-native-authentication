import {  Text, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({onPress,text,type,bgColor,fgColor}) => {
  return (
    <Pressable onPress={onPress} 
    style={[styles.container,styles[`container_${type}`,
     bgColor ? {backgroundColor:bgColor}:{}
    ]]}>
      <Text style={[styles.text,styles[`text_${type}`,
      fgColor ? {color:fgColor}:{}
      ]]}>{text}</Text>
    </Pressable>
  )
}
const styles = StyleSheet.create({
    container: {
        width: "100%",
        padding:15,
        marginVertical:25,
        alignItems: "center",
        borderRadius:5,
    },
    container_PRIMARY:{
        backgroundColor:"#3B71F3",
    },
    container_SECONDARY:{
      borderColor:"#3B71F3",
      borderWidth:2,
    },
    container_TERCERY:{

    },
    text_PRIMARY:{

    },
    text_TERCERY:{
       color:"gray"
    },
    text_SECONDARY:{
   color:"#3B71F3",
    },
    text:{
        fontWeight:"bold",
        color: "white"
    }
})

export default CustomButton