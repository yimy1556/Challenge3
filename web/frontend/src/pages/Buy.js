import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ItemCarrito from '../components/ItemCarrito'
import { connect } from 'react-redux'
import cloth from '../images/clothing2.jpg'
import { NavLink } from 'react-router-dom'
import CreateIcon from '@material-ui/icons/Create';
import payment from '../images/payment.jpg'
import { animateScroll as scroll } from 'react-scroll'

const Buy = (props) => {
    const [render, setRender] = useState(true)

    useEffect(() => {
        scrollToTop()
    }, [render])

    const scrollToTop = () => {
        scroll.scrollToTop();
    }


    const compraTotal = (list) => {
        let total = 0
        list.forEach(prod => total += prod.cant * prod.price)
        return total
    }

    console.log(props.listProduct);
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', backgroundImage: `url(https://cdn-yotpo-images-production.yotpo.com/instagram/85/17967839827327785/standard_resolution.jpg)`, width: '100%', height: '30vh', backgroundPosition: 'center 45%', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                <h2 style={{ color: 'white', textAlign: 'center', fontSize: 'bold' }}>Payment</h2>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', width: '80%', margin: '2vh auto' }}>
                <div style={{ borderRight: '1px solid #DFDFDF', padding: '0vh 7vh', margin: '0vh 7vh', width: '60%' }}>
                    <div >
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <p style={{ margin: '2vh 0vh' }}><strong>Information</strong> {'>'} Payment</p>
                                <h3>Contact information<NavLink to="address" style={{ color: 'grey', paddingLeft: '2em' }}><CreateIcon /></NavLink></h3>


                            </div>
                            <div style={{ fontWeight: 'lighter', borderRadius: '7px', border: '1px solid #DFDFDF', width: '100%', padding: '2vh', margin: '2vh 0vh' }}>
                                {props.userlogged.contact.map((x) => {
                                    return (
                                        <>
                                            <div>
                                                <h3>{x.address}</h3>
                                                <p>{x.city}, {x.country}</p>
                                                <p>C.P {x.postalCode}</p>
                                                <p>{x.phoneNumber}</p>
                                            </div>

                                        </>
                                    )
                                })}
                            </div>
                        </div>
                        {/* <div style={{ width: '40vw' }}>
                            <h3>Your products</h3>
                            {props.listProduct.map(prod => <ItemCarrito product={prod} render={render} setRender={setRender} />)}

                            <div id="totalPrecio">  
                                <p>Total</p>
                                <p>${compraTotal(props.listProduct)}</p>
                            </div>
                        </div> */}
                        <NavLink to="/payments"> <button className="continue">Continue</button></NavLink>
                    </div>
                </div>
                <div style={{ width: '35%', height: '70vh', margin: '1vh 0vh' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', padding: '0.7em 0' }}>
                        {props.listProduct.map(prod => <div style={{ display: 'flex', width: '100%', margin: '1vh 0 ' }}>
                            <div style={{ border: '1px solid #DFDFDF', borderRadius: '15%' }}><div style={{ backgroundImage: `url(${prod.remeraActual})`, height: '10vh', width: '10vh', backgroundPosition: 'center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}></div></div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignSelf: 'center' }}>
                                <div style={{ display: 'flex', margin: '0vh 1vh ', width: '100%', justifyContent: 'space-between' }}>
                                    <p style={{ fontWeight: 'bold' }}>{prod.color} {prod.title} ({prod.cant})</p>
                                    <p style={{ fontWeight: 'bold' }}>${prod.price * prod.cant}</p>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', margin: '0vh 1vh ' }}>
                                    <p>{prod.size}</p>
                                </div>
                            </div>
                        </div>)}
                    </div>

                    {compraTotal(props.listProduct) > 250 ?
                        <>
                            <hr style={{ border: '0.5px solid #DFDFDF' }}></hr>
                            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.7em 0', textDecoration: 'line-through' }}>
                                <p>Shipping</p>
                                <p>$36</p>
                            </div> <hr style={{ border: '0.5px solid #DFDFDF' }}></hr>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <h5>Total</h5>
                                <h4>${compraTotal(props.listProduct)} </h4>
                            </div>
                        </> :
                        <>
                            <hr style={{ border: '0.5px solid #DFDFDF' }}></hr>
                            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0em 0 0.7em 0', }}>
                                <p>Shipping</p>
                                <p>$36</p>
                            </div>
                            <hr style={{ border: '0.5px solid #DFDFDF' }}></hr>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <h4>Total</h4>
                                <h4>${compraTotal(props.listProduct) + 36}  </h4>
                            </div>
                        </>
                    }

                </div>
            </div>
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