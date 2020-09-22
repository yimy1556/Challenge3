import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux'
import '../styles/carrito.css'





const Header = (props) => {

    const [menuShow, setmenuShow] = useState({
        show: false
    })
    
    const menuHamburguesa = e =>{
        e.preventDefault()
        setmenuShow ({
            ...menuShow,
            show: !menuShow.show
        })       
    }
    const cerrar = require('../images/cerrar.png')
    const carrito = require('../images/carrito.png')

    

    return (
        <>
       

         <div id="menuCostado" style={menuShow.show ? {right:0} : {}}>
             <div onClick={menuHamburguesa} id="botonCarrito" style={{ border: `none`}}>
                 <div id="carrito" style={{backgroundImage: `url(${carrito})`}}></div>
              </div>
              
            <button onClick={menuHamburguesa} style={{backgroundColor: 'transparent', border:'none'}} ><img src={cerrar} style={{width:'2em', marginTop:'2vh'}}/></button>
            <h3>Shopping Cart</h3>
            <div id="ropaDelCarrito"></div>
            <button id="butButton">Buy</button>
         </div>

     </>
    )




}
    const mapStateToProps = (state) => {
        return {
       //     user: state.userReducer
        }
    }
    
export default connect(mapStateToProps) (Header)    
