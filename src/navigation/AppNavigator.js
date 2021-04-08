import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import theme from '../helpers/theme';
import Icon from 'react-native-vector-icons/Ionicons';


//Screens
import AboutScreen from '../screens/About'
import HomeScreen from '../screens/Home'
import DataScreen from '../screens/Data'

//Node
import Screen1 from '../screens/Screen1'
import Screen2 from '../screens/Screen2'
import Screen3 from '../screens/Screen3'


const MyTheme = {
    dark: false,
    colors: {
        primary: theme.COLORS.PRIMARY,
        card: theme.COLORS.WHITE,
        text: theme.COLORS.PRIMARY,
    },
};


const Stack = createStackNavigator();

function HomeStack() {
    return (
        <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen 
                name="HomeScreen" 
                component={HomeScreen} 
            />
            <Stack.Screen 
                name="Screen1" 
                component={Screen1} 
            />
            <Stack.Screen 
                name="Screen2" 
                component={Screen2} 
            />
            <Stack.Screen 
                name="Screen3" 
                component={Screen3} 
            />
        </Stack.Navigator>
    )
}

function AboutStack() {
    return (
        <Stack.Navigator initialRouteName="AboutScreen" mode="modal">
            <Stack.Screen 
                name="AboutScreen" 
                component={AboutScreen} 
            />
        </Stack.Navigator>
    )
}

function DataStack() {
    return (
        <Stack.Navigator initialRouteName="DataScreen" mode="modal">
            <Stack.Screen 
                name="DataScreen" 
                component={DataScreen} 
            />
        </Stack.Navigator>
    )
}

const Tab = createBottomTabNavigator();

function App() {
    return (
      <NavigationContainer theme={MyTheme}>
          <StatusBar
            animated={true}
            barStyle={"dark-content"}
        />
        <Tab.Navigator 
          initialRouteName='Home'
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = focused
                  ? 'home'
                  : 'home-outline';
              } else if (route.name === 'About') {
                iconName = focused ? 'information-circle' : 'information-circle-outline';
              } else if (route.name === 'Data') {
                iconName = focused ? 'checkmark' : 'checkmark-outline';
              }
              // You can return any component that you like here!
              return <Icon name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: '#54b6be',
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name="About" component={AboutStack}/>
          <Tab.Screen name="Home" component={HomeStack}/>
          <Tab.Screen name="Data" component={DataStack}/>
        </Tab.Navigator>
      </NavigationContainer>
    );
}

export default App;