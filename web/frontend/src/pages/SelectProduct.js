import React, { useEffect, useState } from 'react'
import itemActions from '../redux/actions/itemActions'
import { connect } from 'react-redux'
import shoppingCartActions from '../redux/actions/shoppingCartActions'
import Header from '../components/Header'

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

const SelectProduct = (props) => {
    const [product, setProduct] = useState({})
    const [prod, setProd] = useState({
        _id: props.match.params.id,
        remeraActual: '', color: '', size: '', cant: 1
    })
    useEffect(() => {
        const productId = props.match.params.id
        props.selectProductId(productId)
            .then(prodc => {
                console.log(prodc, 'ssssdsd')
                setProduct({ ...prodc })
                setProd({
                    ...prod,
                    remeraActual: prodc.variants[0].photo,
                    color: prodc.variants[0].color,
                    title: prodc.title,
                    price: prodc.price
                })
            })
    }, [])
    if (product === {}) return <></>
    return (<>
        <Header />
        <div style={{ display: 'flex', justifyContent: 'space-around', padding: '3em' }}>
            <div style={{ display: 'flex' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>{borrarRepe(product?.variants).map(vari => <img style={{ paddingTop: '20px' }} onClick={() => setProd({ ...prod, remeraActual: vari.photo, color: vari.color })}
                    src={vari.photo} alt={vari.title} style={{ width: '3em', height: '4em' }} />)}
                </div>
                <img src={prod?.remeraActual} alt="remeraActual" style={{ width: '28vw', height: '76vh' }} />

            </div>
            <div style={{ width: '50vw' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingRight: '7em' }}>
                    <h3>{product.title}</h3>
                    <h3>${product.price}</h3>
                </div>
                <p style={{ maxWidth: '20em', padding: '20px 0' }}>{product.description}</p>
                <div style={{ display: 'flex', flexDirection: 'column' }} >
                    <label>Size</label>
                    <select name="size" id="size" onChange={(e) => setProd({ ...prod, size: e.target.value })}>
                        <option >Choose the size</option>
                        {(product?.variants?.filter(vari => vari.color === prod.color))?.map(vari => <option>{vari.size}</option>)}
                    </select>
                </div>
                {(prod.size !== '' || prod.size !== 'Choose the size') &&
                    <h3>{(product?.variants?.filter(vari => (vari.color === prod.color && vari.size === prod.size))[0]?.stock < 10 && <p>Last units</p>)}</h3>}
                <button onClick={() => props.addProduct(prod)} className="createAccount" style={{ display: 'flex', margin: '7em auto', }}>Add to cart</button>
            </div>
        </div>
    </>
    )
}

const mapDispatchToProps = {
    selectProductId: itemActions.selectProductId,
    addProduct: shoppingCartActions.addProduct
}



export default connect(null, mapDispatchToProps)(SelectProduct)
