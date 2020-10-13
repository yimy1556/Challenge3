import React, { useEffect, useState } from 'react'
import PayPal from '../components/PayPal'
import { connect } from 'react-redux'
import CreditCard from '../components/CreditCard'
import logoPayPal from '../images/paypal.png'
import logoCash from '../images/money.png'
import logoCards from '../images/cards.png'
import { animateScroll as scroll } from 'react-scroll'
import Badge from '@material-ui/core/Badge'
import { NavLink } from 'react-router-dom'

const Shipping = (props) => {

    const [flagPayPal, setFlagPayPal] = useState(false)
    const [flagCreditCard, setFlagCreditCard] = useState(false)
    useEffect(() => {
        scrollToTop()
    }, [])

    const scrollToTop = () => {
        scroll.scrollToTop();
    }

    const compraTotal = (list) => {
        let total = 0
        list.forEach(prod => total += prod.cant * prod.price)
        return total
    }
    const redirect = destiny => {
        props.history.push(destiny)
    }
    const shipping = 36
    return (

        <>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', backgroundImage: `url(https://cdn-yotpo-images-production.yotpo.com/instagram/85/17967839827327785/standard_resolution.jpg)`, width: '100%', height: '40vh', backgroundPosition: 'center 45%', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                <h1 style={{ color: 'white', textAlign: 'center', fontSize: 'bold' }}>PAYMENT</h1>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', width: '80%', margin: '2vh auto' }}>
                {/* <div className="payLogoContainer" style={{ display: 'flex', width:'55%%'}}> */}
                <div style={{ borderRight: '1px solid #DFDFDF', padding: '0vh 7vh', margin: '0vh 7vh', width: '95vh' }}>
                    <div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <p style={{ margin: '2vh 0vh' }}><NavLink to="buy" style={{ textDecoration: 'none', color: "#111111" }}>  Information {'>'} </NavLink><strong>Payment</strong></p>
                            <h4 style={{ padding: '1em 0' }}>How do you want to pay?</h4>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>

                            <div style={{ fontWeight: 'lighter', display: 'flex', borderRadius: '7px', border: '1px solid #DFDFDF' }}>
                                {!flagPayPal && !flagCreditCard &&
                                    <>
                                        <div className="payLogo" style={{ margin: '2vh', height: '8vh' }}>
                                            <img src={logoCash} >
                                            </img>
                                            <h6>Cash</h6>
                                        </div>
                                    </>}
                                {!flagPayPal &&
                                    <><div className="payLogo" style={{ margin: '2vh', height: '8vh' }}>
                                        <img src={logoCards} >
                                        </img>
                                        <h6>Credit Card</h6>
                                    </div> </>}
                                {!flagCreditCard && <div className="payLogo" style={{ margin: '2vh', height: '8vh' }} onClick={() => { setFlagPayPal(!flagPayPal) }}>
                                    <img src={logoPayPal}>
                                    </img>
                                    <h6>PayPal</h6>
                                </div>
                                }
                                {flagPayPal && (
                                    compraTotal(props.listProduct) > 250 ?
                                        <PayPal total={compraTotal(props.listProduct)} redirect={redirect} /> :
                                        <PayPal total={compraTotal(props.listProduct) + shipping} redirect={redirect} />
                                )}
                                {flagCreditCard && (
                                    <CreditCard total={compraTotal(props.listProduct)} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', width: '55vh', height: '70vh', margin: '1vh 0vh' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', padding: '0.7em 0' }}>
                        {props.listProduct.map(prod => <div style={{ display: 'flex', width: '100%', margin: '1vh 0 ' }}>
                            <div style={{ border: '1px solid #DFDFDF', borderRadius: '15%' }}>
                                <Badge badgeContent={prod.cant}>
                                    <div style={{ backgroundImage: `url(${prod.remeraActual})`, height: '10vh', width: '10vh', backgroundPosition: 'center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}></div>
                                </Badge>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignSelf: 'center', width: '100%' }}>
                                <div style={{ display: 'flex', margin: '0vh 1vh ', width: '100%', justifyContent: 'space-between' }}>
                                    <p style={{ fontWeight: 'bold' }}>{prod.color} {prod.title}</p>
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
                                <p>${shipping}</p>
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
                                <p>${shipping}</p>
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
    }
}
const mapDispatchToProps = {
}
export default connect(mapStateToProps, mapDispatchToProps)(Shipping)