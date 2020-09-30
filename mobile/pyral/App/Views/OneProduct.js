import React from "react"
import {StyleSheet, Text, View, ImageBackground} from "react-native"

export default function OneProduct(props){
    const product = props.route.params.item
    console.log(props.route.params.item.variants)
    const image = {uri: `${product.variants[0].photo}`}

    return(
        <View style={styles.allComponent}>
            <Text style={styles.title}>{product.title}</Text>
            <View style={styles.banner}>
				<ImageBackground source={image} style={styles.imagen}></ImageBackground>
			</View>
           <Text style={styles.title}>${product.price}</Text>
           <View style={styles.colorContainer}>
               {product.variants.map(variant =>  <View style={[styles.color, {backgroundColor:`${variant.color}`}]}></View>)}
           </View>
        </View>
    )
} 

const styles = StyleSheet.create({
    allComponent:{
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
        marginTop: 50,
    },
    title:{
        fontWeight:'bold',
        fontSize:20,
    },
    imagen:{
        height: 200,
        width: 200,
        marginTop: 20,
        marginBottom: 20,
        borderColor:'black',
        borderWidth: 2,
    },
    colorContainer:{
        display: 'flex',
        flexDirection:'row',
        marginTop: 15,
    },
    color:{
        height: 20,
        width: 20,
        marginRight: 2,
        marginLeft: 2,
        
    }
})