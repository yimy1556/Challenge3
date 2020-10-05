import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import '../styles/carrito.css'
import Tooltip from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import Add from '@material-ui/icons/Add'
import Remove from '@material-ui/icons/Remove'
import shoppingCartActions from '../redux/actions/shoppingCartActions'
const ItemCarrito = (props) => {
    const [button, setButton] = useState(true)

    useEffect(() => {
    }, [button])

    const modStock = (cant) => {
        if (props.render !== undefined) {
            props.setRender(!props.render)
        }
        props.updateQuantity(props.product, cant)
        setButton(!button)
    }

    return (
        <>
            <div id="unelEmentoCarrito" style={{ marginBottom: '20px' }}>
                <div id="imageCarrito" style={{ backgroundImage: `url(${props.product.remeraActual})`, width: "6vw", height: "6vw" }}></div>

                <div id="tituloCantidad">
                    <p>{props.product.title}</p>
                    <div id="cantidad">
                        <button onClick={() => modStock(-1)}
                            style={{ backgroundColor: 'whitesmoke', border: 'none' }}><Remove /></button>
                        <p>{props.product.cant}</p>
                        <button onClick={() => modStock(1)}
                            style={{ backgroundColor: 'whitesmoke', border: 'none' }}><Add /></button>
                    </div>
                </div>

                <Tooltip onClick={() => props.removeProduct(props.product)} title="Delete" style={{ height: '50px' }} >
                    <IconButton aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            </div>
        </>
    )




}

const mapDispatchToProps = {
    updateQuantity: shoppingCartActions.updateQuantity,
    removeProduct: shoppingCartActions.removeProduct,
}

export default connect(null, mapDispatchToProps)(ItemCarrito)    
