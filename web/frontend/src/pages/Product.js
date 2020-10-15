import { NavLink } from 'react-router-dom'
import React, { useEffect, useState } from 'react';

// Styles
import '../styles/shop.css'

const Product = (props) => {

    const [foto, setfoto] = useState({
        color: props.product.variants[0].photo
    })
    useEffect(() => {
        setfoto({ color: props.product.variants[0].photo })
    }, [props.render])
    const cambiarFoto = (foto) => {
        setfoto({
            ...foto,
            color: foto
        })
    }
    const variantsAux = []

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
            {props.view ? 
            <>
                <div className='listArticle' style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', borderBottom: '1px solid rgba(128, 128, 128, 0.37)', margin: '0 100px', width: '70%', padding: '1em 0 0 3em' }}>
                        <NavLink to={props.selectProduct ? `./${props.product._id}` : `./selectProduct/${props.product._id}`} className="linkProduct">
                            <div id="imagenShopList" style={{ backgroundImage: `url(${foto.color})`, width: '200px', height: '200px' }}>
                            </div>
                        </NavLink>
                        <div style={{ width: '50%', display: 'flex', paddingTop: '3em', flexDirection: 'column' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <h3 id="descripcionShop">{props.product.title}</h3>
                                <p id="precioShop" style={{ fontSize: '1.5em' }}>${props.product.price}</p>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', width: '60%' }}>
                                <div style={{ display: 'flex' }}>
                                    {variantsAux.map(variant => {
                                        return (<div id="imagenShopChica2" onClick={e => cambiarFoto(variant.photo)} style={{
                                            border: ` ${variant.color === 'White' && '1px solid grey'}`,
                                            backgroundColor: `${variant.color === 'Anchor' ? '#4B4545' :
                                                variant.color === 'Black' ? '#111111' :
                                                    variant.color === 'Blush' ? 'rgb(239, 193, 179)' :
                                                        variant.color === 'Brown' ? 'rgb(134, 107, 87)' :
                                                            variant.color === 'Cream' ? '#FFF0C9' :
                                                                variant.color === 'Chateau' ? 'rgb(159, 103, 52)' :
                                                                    variant.color === 'DarkGrey' ? '#34343D' :
                                                                        variant.color === 'Egg Shell' ? '#E9DFD5' :
                                                                            variant.color === 'Flint' ? '#C2B1C1' :
                                                                                variant.color === 'Golden Harvest' ? '#E6B968' :
                                                                                    variant.color === 'Stone Grey' ? 'rgb(200, 198, 198)' :
                                                                                        variant.color === 'Granite' ? '#B4AFB1' :
                                                                                            variant.color === 'Honeycomb' ? '#C98E2A' :
                                                                                                variant.color === 'Moonlight' ? 'rgb(225, 212, 197)' :
                                                                                                    variant.color === 'Military Moss' ? '#695530' :
                                                                                                        variant.color === 'Mountain Mist' ? 'rgb(169, 143, 135)' :
                                                                                                            variant.color === 'Night Owl' ? 'rgb(48, 59, 79)' :
                                                                                                                variant.color === 'Ocean Storm' ? 'rgb(93, 100, 121)' :
                                                                                                                    variant.color === 'Paloma' ? '#F2BBBE' :
                                                                                                                        variant.color === 'Red Rum' ? '#774A47' :
                                                                                                                            variant.color === 'Salt' ? '#ECE9E2' :
                                                                                                                                variant.color === 'Sage' ? '#737B7D' :
                                                                                                                                    variant.color === 'Sweet Basil' ? 'rgb(128, 125, 94)' :
                                                                                                                                        variant.color === 'Vintage' ? 'rgb(85, 99, 115)' :
                                                                                                                                            variant.color === 'Wine' ? '#44282D' :
                                                                                                                                                variant.color === 'White' ? 'whitesmoke' : ''}`, marginTop: '1.5em'
                                        }} > </div>)
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
                : <><div className="articulo">

                    <NavLink to={props.selectProduct ? `./${props.product._id}` : `./selectProduct/${props.product._id}`} className="linkProduct"> <div id="imagenShop" style={{ backgroundImage: `url(${foto.color})`, borderBottom: '1px solid rgba(128, 128, 128, 0.37)' }}> </div> </NavLink>
                    <div id="fotosChicas">
                        <div>
                            <p id="descripcionShop">{props.product.title}</p>
                            <p id="precioShop">${props.product.price}</p>
                        </div>
                        <div style={{ display: 'flex' }}>
                            {variantsAux.map(variant => {
                                return (<div id="imagenShopChica" onClick={e => cambiarFoto(variant.photo)} style={{
                                    border: `${variant.color === 'White' ? '1px solid #111111' : ''}`,
                                    backgroundColor: `${variant.color === 'Anchor' ? '#4B4545' :
                                        variant.color === 'Black' ? '#111111' :
                                            variant.color === 'Blush' ? 'rgb(239, 193, 179)' :
                                                variant.color === 'Brown' ? 'rgb(134, 107, 87)' :
                                                    variant.color === 'Cream' ? '#FFF0C9' :
                                                        variant.color === 'Chateau' ? 'rgb(159, 103, 52)' :
                                                            variant.color === 'DarkGrey' ? '#34343D' :
                                                                variant.color === 'Egg Shell' ? '#E9DFD5' :
                                                                    variant.color === 'Flint' ? '#C2B1C1' :
                                                                        variant.color === 'Golden Harvest' ? '#E6B968' :
                                                                            variant.color === 'Stone Grey' ? 'rgb(200, 198, 198)' :
                                                                                variant.color === 'Granite' ? '#B4AFB1' :
                                                                                    variant.color === 'Honeycomb' ? '#C98E2A' :
                                                                                        variant.color === 'Moonlight' ? 'rgb(225, 212, 197)' :
                                                                                            variant.color === 'Military Moss' ? '#695530' :
                                                                                                variant.color === 'Mountain Mist' ? 'rgb(169, 143, 135)' :
                                                                                                    variant.color === 'Night Owl' ? 'rgb(48, 59, 79)' :
                                                                                                        variant.color === 'Ocean Storm' ? 'rgb(93, 100, 121)' :
                                                                                                            variant.color === 'Paloma' ? '#F2BBBE' :
                                                                                                                variant.color === 'Red Rum' ? '#774A47' :
                                                                                                                    variant.color === 'Salt' ? '#ECE9E2' :
                                                                                                                        variant.color === 'Sage' ? '#737B7D' :
                                                                                                                            variant.color === 'Sweet Basil' ? 'rgb(128, 125, 94)' :
                                                                                                                                variant.color === 'Vintage' ? 'rgb(85, 99, 115)' :
                                                                                                                                    variant.color === 'Wine' ? '#44282D' :
                                                                                                                                        variant.color === 'White' ? 'whitesmoke' : ''}`
                                }} > </div>)
                            })}
                        </div>
                    </div>
                </div> 
            </>
            }
        </>
    )
}

export default Product
