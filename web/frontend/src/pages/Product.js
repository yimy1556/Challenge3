import { NavLink } from 'react-router-dom'
import '../styles/shop.css'
import React, { useState } from 'react';
import Header from '../components/Header';


const Product = (props) => {

    const [foto, setfoto] = useState({
        color: props.product.variants[0].photo
    })

    const cambiarFoto = (foto) => {
        setfoto({
            ...foto,
            color: foto
        })
    }
    console.log(props)

    const variantsAux = []
    console.log("hola", variantsAux)


    const borrarRepe = (variants) => {
        if (variants === undefined) return variantsAux
        variants.forEach(vari => {
            if (variantsAux.filter(varia => varia.color === vari.color).length !== 0)
                return
            variantsAux.push(vari)
        })
        return variantsAux
    }

    borrarRepe(props.product.variants)



    return (
        <>

            <div id="articulo">
                <NavLink to={`./selectProduct/${props.product._id}`} className="linkProduct"> <div id="imagenShop" style={{ backgroundImage: `url(${foto.color})`, borderBottom: '1px solid rgba(128, 128, 128, 0.37)' }}> </div> </NavLink>
                <div id="fotosChicas">
                    <div>
                        <p id="descripcionShop">{props.product.title}</p>
                        <p id="precioShop">${props.product.price}</p>
                    </div>
                    <div style={{ display: 'flex' }}>
                        {variantsAux.map(variant => {
                            return (<div id="imagenShopChica" onClick={e => cambiarFoto(variant.photo)} style={{ backgroundColor: `${variant.color === 'Red' ? '#44282D' : variant.color}` }}> </div>)
                        })}
                    </div>
                </div>


            </div>

        </>
    )

}

export default Product
