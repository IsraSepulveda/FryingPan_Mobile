import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import { NativeBaseProvider } from 'native-base';
import Checkout from "../Screens/Cart/Checkout/Checkout";

// Stacks
import HomeNavigator from "./HomeNavigator";
import CartNavigator from "./CartNavigator";


const Tab = createBottomTabNavigator();

const Main = () => {
    return (
        <Tab.Navigator 
          initialRouteNamme = "Home"
         /* tabBarOptions = {{
            keyboardHidesTabBar: true,
            showLabel: false,
            activeTintColor: '#e91e63'
          }}*/

          screenOptions = {{
            "tabBarHideOnKeyboard": true,
            "tabBarActiveTintColor": "#e91e63",
            "tabBarShowLabel": false,
            "tabBarStyle": [
              {
                "display": "flex"
              },
              null
            ]
          }}

        >
            <Tab.Screen 
              name="Home"
              component={HomeNavigator}
              options={{
                tabBarIcon: ({ color }) => (
                    <Icon 
                      name="home"
                      color={color}
                      size={30}
                    />
                )
              }}
            />
            <Tab.Screen
              name="cart"
              component={CartNavigator}
              options={{
                tabBarIcon: ({ color }) => (
                    <Icon 
                    name="shopping-cart"
                    color={color}
                    size={30}
                  />
                )
              }}
            />
            <Tab.Screen
              name="admin"
              component={HomeNavigator}
              options={{
                tabBarIcon: ({ color }) => (
                    <Icon 
                    name="cog"
                    color={color}
                    size={30}
                  />
                )
              }}
            />
            <Tab.Screen
              name="user"
              component={HomeNavigator}
              options={{
                tabBarIcon: ({ color }) => (
                    <Icon 
                    name="user"
                    color={color}
                    size={30}
                  />
                )
              }}
            />
        </Tab.Navigator>
    )
}

export default Main;