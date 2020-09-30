import React from "react"
import {StyleSheet, Text, View} from "react-native"

export default function OneProduct(props){
    console.log(props.route.params.item)
    return(
        <View>
             {props.route.params.item.variants.map(producto =>  <Text>{producto.color}</Text>)}
            
        </View>
    )
} 

