import React,{useState, useEffect} from 'react';
import { EvilIcons, AntDesign, Entypo, Ionicons } from '@expo/vector-icons'; 
import { View, Text, Button, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 



const ItemCarrito = (props) => {
   

    const  [cantidad, setcantidad] = useState(props.product.cant)
    console.log(cantidad)
   const sumar = () => {
    setcantidad({
        ...cantidad,
        cantidad: cantidad +1
    })

   }
   const restar = () => {
       if(cantidad > 0){
            setcantidad({
                ...cantidad,
                cantidad: cantidad -1
            })
        }
    }
        
    
    return (
        <>
            <View style={styles.unelEmentoCarrito}>
                <View style={{ backgroundImage: `url(${props.product.remeraActual})`, width: 100, height: 100, borderColor:"black", borderWidth: 1 }}></View>

                <View style={styles.tituloCantidad}>
                    <Text style={styles.titulo}>{props.product.title}</Text>
                   
                    <View style={styles.cantidad}>
                        <MaterialIcons name="remove" size={24} color="black" onPress={sumar}/>
                        <Text style={styles.numerocantidad}>{cantidad}</Text>
                        <Entypo name="plus" size={24} color="black" onPress={restar} />
                    </View>

                </View>

                <EvilIcons name="trash" size={35} color="black" />
            </View>
        </>
    )


}
const styles = StyleSheet.create({
    unelEmentoCarrito:{
        width: 300,
        marginRight: 15,
        marginLeft: 15,
        display:"flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:"center",
        backgroundColor:"white",
        borderBottomColor: "black",
        borderBottomWidth:1,
        paddingBottom:20,
        paddingTop:20,
        paddingRight:10,
        paddingLeft:10,

   },
   titulo:{
       fontWeight: "bold"
   },

   tituloCantidad:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center"

   },
   cantidad:{
       display:"flex",
       flexDirection: "row",
       marginTop: 25
   },
   numerocantidad:{
       marginRight:6,
       marginLeft:6,
       paddingTop:4
   }
  
})

export default ItemCarrito 
