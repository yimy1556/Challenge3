import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux'
import '../styles/carrito.css'
import deletecoment  from "../images/delete.png"
import mas  from "../images/mas.png"
import menos  from "../images/menos.png"



const Carrito = (props) => {
    const [precio, setprecio] = useState({
        total: 0
    })

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

    const borrarComentario = async e =>{
        e.preventDefault()
      //  await props.eliminarComentario(this.props.idItinerario, this.props.index)

       }

  const [cantidad, setcantidad] = useState({
    cantidad: 1
    })

    const restar = e =>{
        e.preventDefault()
        if (cantidad.cantidad > 1){
            setcantidad ({
                ...cantidad,
                cantidad: cantidad.cantidad - 1 
            })   
        }
          
    }

    const sumar = e =>{
        e.preventDefault()
        setcantidad ({
            ...cantidad,
            cantidad: cantidad.cantidad + 1
        })       
    }

    return (
        <>
       

         <div id="menuCostado" style={menuShow.show ? {right:0} : {}}>
             <div onClick={menuHamburguesa} id="botonCarrito" style={{ border: `none`}} style={menuShow.show ? {display:'none'} :{display:'block'} }>
                 <div id="carrito" ><i class="fas fa-shopping-cart"></i></div>
              </div>

            
            <button onClick={menuHamburguesa} style={{backgroundColor: 'transparent', border:'none'}} ><img src={cerrar} style={{width:'2em', marginTop:'2vh'}}/></button>
            <h3>Shopping Cart</h3>
            <div id="ropaDelCarrito">
                <div id="unelEmentoCarrito">
                    <div id="imageCarrito"style={{ backgroundImage: `url(https://www.remerasya.com/pub/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/r/e/remera_azul_lisa_3.jpg)`, width:"8vw", height:"8vw"}}></div>
                    
                    <div id="tituloCantidad">
                        <p>Titulo del producto</p>
                        <div id="cantidad">
                                <button  onClick={restar} style={{backgroundColor:'white', border:'none'}}><img src={menos} style={{width: '1.2vw'}}></img></button>
                                <p>{cantidad.cantidad}</p>
                                <button onClick={sumar} style={{backgroundColor:'white', border:'none'}}><img src={mas} style={{width: '1.2vw'}}></img></button>
                        </div>
                    </div>

                    <div id="borrarPrecio">
                    <button  onClick={borrarComentario} style={{backgroundColor:'white', border:'none'}}><i class="fas fa-trash-alt"></i></button>
                            <p style={{fontWeight:"bold"}}>350$</p>
                    </div>
                </div>

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
    const mapStateToProps = (state) => {
        return {
       //     user: state.userReducer
        }
    }
    
export default connect(mapStateToProps) (Carrito)    
