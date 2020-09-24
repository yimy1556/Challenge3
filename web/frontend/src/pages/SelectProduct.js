import React, {useEffect, useState} from 'react'
import itemActions from '../redux/actions/itemActions'
import shoppingCartActions from '../redux/actions/shoppingCartActions'
import {connect} from 'react-redux'

const borrarRepe = (variants) => { 
    const variantsAux = []
    if(variants === undefined) return variantsAux
    variants.forEach(vari => {
        if(variantsAux.filter(varia => varia.color === vari.color).length !== 0)
            return
        variantsAux.push(vari)
    })
    return variantsAux
}

const SelectProduct = (props) => {
    const [product, setProduct] = useState({})
    const [prod, setProd] = useState({_id:props.match.params.id, 
        remeraActual:'', color:'', size: '', cant: 1})
    useEffect(() => {
        const productId = props.match.params.id
        props.selectProductId(productId)
        .then(prodc => {
            setProduct({...prodc.product})
            setProd({...prod, 
                    remeraActual:prodc.product.variants[0].photo,
                    color: prodc.product.variants[0].color
                })
        })
    },[])
    if (product === {}) return <></>
    return(<div style={{display:'flex', justifyContent:'space-around'}}>
            <div>
                <img src = {prod?.remeraActual} alt="remeraActual" style={{width:'25em', height:'25em'}}/>
                <div>{ borrarRepe(product?.variants).map(vari => <img onClick={() => setProd({...prod,remeraActual:vari.photo, color: vari.color }) } 
                    src={vari.photo} alt={vari.title} style={{width:'4em', height :'4em'}} />)}
                </div>
            </div>
            <div>
                <h3>{product.title} color {prod.color}</h3>
                <label>Size</label>
                    <select name="size" id="size" onChange={(e) => setProd({...prod,size: e.target.value})}>
                    <option >Choose the size</option>
                        {(product?.variants?.filter(vari => vari.color === prod.color))?.map(vari => <option>{vari.size}</option>) } 
                </select>
                <h3>{product.price}</h3>
                {(prod.size !== '' || prod.size !== 'Choose the size') &&
                    <h3> stock disponible {(product?.variants?.filter(vari => (vari.color === prod.color && vari.size === prod.size))[0]?.stock)}</h3>}
                        <button onClick={() => props.addProduct(prod)} >añadir Producto</button>                
            </div>
        </div>
        )
}

const mapDispatchToProps = {
    selectProductId: itemActions.selectProductId,
    addProduct: shoppingCartActions.addProduct
}



export default connect(null, mapDispatchToProps)(SelectProduct)
