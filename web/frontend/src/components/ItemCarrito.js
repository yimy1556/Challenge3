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
    const [precio, setprecio] = useState({
        total: 0
    })

    const [menuShow, setmenuShow] = useState({
        show: false
    })

    const menuHamburguesa = e => {
        e.preventDefault()
        setmenuShow({
            ...menuShow,
            show: !menuShow.show
        })
    }
    const cerrar = require('../images/cerrar.png')

    const borrarComentario = async e => {
        e.preventDefault()
        //  await props.eliminarComentario(this.props.idItinerario, this.props.index)

    }

    const [cantidad, setcantidad] = useState({
        cantidad: 1
    })

    const restar = e => {
        e.preventDefault()
        if (cantidad.cantidad > 1) {
            setcantidad({
                ...cantidad,
                cantidad: cantidad.cantidad - 1
            })
        }

    }

    const sumar = e => {
        e.preventDefault()
        setcantidad({
            ...cantidad,
            cantidad: cantidad.cantidad + 1
        })
    }

    return (
        <>
            <div id="unelEmentoCarrito">
                <div id="imageCarrito" style={{ backgroundImage: `url(https://www.remerasya.com/pub/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/r/e/remera_azul_lisa_3.jpg)`, width: "8vw", height: "8vw" }}></div>

                <div id="tituloCantidad">
                    <p>Titulo del producto</p>
                    <div id="cantidad" style={{ display: 'flex', alignItems: 'center' }}>
                        <button onClick={restar} style={{ backgroundColor: 'white', border: 'none' }}><Remove></Remove></button>
                        <p>{cantidad.cantidad}</p>
                        <button onClick={sumar} style={{ backgroundColor: 'white', border: 'none' }}><Add></Add></button>
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
