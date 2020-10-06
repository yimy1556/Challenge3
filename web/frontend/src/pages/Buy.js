
import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ItemCarrito from '../components/ItemCarrito'
import { connect } from 'react-redux'
import { Stepper } from '@material-ui/core'
import { NavLink } from 'react-router-dom'

const Buy = (props) => {
    const [render, setRender] = useState(true)

    useEffect(() => {

    }, [render])

    const compraTotal = (list) => {
        let total = 0
        console.log(list, '1')
        list.forEach(prod => total += prod.cant * prod.price)
        return total
    }
    return (
        <>
            <Header />
            <div style={{ display: 'flex', justifyContent: 'space-around', borderTop: '1px solid black', background: '#EEEEEE' }}>
                <div>

                    <div id="buyCloth">
                        <div style={{ width: '50%' }}>
                            {props.listProduct.map(prod => <ItemCarrito product={prod} render={render} setRender={setRender} />)}

                            <div id="totalPrecio">
                                <p>Total</p>
                                <p>${compraTotal(props.listProduct)}</p>
                            </div>
                        </div>
                        <NavLink to="/shipping"> <button className="continue">Continue</button></NavLink>
                    </div>

                </div>
                <div style={{ backgroundColor: '#F5F5F5', width: '30vw', height: '70vh', padding: '20px 40px', marginRight: '5em' }}>
                    <h3 style={{ textAlign: 'center' }}>Purchase summary</h3>
                    <hr style={{ border: '1px rgb(230,230,230) solid' }}></hr>

                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        {props.listProduct.map(prod => <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}> <p>{prod.title} {prod.color} ({prod.cant}) </p>
                            <p>${prod.price * prod.cant}</p>
                        </div>)}
                    </div>

                    {compraTotal(props.listProduct) > 250 ?
                        <>
                            <div style={{ display: 'flex', justifyContent: 'space-between', textDecoration: 'line-through' }}>
                                <p>Shipping</p>
                                <p>$36</p>
                            </div> <hr style={{ border: '1px rgb(230,230,230) solid' }}></hr>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <h4>Total</h4>
                                <h4>${compraTotal(props.listProduct)} </h4>
                            </div>
                        </> :
                        <>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <p>Shipping</p>
                                <p>$36</p>
                            </div>
                            <hr style={{ border: '1px rgb(230,230,230) solid' }}></hr>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <h4>Total</h4>
                                <h4>${compraTotal(props.listProduct) + 36}  </h4>
                            </div>
                        </>
                    }

                </div>
            </div>
            <Footer />
        </>
    )
}

const mapStateToProps = state => {
    return {
        listProduct: state.shoppingCartReducer.listProduct,
    }
}
const mapDispatchToProps = {
}
export default connect(mapStateToProps, mapDispatchToProps)(Buy)