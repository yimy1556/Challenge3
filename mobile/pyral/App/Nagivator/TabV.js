import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import styled from "styled-components"
import Home from '../Views/Home'
import Products from '../Views/Products'
import LogInt from '../Components/LogInt'
import { FontAwesome } from '@expo/vector-icons';
import OneProduct from '../Views/OneProduct'




const About = () => <Container><Text>About</Text></Container>


const Container = styled.View`
    flex: 1;
    justifyContent: center;
    alignItems: center
`;


const Drawer = createDrawerNavigator();

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



const TabsScreen = (props) => {
    console.log(props.route)
    return (
        <Tab.Navigator initialRouteName={props.route.name}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ size, color }) => <FontAwesome name={iconos[route.name]} size={size} color={color} />
            })}
            tabBarOptions={{
                activeTintColor: '#201F22',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Shop" component={ShopStackScreen} />
            <Tab.Screen name="About" component={About} />
        </Tab.Navigator>

    );
}

export default function TabV() {
    return (

        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={TabsScreen} />
                <Drawer.Screen name="Registro" component={LogInt} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

