import React from 'react';
import { View, Text, TextInput } from 'react-native'
import { Controller } from 'react-hook-form/dist/controller';

const CustomInput = ({placeholder,control,rules,name,secureTextEntry}) => {
  return (
        <Controller
         control={control}
         name={name}
         rules={rules}
        render={({field:{value,onChange,onBlur},fieldState:{error}})=>(
         <>
          <View  style={[styles.container,{borderColor:error?"red":"#e8e8e8"}]}>
        <TextInput 
         onBlur={onBlur}
         onChangeText={onChange} 
         value={value}
         placeholder={placeholder} 
         style={[styles.input,{}]}
         secureTextEntry={secureTextEntry}
         /></View>
         {error&&(
         <Text style={styles.error}>{error.message||'error'}</Text>)}
         </>
         )} /> 
  )
}
const styles = StyleSheet.create({
  container:{
    width:'100%',
    backgroundColor:"white",
    borderColor:"#e8e8e8",
    borderWidth:1,
    borderRadius:5,
    paddingHorizontal:10,
    marginVertical:5
  },
  input:{},
  error:{
    color:"red",
    alignSelf:"stretch"
  }
})
export default CustomInput