import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import '../styles/carrito.css'
import mas from "../images/mas.png"
import menos from "../images/menos.png"
import Tooltip from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import Add from '@material-ui/icons/Add'
import Remove from '@material-ui/icons/Remove';



const ItemCarrito = (props) => {
    console.log(props)
    return (
        <>
            <div id="unelEmentoCarrito">
                <div id="imageCarrito" style={{ backgroundImage: `url(${props.product.remeraActual})`, width: "8vw", height: "8vw" }}></div>

                <div id="tituloCantidad">
                    <p>{props.product.title}</p>
                    <div id="cantidad">
                        <button style={{ backgroundColor: 'white', border: 'none' }}><Remove></Remove></button>
                        <p>{props.product.cant}</p>
                        <button style={{ backgroundColor: 'white', border: 'none' }}><Add></Add></button>
                    </div>
                </div>

                <Tooltip title="Delete" style={{ height: '50px' }} >
                    <IconButton aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
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
