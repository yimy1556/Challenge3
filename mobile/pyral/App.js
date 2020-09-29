import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Header from './App/Components/Header'
import Home from './App/Screens/Home'

import Tab from './App/Nagivator/TabV'
export default function App() {
    return (<>
        <Header/> 
        <Home/>
        <Tab/>
    </>);
}

