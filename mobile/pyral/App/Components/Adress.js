import {StyleSheet, Text, View, Button, TextInput, ScrollView} from "react-native"
import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import {API} from '../Constants/index'
import axios from 'axios'
import {Picker} from '@react-native-community/picker';


export default function Adress(props){

      const [country, setcountry] = React.useState('java')
      const [city, setcity] = React.useState("")
      const [address, setadress] = React.useState("")
      const [postalCode, setpostalCode] = React.useState("")
      const [phoneNumber, setphoneNumber] = React.useState("")
      const [token, settoken] = React.useState("22")

     
     const sendContact = async () => {

        await axios.post(`${API}/user/direction`, { country, city, address, postalCode, phoneNumber, token })
        // await this.props.getContact(this.props.userlogged.token)
        alert("Your information was sent")
     }




    return(
            <ScrollView style={styles.Todo}>
                <View>
                    <Text style={styles.Titulo}>Contact information</Text>
                    <View style={styles.direccion}>
                        <Text>Country:</Text>
                        <Text>City:</Text>
                        <Text>Address:</Text>
                        <Text>Postal code:</Text>
                        <Text>Phone number:</Text>
                    </View>               
                </View>

                <View>
                    <Text style={styles.Titulo}>Add your contact information</Text>
                    <View style={styles.inputsyselect}>
                        <View>  
                            <Picker
                                    selectedValue={country}
                                    style={{height: 20, width: 300}}
                                    onValueChange={(itemValue, itemIndex) =>  setcountry(itemValue) }>

                                    {props.paises.map(pais => <Picker.Item label={pais.name} value={pais.name}/>)}
                            </Picker>
                        </View> 

                        <View style={styles.inputs}>
                                <TextInput
                                style={styles.TextInput}
                                placeholder="Write your city here"
                                placeholderTextColor="#ffffffa9" 
                                onChangeText={(val) => setcity(val)}
                            />                 
                            
                                <TextInput
                                style={styles.TextInput}
                                placeholder="Write your address here"
                                placeholderTextColor="#ffffffa9" 
                                onChangeText={(val) => setadress(val)}
                            />               
                            
                        </View>
                        <View>
                            <TextInput
                                    style={styles.TextInput}
                                    placeholder="Write your postalCode here"
                                    placeholderTextColor="#ffffffa9" 
                                    onChangeText={(val) => setpostalCode(val)}
                                />                 
                                
                                    <TextInput
                                    style={styles.TextInput}
                                    placeholder="Write your phoneNumber here"
                                    placeholderTextColor="#ffffffa9" 
                                    onChangeText={(val) => setphoneNumber(val)}
                            />     
                        </View>
                    </View>
                 </View>
                 <ButtonPers onPress={sendContact} style={[styles.Logout, {alignSelf:'center', width: 130, height:30, marginTop:30}]} tam={50} color={'#DBEBF0'}><Text style={{alignSelf:"center"}}>Send information</Text></ButtonPers>
            </ScrollView>
    )
} 

const styles = StyleSheet.create({
    Todo:{
        marginTop:30,
        marginBottom:20,
        height:500,
    },

    Titulo:{
        fontWeight:"bold",
        marginBottom:20
    },
    direccion:{
        marginLeft: 10,
        marginBottom:30

    },
    inputs:{
        marginTop:200
    },
    inputsyselect:{
        display:"flex",
        alignItems:"center"
    },
    TextInput:{
        width:  290,
        height: 40,
        paddingLeft:10,
        borderRadius: 7,
        marginTop:  10,
        backgroundColor: "#999999",
       },
})

const ButtonPers = styled.TouchableOpacity`
    width: 200px;
    height:  40px;
    alignSelf: center;
    borderRadius: 10px;
    flexDirection:row;
    backgroundColor: ${props => props.color};
    justifyContent:center;
    marginTop: ${props => `${props.tam}px`};   
`;
