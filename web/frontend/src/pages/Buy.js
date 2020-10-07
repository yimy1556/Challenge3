import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ItemCarrito from '../components/ItemCarrito'
import { connect } from 'react-redux'
import { Stepper } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import CreateIcon from '@material-ui/icons/Create';

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
            <div style={{ display: 'flex', justifyContent: 'space-around', borderTop: '1px solid #111111', background: '#EEEEEE' }}>
                <div>

                    <div id="buyCloth">
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', width: '40vw', paddingTop: '40px' }}>
                            {props.userlogged.contact ?
                                <>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <h3>My addresses</h3>
                                        <NavLink to="address">
                                            <CreateIcon />
                                        </NavLink>
                                    </div>
                                    {props.userlogged.contact.map((x) => {
                                        return (
                                            <>
                                                <div style={{ fontWeight: 'lighter', padding: '15px', border: '1px solid #EEEEEE', backgroundColor: '#FFFFFF', borderRadius: '5px', margin: '5px 0' }}>
                                                    <h3>{x.address}</h3>
                                                    <p>{x.city}, {x.country}</p>
                                                    <p>C.P{x.postalCode}</p>
                                                    <p>{x.phoneNumber}</p>
                                                </div>

                                            </>
                                        )
                                    })}
                                </> : <p>Set your direction of shipping <NavLink to="address">Here</NavLink></p>}
                        </div>
                        <div style={{ width: '50%' }}>
                            <h3>Your products</h3>
                            {props.listProduct.map(prod => <ItemCarrito product={prod} render={render} setRender={setRender} />)}

                            <div id="totalPrecio">
                                <p>Total</p>
                                <p>${compraTotal(props.listProduct)}</p>
                            </div>
                        </div>
                        <NavLink to="/payments"> <button className="continue">Continue</button></NavLink>
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
        userlogged: state.authReducer,
    }
}
const mapDispatchToProps = {
}
export default connect(mapStateToProps, mapDispatchToProps)(Buy)