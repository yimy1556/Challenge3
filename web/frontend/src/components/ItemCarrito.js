import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import '../styles/carrito.css'
import mas from "../images/mas.png"
import menos from "../images/menos.png"



const ItemCarrito = (props) => {
    console.log(props)
    return (
        <>
            <div id="unelEmentoCarrito">
                <div id="imageCarrito" style={{ backgroundImage: `url(${props.product.remeraActual})`, width: "8vw", height: "8vw" }}></div>

                <div id="tituloCantidad">
                    <p>{props.product.title}</p>
                    <div id="cantidad">
                        <button style={{ backgroundColor: 'white', border: 'none' }}><img src={menos} style={{ width: '1.2vw' }}></img></button>
                        <p>{props.product.cant}</p>
                        <button style={{ backgroundColor: 'white', border: 'none' }}><img src={mas} style={{ width: '1.2vw' }}></img></button>
                    </div>
                </div>

                <div id="borrarPrecio">
                    <button  style={{ backgroundColor: 'white', border: 'none' }}><i class="fas fa-trash-alt"></i></button>
                    <p style={{ fontWeight: "bold" }}>{props.product.price}</p>
                </div>
            </div>
        </>
    )




}
const mapStateToProps = (state) => {
    return {
        //     user: state.userReducer
    }
}

export default connect(mapStateToProps)(ItemCarrito)    
