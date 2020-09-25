import React, { useEffect, useState } from 'react'
import itemActions from '../redux/actions/itemActions'
import { connect } from 'react-redux'
import shoppingCartActions from '../redux/actions/shoppingCartActions'
import Header from '../components/Header'
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import authActions from '../redux/actions/authActions'

const borrarRepe = (variants) => {
    const variantsAux = []
    if (variants === undefined) return variantsAux
    variants.forEach(vari => {
        if (variantsAux.filter(varia => varia.color === vari.color).length !== 0)
            return
        variantsAux.push(vari)
    })
    return variantsAux
}

// const SimpleRating = props => {
//     const [value, setValue] = useState(1)

//     const rating = value

//     console.log(value);
//     return (
        
//     )
    
// }

const SelectProduct = (props) => {
    const [product, setProduct] = useState({})
    const [prod, setProd] = useState({
        _id: props.match.params.id,
        remeraActual: '', color: '', size: '', cant: 1
    })

    const [value, setValue] = useState(0)

    useEffect(() => {
        props.postRating(value)
        
        const productId = props.match.params.id
        props.selectProductId(productId)
            .then(prodc => {
                setProduct({ ...prodc.product })
                setProd({
                    ...prod,
                    remeraActual: prodc.product.variants[0].photo,
                    color: prodc.product.variants[0].color,
                    title: prodc.product.title,
                    price: prodc.product.price
                })
            })
    }, [value])
    if (product === {}) return <></>
    return (<>
        <Header />
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <div>
                <img src={prod?.remeraActual} alt="remeraActual" style={{ width: '25em', height: '25em' }} />
                <div>{borrarRepe(product?.variants).map(vari => <img onClick={() => setProd({ ...prod, remeraActual: vari.photo, color: vari.color })}
                    src={vari.photo} alt={vari.title} style={{ width: '4em', height: '4em' }} />)}
                </div>
            </div>
            <div>
                <h3>{product.title} color {prod.color}</h3>
                <label>Size</label>
                <select name="size" id="size" onChange={(e) => setProd({ ...prod, size: e.target.value })}>
                    <option >Choose the size</option>
                    {(product?.variants?.filter(vari => vari.color === prod.color))?.map(vari => <option>{vari.size}</option>)}
                </select>
                <h3>{product.price}</h3>
                {(prod.size !== '' || prod.size !== 'Choose the size') &&
                    <h3> stock disponible {(product?.variants?.filter(vari => (vari.color === prod.color && vari.size === prod.size))[0]?.stock)}</h3>}
                <button onClick={() => props.addProduct(prod)} className="createAccount">añadir Producto</button>
                <div>
                    <Box component="fieldset" mb={3} borderColor="transparent">
                        <Typography component="legend">Rating</Typography>
                        <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue)
                        }}
                        />
                    </Box>
                </div>
            </div>
        </div>
    </> 
    )
}

const mapDispatchToProps = {
    selectProductId: itemActions.selectProductId,
    addProduct: shoppingCartActions.addProduct,
    postRating: authActions.rating
}



export default connect(null, mapDispatchToProps)(SelectProduct)
