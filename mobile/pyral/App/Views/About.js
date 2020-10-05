import {StyleSheet, Text, View, Button, TextInput, ScrollView, ImageBackground} from "react-native"
import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import {API} from '../Constants/index'
import axios from 'axios'


export default function About(){
    const imageOne = require('../Assets/clothing.jpg')
    const edificio = require('../Assets/edificio.jpg')
    const ropa = require('../Assets/ropa.jpg')
    const bannerabout = require('../Assets/bannerabout.jpg')


    return(
        <ScrollView>
            <View style={styles.viewimagen}>
                <Text style={[styles.ourstory, {top:"50%", left:"25%", right:"20%"}]}>Our story</Text>
                <ImageBackground source={imageOne} style={[styles.imagen, {width:"100%"}]}/>
            </View>

            <View style={styles.imagenytexto}>
                <View style={styles.texto}>
                    <Text style={styles.titulo}>Our origins</Text>
                    <Text style={styles.parrafo}>We’ve always considered ourselves a shirting company at our very core. Always have. Always will. In fact, when we were just getting our vision for Taylor Stitch off the ground ten years ago, we turned to the country’s oldest family of shirtmakers to learn from the very best. And we were spared no lesson of construction—from fit and balance to the importance of French seams to why 22 stitches-per-inch matters on a shirt.</Text>
                    <Text style={styles.parrafo}>You can bet this technical DNA is central to every single product we make. Build for the long haul, design products that wear in not out, and use the best most sustainable fabrics available—even if that means making them yourself.</Text>
                </View>
            </View>
            
            <View style={styles.imagenytexto}>
                    <Text style={styles.titulo}>Products That Wear in Not Out</Text>
                    <ImageBackground source={ropa} style={[styles.imagen, {width:"90%", height:300}]}/>
                    <View style={styles.texto}>
                        <Text style={styles.parrafo}>We’ve always considered ourselves a shirting company at our very core. Always have. Always will. In fact, when we were just getting our vision for Taylor Stitch off the ground ten years ago, we turned to the country’s oldest family of shirtmakers to learn from the very best. And we were spared no lesson of construction—from fit and balance to the importance of French seams to why 22 stitches-per-inch matters on a shirt.</Text>
                         <Text style={styles.parrafo}>You can bet this technical DNA is central to every single product we make. Build for the long haul, design products that wear in not out, and use the best most sustainable fabrics available—even if that means making them yourself.</Text>
                   </View>
            </View>

            <View style={styles.imagenytexto}>
               <Text style={styles.titulo}>Products That Wear in Not Out</Text>
               <ImageBackground source={bannerabout} style={[styles.imagen, {width:"190%"}]}/>
                <View style={styles.texto}>
                    <Text style={styles.parrafo}>We’ve always considered ourselves a shirting company at our very core. Always have. Always will. In fact, when we were just getting our vision for Taylor Stitch off the ground ten years ago, we turned to the country’s oldest family of shirtmakers to learn from the very best. And we were spared no lesson of construction—from fit and balance to the importance of French seams to why 22 stitches-per-inch matters on a shirt.</Text>
                    <Text style={styles.parrafo}>You can bet this technical DNA is central to every single product we make. Build for the long haul, design products that wear in not out, and use the best most sustainable fabrics available—even if that means making them yourself.</Text>
                </View>
            </View>

            
        </ScrollView>
    )
} 
const styles = StyleSheet.create({
    viewimagen:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center"
        },
    imagen:{
        height: 300,
        marginLeft:5,
        marginRight:5,
        marginTop:40, 
    },
    ourstory:{
        position:"absolute",
        color:"white",
        zIndex:100,
        fontSize:50
    },
    imagenytexto:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        marginLeft:30,
        marginRight:30

    },
    texto:{
        width:350,
        textAlign: "center"
    },
    titulo:{
        fontWeight:"bold",
        textAlign: "center",
        marginTop:70,
        marginBottom:0,
        fontSize:20
    },
    parrafo:{
    textAlign: "center",
    marginTop:20

    },
    button:{
        textAlign:"center",
        marginTop:60,
        borderColor:"black",
        borderWidth:2,
        marginRight:140,
        marginLeft:140,
        paddingTop:10,
        paddingBottom:10,
        fontWeight:"bold",
        fontSize:25
    }

})
