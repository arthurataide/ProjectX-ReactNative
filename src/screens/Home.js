import React, {useState, useLayoutEffect, useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import theme from '../helpers/theme';


export default function App({navigation}) {
  
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Home',
    })
  }, [navigation]);

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Geography</Text>
        <Image style={styles.img} source={require('../assets/Geography.png')}></Image>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Screen1')}>
          <Text style={styles.btnText}>Start</Text>
        </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
    container:{
      flex: 1,
      justifyContent: 'center',
      alignContent:'center',
      backgroundColor: theme.COLORS.WHITE,
    },
    title: {
      fontSize: 35,
      fontWeight: '700',
      alignSelf: 'center',
      color: theme.COLORS.PRIMARY,
    },
    img: {
      marginVertical: 10,
      height: 250,
      width: 250,
      alignSelf: 'center'
    },  
    btn: {
      justifyContent: 'center',
      marginHorizontal: 100,
      marginVertical: 20,
      borderWidth: 1,
      borderRadius: 7,
      borderColor: theme.COLORS.PRIMARY
    },
    btnText: {
      fontSize: 17,
      color: theme.COLORS.TITLE,
      padding: 12,
      alignSelf: 'center',
    },
})