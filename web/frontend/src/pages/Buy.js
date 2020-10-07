import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ItemCarrito from '../components/ItemCarrito'
import { connect } from 'react-redux'
import cloth from '../images/clothing2.jpg'
import { NavLink } from 'react-router-dom'
import CreateIcon from '@material-ui/icons/Create';
import payment from '../images/payment.jpg'

const Buy = (props) => {
    const [render, setRender] = useState(true)

    useEffect(() => {

    }, [render])

    const compraTotal = (list) => {
        let total = 0
        list.forEach(prod => total += prod.cant * prod.price)
        return total
    }
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', backgroundImage: `url(${cloth})`, width: '100%', height: '40vh', backgroundPosition: 'center 45%', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                <h2 style={{ color: 'white', textAlign: 'center', fontSize: 'bold' }}>Payment</h2>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around', borderTop: '1px solid #111111', background: '#EEEEEE' }}>

                <div>

                    <div id="buyCloth">
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', width: '40vw' }}>


                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <h3>My addresses</h3>

                                <NavLink to="address" style={{ color: 'grey', paddingLeft: '2em' }}>
                                    <CreateIcon />
                                </NavLink>
                            </div>

                            {props.userlogged.contact.map((x) => {
                                return (
                                    <>
                                        <div style={{ fontWeight: 'lighter', padding: '15px', border: '1px solid #EEEEEE', backgroundColor: '#FFFFFF', borderRadius: '5px', margin: '5px 0' }}>
                                            <h3>{x.address}</h3>
                                            <p>{x.city}, {x.country}</p>
                                            <p>C.P {x.postalCode}</p>
                                            <p>{x.phoneNumber}</p>
                                        </div>

                                    </>
                                )
                            })}

                        </div>
                        <div style={{ width: '40vw' }}>
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

                    <div style={{ display: 'flex', flexDirection: 'column', padding: '0.7em 0' }}>
                        {props.listProduct.map(prod => <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}> <p>{prod.title} {prod.color} ({prod.cant}) </p>
                            <p>${prod.price * prod.cant}</p>
                        </div>)}
                    </div>

                    {compraTotal(props.listProduct) > 250 ?
                        <>
                            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.7em 0', textDecoration: 'line-through' }}>
                                <p>Shipping</p>
                                <p>$36</p>
                            </div> <hr style={{ border: '1px rgb(230,230,230) solid' }}></hr>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <h4>Total</h4>
                                <h4>${compraTotal(props.listProduct)} </h4>
                            </div>
                        </> :
                        <>
                            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0em 0 0.7em 0', }}>
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