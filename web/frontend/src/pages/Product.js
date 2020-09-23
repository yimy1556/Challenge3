import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/shop.css'


class Product extends React.Component {
  

    render() {
       
        return (
            <>
               <NavLink to={`./selectProduct/${this.props.product._id}`} className="linkProduct">
                    <div id="articulo">
                        <h3>{this.props.product.title}</h3>
                        <div id="imagenShop" style={{ backgroundImage: `url(${this.props.product.variants[0].photo})`, width: '20vw', height: '20vh' }}></div>
                        <p id="descripcionShop">{this.props.product.description}</p>
                        <p id="precioShop">{this.props.product.price}$</p>
                    </div>
                </NavLink>
            </>
        )
    }
}

export default Product