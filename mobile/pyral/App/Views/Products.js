import React from 'react'
import styled from "styled-components"
import Product from '../Components/Product'
import {ScrollView, View, FlatList} from 'react-native'

const PR = [{
        price: "1500",
        title: "T-shirt",
        variants: [
            {   
            stock: "25", size: "S", color: "Wine", photo: "http://localhost:4000/uploads/T-shirt.jpg"},
            {stock: "25", size: "S", color: "Wine", photo: "http://localhost:4000/uploads/T-shirt.jpg"},
            {stock: "15", color: "Black", size: "S", photo: "http://localhost:4000/uploads/T-shirtBlack.jpg"}
        ],
        },{
        price: "1501",
        title: "T-shirt",
        variants: [
            {   
            stock: "25", size: "S", color: "Wine", photo: "http://localhost:4000/uploads/T-shirt.jpg"},
            {stock: "25", size: "S", color: "Wine", photo: "http://localhost:4000/uploads/T-shirt.jpg"},
            {stock: "15", color: "Black", size: "S", photo: "http://localhost:4000/uploads/T-shirtBlack.jpg"}
        ],
        },{
        price: "1502",
        title: "T-shirt",
        variants: [
            {   
            stock: "25", size: "S", color: "Wine", photo: "http://localhost:4000/uploads/T-shirt.jpg"},
            {stock: "25", size: "S", color: "Wine", photo: "http://localhost:4000/uploads/T-shirt.jpg"},
            {stock: "15", color: "Black", size: "S", photo: "http://localhost:4000/uploads/T-shirtBlack.jpg"}
        ],
        },{
        price: "1503",
        title: "T-shirt",
        variants: [
            {   
            stock: "25", size: "S", color: "Wine", photo: "http://localhost:4000/uploads/T-shirt.jpg"},
            {stock: "25", size: "S", color: "Wine", photo: "http://localhost:4000/uploads/T-shirt.jpg"},
            {stock: "15", color: "Black", size: "S", photo: "http://localhost:4000/uploads/T-shirtBlack.jpg"}
        ],
        },{
        price: "10",
        title: "T-shirt",
        variants: [
            {   
            stock: "25", size: "S", color: "Wine", photo: "http://localhost:4000/uploads/T-shirt.jpg"},
            {stock: "25", size: "S", color: "Wine", photo: "http://localhost:4000/uploads/T-shirt.jpg"},
            {stock: "15", color: "Black", size: "S", photo: "http://localhost:4000/uploads/T-shirtBlack.jpg"}
        ],
        },{
        price: "1543",
        title: "T-shirt",
        variants: [
            {   
            stock: "25", size: "S", color: "Wine", photo: "http://localhost:4000/uploads/T-shirt.jpg"},
            {stock: "25", size: "S", color: "Wine", photo: "http://localhost:4000/uploads/T-shirt.jpg"},
            {stock: "15", color: "Black", size: "S", photo: "http://localhost:4000/uploads/T-shirtBlack.jpg"}
        ],
        },{
        price: "104",
        title: "T-shirt",
        variants: [
            {   
            stock: "25", size: "S", color: "Wine", photo: "http://localhost:4000/uploads/T-shirt.jpg"},
            {stock: "25", size: "S", color: "Wine", photo: "http://localhost:4000/uploads/T-shirt.jpg"},
            {stock: "15", color: "Black", size: "S", photo: "http://localhost:4000/uploads/T-shirtBlack.jpg"}
        ],
        },{
        price: "15400",
        title: "T-shirt",
        variants: [
            {   
            stock: "25", size: "S", color: "Wine", photo: "http://localhost:4000/uploads/T-shirt.jpg"},
            {stock: "25", size: "S", color: "Wine", photo: "http://localhost:4000/uploads/T-shirt.jpg"},
            {stock: "15", color: "Black", size: "S", photo: "http://localhost:4000/uploads/T-shirtBlack.jpg"}
        ],
        },{
        price: "102",
        title: "T-shirt",
        variants: [
            {   
            stock: "25", size: "S", color: "Wine", photo: "http://localhost:4000/uploads/T-shirt.jpg"},
            {stock: "25", size: "S", color: "Wine", photo: "http://localhost:4000/uploads/T-shirt.jpg"},
            {stock: "15", color: "Black", size: "S", photo: "http://localhost:4000/uploads/T-shirtBlack.jpg"}
        ],
        }]



export default function Products() {
    const renderItem = ({ item }) => <Product product={item}/>
        
        return (<>
        <ScrollView>
            <FlatList
                style={{flex:1,alignSelf:'center'}}
                numColumns={2}
                data={PR}
                renderItem={renderItem} 
                keyExtractor={item => item.price}
            />
        </ScrollView>        
    </>);
}
