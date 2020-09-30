import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import styled from "styled-components"
import Home from '../Views/Home'
import { FontAwesome } from '@expo/vector-icons';
import Products from '../Views/Products'
import OneProduct from '../Views/OneProduct'



    
const About = () => <Container><Text>About</Text></Container>


const Container = styled.View`
    flex: 1;
    justifyContent: center;
    alignItems: center
`;

const iconos = {
    Home: "home",
    About: "info",
    Shop: "shopping-bag",
}

const Tab = createBottomTabNavigator();
const ShopStack = createStackNavigator();

const ShopStackScreen = () => (
      <ShopStack.Navigator>
        <ShopStack.Screen name="Products" component={Products} />
        <ShopStack.Screen name="OneProduct" component={OneProduct} />
      </ShopStack.Navigator>
    )




export default function TabV() {
    return (

        <NavigationContainer>
            <Tab.Navigator
                screenOptions = {({ route }) => ({
                    tabBarIcon: ({size, color}) => <FontAwesome name={iconos[route.name]} size={size} color={color}/>
                })}
                tabBarOptions={{
                    activeTintColor: '#201F22',
                    inactiveTintColor: 'gray',
                }}
            >
            <Tab.Screen name="Home" component={Home}     />
            <Tab.Screen name="Shop" component={ShopStackScreen}/>
            <Tab.Screen name="About" component={About}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

