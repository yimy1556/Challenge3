import React, { useState } from 'react';
import {View, Text, CheckBox, ImageBackground, Button} from 'react-native';
import styled from 'styled-components'
import Icon from 'react-native-vector-icons/FontAwesome';

    const  LogInt = () => {
    const [user , setUser] = useState({user:'', password:''})
    const image = {uri:'https:www.onlygfx.com/wp-content/uploads/2017/07/paint-texture-black-and-white-3.jpeg'}
    return(
        <View style = {{backgroundColor:'#2B3B40',flex:1}}>
            <ImageBackground style = {{justifyContent:'center',flex:1}} imageStyle = {{borderBottomLeftRadius:70,
                borderBottomRightRadius: 70}} source={image}> 
                <Welcome style={{alignSelf:'center', fontSize: 30}}>Welcome back</Welcome>
                <LogIntInput  placeholder = 'Enter your Email' placeholderTextColor='#8F8B97' />
                <LogIntInput   placeholder = 'Enter your Password' placeholderTextColor='#8F8B97' />
                <ContainerInfo>
                    <View style={{flexDirection:'row'}}>        
                        <CheckBox value={false}
                            style={{borderColor:'white', borderWidth:12}}
                        />
                        <Text style={{alignSelf:'center' , color: 'white' }}>Remember me</Text>
                    </View>
                    <Text style={{alignSelf:'center', color:'#41A6C4'}}>Forgot password</Text>
                </ContainerInfo>   
                <ButtonPers tam={50} color={'#6A9DAC'}>
                    <Text style={{alignSelf:'center'}} >Log init your account</Text>
                </ButtonPers>    
                <ButtonPers tam={30} color={'#DBEBF0'}>
                    <Text style={{alignSelf:'center'}} >Log init google</Text>
                </ButtonPers>    
            </ImageBackground>
        </View>
    );
}
const Welcome = styled.Text`
    alignSelf:center;
    fontSize: 30px;
    marginTop: 15px;
`;

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

const LogIntInput = styled.TextInput`
    borderColor: #8F8B97;
    borderWidth: 2px;
    width:  290px;
    height: 40px;
    alignSelf: center;
    paddingLeft:10px;
    borderRadius: 7px;
    marginTop:  10px;
`;

const ContainerInfo = styled.View`
    marginTop: 10px;
    flexDirection: row;
    justifyContent: space-between;
    width: 290px;
    alignSelf:center;
`;

export default LogInt
