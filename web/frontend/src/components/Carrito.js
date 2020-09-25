import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import '../styles/carrito.css'
import ItemCarrito from './ItemCarrito'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import CancelIcon from '@material-ui/icons/Cancel'
import Badge from '@material-ui/core/Badge'




const compraTotal = (list) => {
    let total = 0
    list.forEach(prod => total += prod.cant*prod.price)
    return total
}
const cantTotal = (list) => {
    let total = 0
    console.log(list)
    list.forEach(prod => total += prod.cant)
    return total
}

const Carrito = (props) => {
    const [total, setTotal] = useState(0)

    useEffect(() => {
        setTotal(cantTotal(props.listProduct))
    },[props.listProduct])
    
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
        return (
        <>
           <div className='DivCerrarCarrito' onClick={menuHamburguesa} style={!menuShow.show ? {display: 'none', opacity: 0} : { display: 'block' }}></div>
          
            <div id="menuCostado" style={menuShow.show ? { right: 0 } : {}}>
                <div onClick={menuHamburguesa} id="botonCarrito" style={{ border: `none` }} style={menuShow.show ? { display: 'none' } : { display: 'block' }}>
                    <div id="carrito" >
                        <Badge badgeContent={cantTotal(props.listProduct)} color="secondary">
                            <ShoppingCartIcon  fontSize='large'/>
                        </Badge>
                    </div>     
                </div>


                <button onClick={menuHamburguesa} style={{ backgroundColor: 'transparent', border: 'none' }} ><CancelIcon style={{ color: "white", fontSize: 40 }}></CancelIcon></button>
                <h3>Shopping Cart</h3>
                <div id="ropaDelCarrito">
                    {props.listProduct.map(prod => <ItemCarrito product={prod}/>)}

                    <div id="totalPrecio">
                        <p>Total</p>
                        <p>{compraTotal(props.listProduct)}</p>
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