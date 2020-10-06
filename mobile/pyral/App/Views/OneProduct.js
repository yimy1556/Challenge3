import React, {useState, useEffect} from "react"
import {StyleSheet,Share , Text, View, ScrollView,TouchableOpacity} from "react-native"
import {LOCAL_HOST, IMAGE} from '../Constants/index'
import styled from 'styled-components'
import ScrollProducts from '../Components/ScrollProducts'
import { Rating, Button} from 'react-native-elements';
import { Icon } from 'react-native-elements'
import { UpdateCart } from '../Constants/funcionesCarrito'
import {Picker} from '@react-native-community/picker';

const onShare = async (product) => {
        const result = await Share.share({
            title:`Oferta de product en ${product}`,
            message:`Oferta de product en ${product}`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
};


export default function OneProduct(props){
    const product = props.route.params.item
    const [products, setProducts] = useState({photo: product.variants[0].photo,
            title: product.title, quantity:1, _id: product._id,
            size: product.variants[0].size, color: product.variants[0].color    
    })
    const image = products.photo.replace(LOCAL_HOST,IMAGE)
    const rating = product.stars/product.reviews
    return(
        <ScrollView style={{alignSelf:'center',backgroundColor:'white'}}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <ScrollView style={{width:50, height:185 , alignSelf:'center', marginLeft:20}}>
                    {product.variants.map((variant,index) => (
                    <TouchableOpacity key={index} 
                        style={{width:50}}
                        onPress={() =>{
                            return setProducts({...products,...variant}) }}>
                            <ImageShop source={{uri:variant.photo.replace(LOCAL_HOST,IMAGE)}}  
                                width={50} margin={0} height={60} key={variant.photo}/>
                        </TouchableOpacity>))}
                </ScrollView>             
                <ImageShop source={{uri:image}} margin={0} width={290} height={290}/>
            </View>
            <Rating startingValue={rating} 
                style={{alignSelf:'center',width:200}} 
                imageSize={17} type='custom' ratingColor="#060B0C" 
            />
            <Text style={styles.title}>{`$ ${product.price}`}</Text>
            <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                <Picker
                    selectedValue={true}
                    style={{height: 50, width: 150, alignSelf:'center'}}
                    onValueChange={(itemValue) => setProducts({...products,size: itemValue})
                }>
                    {(product?.variants?.filter(vari => vari.color === products.color))?.map((vari,index) =>( 
                        <Picker.Item key={index} label={`size ${vari.size}`} value={vari.size}/>))}
                </Picker>        
                <Icon raised name='share-alt'  type='font-awesome' style={{alignSelf:'center'}}
                    color='#080808' onPress={() => onShare(product.title)} 
                />
            </View>
            <Button
                title="   Add To Cart"
                onPress={() =>  UpdateCart(products)}
                buttonStyle={{width:170, borderRadius:6, alignSelf:'center',backgroundColor:"black"}}
                icon={<Icon  name="shopping-bag" type='font-awesome' size={15} color="#FFFFFF"/>}
            />                
            <ScrollProducts {...props}/>
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

