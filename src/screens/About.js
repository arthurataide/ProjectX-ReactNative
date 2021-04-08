import React, {useState, useLayoutEffect, useEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import { color } from 'react-native-reanimated';
export const IMAGENAME = require('../assets/profile.jpg'); 
import theme from '../helpers/theme';

export default function App({navigation}) {

  useLayoutEffect(() => {
    //checkAuth();
    navigation.setOptions({
      title: 'About',
    })
  }, [navigation]);

  const info = {
    name: "Arthur Ataide",
    description: "Blabla"
  }

  return (
    <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={IMAGENAME}></Image>
        </View>
        <View style={styles.detailsContainer}>
          <View style={{flex: 1}}>
            <Text style={styles.title}>{info.name}</Text>
          </View>
        </View>
    </View>
  );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignContent:'center',
        backgroundColor: theme.COLORS.WHITE,
    },
    imageContainer: {
      flex:1,
      alignItems:'center',
      justifyContent: 'center',
    },
    image: {
      height: 180,
      width: 180,
      borderRadius: 100,
    },
    detailsContainer: {
      flex: 2,
    },
    title: {
      fontWeight: '700',
      fontSize: 22,
      textAlign: 'center',
      color: theme.COLORS.TITLE
    }
})