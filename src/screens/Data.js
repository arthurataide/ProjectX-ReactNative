import React, {useState, useLayoutEffect, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import theme from '../helpers/theme';
import Icon from 'react-native-vector-icons/EvilIcons';
import Storage from "../Model/LocalStorage";

export default function App({navigation}) {

  const [location, setLocation] = useState('')
  const [items, setItems] = useState([])

  useEffect(() => {
    const reload = navigation.addListener("focus", () => {
      getLocation()
      loadSelectedItems()
    });
    return reload;
  },[navigation])

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Result',
    })
  }, [navigation]);

  const getLocation = async () => {
    try {
      let req = await fetch("https://freegeoip.app/json/", {
        method: "GET",
        headers: {
          "Accept": "application/json",
        }
      });
      if(req){
        req.json().then((data) => {
          if(data) {
            //console.log(data)
            setLocation(data)
          }
        });
      }
    } catch(e) {}
  }

  const loadSelectedItems = async () =>{
    Storage.getAllDataForKey('path').then(ret => {
      //console.log("------------------")
      // found data go to then()
      setItems(ret)
      //console.log(ret);
    })
  } 

  const render = (item) => {  
    return (
        <View style={styles.card}>
            <Text style={styles.cardText}>
              {item.country} / {item.state} / {item.city}
            </Text>
        </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.newContainer}>
        <Icon name={"location"} size={100} color={theme.COLORS.PRIMARY} style={styles.icon}/>
        <View style={{flexDirection: 'row', alignSelf:'center', padding: 10, marginTop: 20}}>
          <Text>{location.city}, </Text>
          <Text>{location.region_name}, </Text>
          <Text>{location.country_name}</Text>
        </View>
        <View style={{flexDirection: 'row', alignSelf:'center', padding: 10}}>
          <Text>Latitude: {location.latitude} / </Text>
          <Text>Longitude: {location.longitude}</Text>
        </View>
      </View>
      <Text style={styles.title}>Selected Items</Text>
      <View style={styles.newContainerFlat}>
        <FlatList
            showsVerticalScrollIndicator={false}
            data={items}
            renderItem={({ item }) => render(item)}
            keyExtractor={(x) => `${x.city}`}
        />
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
    newContainer: {
      flex:1,
      padding: 30,
    },
    newContainerFlat: {
      flex: 2,
      padding: 20
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
    icon: {
      alignSelf: 'center'
    }
})