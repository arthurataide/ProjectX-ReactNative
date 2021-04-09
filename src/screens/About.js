import React, {useState, useLayoutEffect, useEffect} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import {Linking} from 'react-native'
export const IMAGENAME = require('../assets/profile.jpg'); 
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
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
    born: "Brazil",
    email: "arthurreisataide@gmail.com",
    cellphone: "647-807-2692",
    chat1: "I'm passionate about sports since I was a little chid. We used to play soccer, volleyball at school. Good times !!!",
    chat2: "I have been in a very close contact with technology since I got my first computer. With 10 years old, I started take out some parts of my computer, by curiosity. It was fun...",
    chat3: "Thank you for the oportunity, I hope you like the project and the design. Designs when clearer, looks nicer to look... "
  }

  return (
    <View style={styles.container}>
      <ScrollView style={{paddingVertical: 30}}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={IMAGENAME}></Image>
        </View>
        <View style={styles.detailsContainer}>
          <View style={{flex: 1, marginTop: 20}}>
            <Text style={styles.title}>{info.name}</Text>
            <View style={{flexDirection: 'row',justifyContent:'center'}}> 
              <Icon name={"location-pin"} size={15} color={theme.COLORS.PRIMARY}/>
              <Text>{info.born}</Text>
            </View>
            <View style={styles.chat}>
              <Text style={styles.chatText}>" {info.chat2} "</Text>
            </View>
            <View style={styles.chat}>
              <Text style={styles.chatText}>" {info.chat1} "</Text>
            </View>
            <View style={styles.chat}>
              <Text style={styles.chatText}>" {info.chat3} "</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={{position: 'absolute', bottom: 10, left: 0, right: 0, justifyContent: 'center'}}> 
          <TouchableOpacity style={styles.callBtn} onPress={() => Linking.openURL(`tel:${info.cellphone}`)}>
            <FontAwesome5 name={"phone-alt"} size={20} color={theme.COLORS.WHITE}/>
            <Text style={{color: 'white', fontSize: 17, marginLeft: 10}}>{info.cellphone}</Text>
          </TouchableOpacity>
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
    chat: {
      marginTop: 20,
      marginHorizontal: 25,
      padding: 10,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: theme.COLORS.TITLE,
      backgroundColor: theme.COLORS.LIGHTGRAY,
    },
    chatText: {
      fontStyle: 'italic',
      fontSize: 15
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
      color: theme.COLORS.BLACK
    },
    callBtn: {
      flexDirection: 'row',
      justifyContent: 'center',
      paddingVertical: 15,
      paddingHorizontal: 30,
      marginHorizontal: 60,
      borderRadius: 10,
      backgroundColor: theme.COLORS.PRIMARY
    }
})