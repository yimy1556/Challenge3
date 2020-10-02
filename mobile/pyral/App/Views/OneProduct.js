import React, {useState} from "react"
import {StyleSheet, Text, View, ScrollView, TouchableOpacity} from "react-native"
import {LOCAL_HOST, IMAGE} from '../Constants/index'
import styled from 'styled-components'
import ScrollProducts from '../Components/ScrollProducts'
export default function OneProduct(props){
    const product = props.route.params.item
    const [products, setProducts] = useState({photo:product.variants[0].photo,
            stock:product.variants[0].stock    
        })

    const image = products.photo.replace(LOCAL_HOST,IMAGE)
    return(
        <ScrollView style={{alignSelf:'center', marginTop:30}}>
            <Text style={styles.title} >{product.title}</Text>
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <ScrollView style={{width:60, height:240 , alignSelf:'center', marginLeft:10}}>
                    {product.variants.map((variant,index) => (
                    <TouchableOpacity key={index} 
                        style={variant.photo === products.photo? {borderColor:'#17272C',borderWidth:1,borderRadius: 10}:{}} 
                            onPress={() =>setProducts({...products,...variant}) }>
                            <ImageShop source={{uri:variant.photo.replace(LOCAL_HOST,IMAGE)}}  
                                width={100} margin={5} height={70} key={variant.photo}/>
                        </TouchableOpacity>))}
                </ScrollView>             
                <ImageShop source={{uri:image}} margin={30} width={250} height={290}/>
            </View> 
            <Text style={styles.title}>{product.price}</Text>
            <ScrollProducts/>
        </ScrollView>
    )
} 


const ImageShop = styled.Image`
    height: ${props => `${props.height}px`};
    width: ${props => `${props.width}px`};
    resizeMode: contain;
    alignSelf:center;
    borderRadius: 5px;
    marginBottom: ${props => `${props.margin}px`};
`;


const styles = StyleSheet.create({
    allComponent:{
        display: 'flex',
        justifyContent:'center',
        alignSelf:'center',
        marginTop: 50,
    },
    title:{
        fontWeight:'bold',
        fontSize:20,
        alignSelf:'center',
        marginBottom : 20
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
