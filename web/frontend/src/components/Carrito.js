import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import '../styles/carrito.css'
import ItemCarrito from './ItemCarrito'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Badge from '@material-ui/core/Badge'
import shopNow from '../images/shopNow.jpg'


const compraTotal = (list) => {
    let total = 0
    list.forEach(prod => total += prod.cant * prod.price)
    return total
}
const cantTotal = (list) => {
    let total = 0
    list.forEach(prod => total += prod.cant)
    return total
}

const Carrito = (props) => {
    const [menuShow, setmenuShow] = useState({
        show: false
    })
    useEffect(() => { }, [props.ddd])

    const menuHamburguesa = e => {
        setmenuShow({
            ...menuShow,
            show: !menuShow.show
        })
    }

    return (
        <>
            <div className='DivCerrarCarrito' onClick={menuHamburguesa} style={!menuShow.show ? { display: 'none', opacity: 0 } : { display: 'block' }}></div>

            <div id="menuCostado" style={menuShow.show ? { right: 0, boxShadow: '0.5vw 0vw 0vw 0vw black' } : {}} >
                <div onClick={menuHamburguesa} id="botonCarrito" style={{ border: `none` }} style={menuShow.show ? { display: 'none' } : { display: 'block' }}>
                    <div id="carrito">
                        <Badge badgeContent={cantTotal(props.listProduct)}>
                            <ShoppingCartIcon fontSize='large' />
                        </Badge>
                    </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid grey' }}>
                    <button onClick={menuHamburguesa} style={{ backgroundColor: 'transparent', border: 'none' }} ><ArrowBackIcon style={{ color: "#111111", fontSize: 40 }}></ArrowBackIcon></button>
                    <h3 style={{ color: '#111111' }}>Your Shopping Cart</h3>
                </div>
                {props.listProduct.length == 0 ?

                    <>
                        <div className="cartEmpty" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', }}>
                            <h4 style={{ color: '#111111' }} >Your cart is empty</h4>
                            <p style={{ color: '#111111' }}>Not sure what to buy? Thousands of products await you!</p>
                            <div style={{ backgroundImage: `url(${shopNow})`, width: '100%', height: '20em', backgroundSize: "cover", textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                                <button> <NavLink to="/shop" id='shopNow'>Shop now</NavLink ></button>
                            </div>
                        </div>

                    </> :
                    <>
                        <div>
                            <div id="ropaDelCarrito" style={{overflow:"scroll", paddingBottom:"-30vh"}}>
                                {props.listProduct.map(prod => <ItemCarrito product={prod} />)}
                            </div>
                            < div id="totalPrecio">
                                <p>Total</p>
                                <p>${compraTotal(props.listProduct)}</p>
                            </div>
                            <p id="taxes">Shipping, taxes, and discounts calculated at checkout.</p>
                        </div>
                        {props.userlogged.token ?
                            <button id="buyButton"><NavLink to="/buy">Checkout</NavLink></button>
                            : <button id="buyButton" disabled> Login to buy</button>}
                    </>
                }



            </div>

        </>
    )




}

const mapStateToProps = state => {
    return {
        listProduct: state.shoppingCartReducer.listProduct,
        ddd: state.shoppingCartReducer,
        userlogged: state.authReducer

    }
}
const mapDispatchToProps = {
}
export default connect(mapStateToProps, mapDispatchToProps)(Carrito)
