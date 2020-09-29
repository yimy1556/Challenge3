import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import styled from "styled-components"
import Products from '../Views/Products'
import { FontAwesome } from '@expo/vector-icons';

const Home = () => <Container><Text>Home</Text></Container>
    
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
            <Tab.Screen 
                    name="Home" 
                    component={Home} 
                />
            <Tab.Screen name="Shop" component={Products}/>
            <Tab.Screen name="About" component={About}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

