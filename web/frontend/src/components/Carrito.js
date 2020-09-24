import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import '../styles/carrito.css'
import ItemCarrito from './ItemCarrito'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import CancelIcon from '@material-ui/icons/Cancel';


const Carrito = (props) => {
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
           <div className='DivCerrarCarrito' onClick={menuHamburguesa} style={!menuShow.show ? {display: 'none', opacity: 0} : { display: 'block' }}></div>
          
            <div id="menuCostado" style={menuShow.show ? { right: 0 } : {}}>
                <div onClick={menuHamburguesa} id="botonCarrito" style={{ border: `none` }} style={menuShow.show ? { display: 'none' } : { display: 'block' }}>
                    <div id="carrito" ><ShoppingCartIcon></ShoppingCartIcon></div>
                </div>


                <button onClick={menuHamburguesa} style={{ backgroundColor: 'transparent', border: 'none' }} ><CancelIcon style={{ color: "white", fontSize: 40 }}></CancelIcon></button>
                <h3>Shopping Cart</h3>
                <div id="ropaDelCarrito">
                    {props.listProduct.map(prod => <ItemCarrito product={prod}/>)}

                    <div id="totalPrecio">
                        <p>Total</p>
                        <p>230$</p>
                    </div>
                </div>

                <button id="butButton">Buy</button>
            </div>

        </>
    )




}

const mapStateToProps = state => {
    return {
        listProduct : state.shoppingCartReducer.listProduct,
	}
}
const mapDispatchToProps = {
}
export default connect(mapStateToProps, mapDispatchToProps)(Carrito)
