import React, {useState, useLayoutEffect, useEffect} from 'react';
import {StyleSheet, Text, FlatList, TouchableOpacity, View} from 'react-native';
import theme from '../helpers/theme';
import {getData} from '../Model/API';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function App({route, navigation}) {

  const [geograficData, setGeograficData] = useState([]);
  const [countryName, setCountryName] = useState('')

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Provinces/States",
    })
  }, [navigation]);
  
  useEffect(() => {
    let {data} = route.params;
    setCountryName(data)
    fetch(data)
  }, [route.params])

  const fetch = async (name) => {
    getData('states/'+ name).then((data) => {
      if(data){
        //console.log(data)
        setGeograficData(data)
      }
    })
  }

  const render = (item) => {       
    return (
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Screen3', {state: item.state_name, country: countryName})}>
            <Text style={styles.cardText}>
              {item.state_name}
            </Text>
            <View style={[styles.cardContent,{position: "absolute", right: 10}]} >
                <Icon name={"chevron-right"} size={15} color={theme.COLORS.PRIMARY}/>
            </View>
        </TouchableOpacity>
    )
}
  
  return (
    <View style={styles.container}>
        <Text style={styles.title} >{countryName}</Text>
        <FlatList
            showsVerticalScrollIndicator={false}
            data={geograficData}
            renderItem={({ item }) => render(item)}
            keyExtractor={(x) => `${x.state_name}`}
        />
    </View>
  );
}
const styles = StyleSheet.create({
    container:{
      flex: 1,
      paddingVertical: 5,
      alignContent:'center',
      backgroundColor: theme.COLORS.WHITE,
    },
    card: {
      flex: 1,
      flexDirection: 'row',
      alignItems: "center",
      marginHorizontal: 5,
      marginVertical: 3,
      borderColor: theme.COLORS.LIGHTGRAY,
      borderWidth: 1,
      borderRadius: 5,
    },
    cardContent: {
      paddingHorizontal: 10,
      paddingVertical: 15,
    },
    cardText: {
      paddingVertical: 15,
      paddingHorizontal: 10,
      fontSize: 17,
      fontWeight: '500'
    },
    title: {
      margin: 10,
      fontSize: 25,
      fontWeight: '700',
      alignSelf: 'center',
      color: theme.COLORS.PRIMARY,
    },
    btn: {
      justifyContent: 'center',
      marginHorizontal: 150,
      marginVertical: 50,
      borderWidth: 1,
      borderRadius: 7,
      borderColor: theme.COLORS.PRIMARY
    },
    btnText: {
      color: theme.COLORS.TITLE,
      padding: 10,
      alignSelf: 'center',
    },
})