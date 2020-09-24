import { NavLink } from 'react-router-dom'
import '../styles/shop.css'
import React, { useState } from 'react';



const Product = (props) => {

    const [foto, setfoto] = useState({
        color: props.product.variants[0].photo
    })

    const cambiarFoto = (foto) => {
        setfoto({
            ...foto,
            color: foto
        })
        console.log(foto)
    }

    return (
        <>
            <div id="articulo">
                <h3>{props.product.title}</h3>
                <div id="imagenShop" style={{ backgroundImage: `url(${foto.color})` }}> </div>
                <div id="fotosChicas">
                    {props.product.variants.map(variant => {
                        return (<div id="imagenShopChica" onClick={e => cambiarFoto(variant.photo)} style={{ backgroundImage: `url(${variant.photo})`, width: '5vh', height: '5vh' }}> </div>)
                    })}
                </div>
                <p id="descripcionShop">{props.product.description}</p>
                <p id="precioShop">{props.product.price}$</p>
                <NavLink to={`./selectProduct/${props.product._id}`} className="linkProduct">
                    <div id="divBotonVerMas">
                        <button className="createAccount">Ver mas</button>
                    </div>
                </NavLink>
            </div>
           
        </>
    )

}

export default Product