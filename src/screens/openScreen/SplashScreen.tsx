import { StyleSheet, Text, View,Image } from 'react-native'
import React,{useState} from 'react'

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/splash/Logo.png')} />
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1c1c1c',
      },
     
})