import React, {useState, useLayoutEffect, useEffect} from 'react';
import {StyleSheet, Text, FlatList, TouchableOpacity, View} from 'react-native';
import theme from '../helpers/theme';
import {getData} from '../Model/API';
import Icon from 'react-native-vector-icons/FontAwesome';
import Storage from "../Model/LocalStorage";

export default function App({route, navigation}) {

  const [geograficData, setGeograficData] = useState([]);
  const [countryName, setCountryName] = useState('')
  const [stateName, setStateName] = useState('')

  const [selectedIds, setSelectedIds] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Cities",
    })
  }, [navigation]);
  
  useEffect(() => {
      let {state, country} = route.params;
      setCountryName(country)
      setStateName(state)
      fetch(state)
  }, []);

  const getSelectedItem = (array) => {
    Storage.getIdsForKey('path').then((res) => {
        if(res.length != 0){
            array.map((x) => {
                res.map((r) => {
                    //console.log(r.includes(x.city_name))
                    if(r.includes(x.city_name)){
                        Storage.load({key: 'path', id: r}).then(dat => {
                            loadSelected(dat.id)
                        })
                    }
                })
            })
        }
    })
  }

  const loadSelected = (id) => {
    console.log(id)
    //console.log("Page Loaded - Load Selecte Function")
    var selected = selectedIds;
    // selected = selectedIds.filter(_id => id)
    selected.push(id)
    setSelectedIds(selected)
  }

  const fetch = async (name) => {
    getData('cities/'+ name).then((data) => {
      if(data){
        //console.log(data)
        let newId = 0;
        let tmpArray = [];
        data.forEach(x => {
            let tmp = {
                id: newId,
                city_name: x.city_name
            }
            tmpArray.push(tmp)
            newId++;
        });
        setGeograficData(tmpArray)
        getSelectedItem(tmpArray);
        //console.log(tmpArray)
      }
    })
  }

  const selectCity = (id, name) => {
    var selected = selectedIds;
    if (selectedIds.includes(id)){
        console.log("delete")
        selected = selectedIds.filter(_id => _id !== id)
        Storage.remove({
            key: 'path',
            id: countryName + stateName + name
        })
        //console.log(selected)
    } else{
        
        selected = selectedIds.filter(_id => id)
        selected.push(id)
        Storage.save({
            key: 'path',
            id: countryName + stateName + name,
            data: {
                id: id,
                city: name,
                country: countryName,
                state: stateName,
            },
        });
    }
    setSelectedIds(selected)
    //console.log(selectedItems)
    //console.log(selectedIds)
  }

  const render = (item) => {  
    return (
        <TouchableOpacity style={styles.card} onPress={() => selectCity(item.id, item.city_name)}>
            <Text style={styles.cardText}>
              {item.city_name}
            </Text>
            <View style={[styles.cardContent,{position: "absolute", right: 10}]} >
                <Icon name={selectedIds.includes(item.id) ? "check-circle" : "check-circle-o"} size={20} color={theme.COLORS.PRIMARY}/>
            </View>
        </TouchableOpacity>
    )
  }
  
  return (
    <View style={styles.container}>
        <Text style={styles.title}>{countryName} / {stateName}</Text>
        <FlatList
            showsVerticalScrollIndicator={false}
            data={geograficData}
            extraData={selectedIds}
            renderItem={({ item }) => render(item)}
            keyExtractor={(x) => `${x.id}`}
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