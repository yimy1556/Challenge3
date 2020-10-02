import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Button, Overlay } from 'react-native-elements';
import Tab from './App/Nagivator/TabV'
import ItemCarrito from './App/Components/ItemCarrito';
import { ScrollView } from 'react-native-gesture-handler';


export default function App() {
    const [visible, setVisible] = useState(false);

    const toggleOverlay = () => {
      setVisible(!visible);
    };
 
    const listProduct =[
                {
            cant: 4,
            color: "Wine",
            price: "1500",
            remeraActual: "http://ec77d2c642ee.ngrok.io/uploads/T-shirt.jpg",
            size: "S",
            title: "T-shirt",
            _id: "5f6ffae4782ad21ed0d0f5af",
            __proto__: Object,
        },
        {
            cant: 1,
            color: "Black",
            price: "1000",
            remeraActual: "http://ec77d2c642ee.ngrok.io/uploads/WovenHatBlack.jpg",
            size: "S",
            title: "Woven Hat",
            _id: "5f6ffae4782ad21ed0d0f5af"
        },
        {
            cant: 4,
            color: "Wine",
            price: "1500",
            remeraActual: "http://ec77d2c642ee.ngrok.io/uploads/T-shirt.jpg",
            size: "S",
            title: "T-shirt",
            _id: "5f6ffae4782ad21ed0d0f5af",
            __proto__: Object,
        },
        {
            cant: 1,
            color: "Black",
            price: "1000",
            remeraActual: "http://ec77d2c642ee.ngrok.io/uploads/WovenHatBlack.jpg",
            size: "S",
            title: "Woven Hat",
            _id: "5f6ffae4782ad21ed0d0f5af"
        },
        {
            cant: 4,
            color: "Wine",
            price: "1500",
            remeraActual: "http://ec77d2c642ee.ngrok.io/uploads/T-shirt.jpg",
            size: "S",
            title: "T-shirt",
            _id: "5f6ffae4782ad21ed0d0f5af",
            __proto__: Object,
        },
        {
            cant: 1,
            color: "Black",
            price: "1000",
            remeraActual: "http://ec77d2c642ee.ngrok.io/uploads/WovenHatBlack.jpg",
            size: "S",
            title: "Woven Hat",
            _id: "5f6ffae4782ad21ed0d0f5af"
        }
        ]

    return (<>
        <Tab/>
        <View >
        <MaterialCommunityIcons style={styles.cart} onPress={toggleOverlay} name="cart-outline" size={24} color="black" />

          <Overlay  isVisible={visible} onBackdropPress={toggleOverlay}>
              <View style={styles.ropaDelCarrito}>
                   <ScrollView>
                       {listProduct.map(prod => <ItemCarrito product={prod} />)}
                    </ScrollView>
                    <View style={styles.totalPrecio}>
                        <Text style={styles.Textprecio}>Total</Text>
                        <Text style={styles.Textprecio}>$120</Text>
                    </View>
                    <Text style={styles.butButton}>Buy</Text>
                </View>

                
          </Overlay>
       </View>
    </>);
}

const styles = StyleSheet.create({
    cart:{
        position: 'absolute', 
        right:   10,
        bottom: 690,
   },
   ropaDelCarrito:{
       backgroundColor:"black",
       paddingTop:15,
       height: 600
   },
   totalPrecio:{
       display:"flex",
       flexDirection:"row",
       justifyContent:"space-between",
       marginRight:30,
       marginLeft:30,
       marginTop:15,
       marginBottom: 15,
   },
   Textprecio:{
       color:"white",
       fontWeight: "bold",
       fontSize:20

   },
   butButton:{
       color:"black",
       textAlign:"center",
       fontWeight:"bold",
       backgroundColor: "white",
       marginRight:135,
       marginLeft:135,
       marginBottom:20,
       paddingTop:4,
       paddingBottom:4,
       marginTop: 20
   }
})

