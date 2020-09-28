import React from 'react'
import styled from "styled-components"

export default function Header() {
    return (
        <Container>
            <Img condicion={true} source={require('../Assets/logonegro.png')} />
            <Img condicion={false} source={require('../Assets/cari.png')} />
        </Container>
    );
}

const Img = styled.Image`
    alignSelf: center;
    resizeMode: contain; 
    width: ${props => props.condicion? '150px':'30px'};
    height: ${props => props.condicion? '150px':'30px'};
    marginLeft: ${props => props.condicion? '10px':'0px'};
    marginEnd: ${props => props.condicion? '0px':'15px'};
`;

const Container = styled.View`
    marginTop: 15%;
    flexDirection: row;
    borderRadius: 5px;
    justifyContent: space-between;
    width : 100%;
    height: 10%;
`; 
