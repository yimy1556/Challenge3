import React, {useState} from 'react'
import styled from "styled-components"
import { getValue } from '../Constants/FuncAsyncStorage'
import {ScrollView, TouchableOpacity, FlatList } from "react-native";
import Product from '../Components/Product'
//import { ImageShop } from '../Constants/index'
const ScrollProducts = ({ navigation }) => {
    const [products,setProducts] = useState([]) 
    getValue('products', true)
    .then(prod => setProducts(prod))
    
    console.log(products)
    return (
        <ScrollView horizontal={true}>
            <FlatList
                horizontal={true}
                data={products}
                renderItem={({ item }) =>
                    (<TouchableOpacity 
                        title="Go to product"
                    onPress={() => navigation.navigate('OneProduct', {item:item})}>
                        <Product product={item} />
                    </TouchableOpacity>)}
                keyExtractor={item => item._id}
            />

        </ScrollView>
    )
}

export default ScrollProducts
