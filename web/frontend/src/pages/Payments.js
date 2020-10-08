import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import PayPal from '../components/PayPal'
import ItemCarrito from '../components/ItemCarrito'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import cloth from '../images/clothing2.jpg'
import CreditCard from '../components/CreditCard'
import logoPayPal from '../images/paypal.png'
import logoCash from '../images/money.png'
import logoCards from '../images/cards.png'
import { animateScroll as scroll } from 'react-scroll'
import Badge from '@material-ui/core/Badge'

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
    return (

        <>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', backgroundImage: `url(${cloth})`, width: '100%', height: '40vh', backgroundPosition: 'center 45%', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                <h2 style={{ color: 'white', textAlign: 'center', fontSize: 'bold' }}>Payment</h2>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around', background: '#EEEEEE' }}>
                <div style={{ display: 'flex', margin: '0 auto', padding: '0em 0 3em 0' }}>
                    <div className="payLogoContainer">
                        <p style={{ margin: '2vh 0vh' }}>Information {'>'} <strong>Payment</strong></p>
                        <h3 style={{ padding: '1em 0', fontSize: '2.2em' }}>How do you want to pay?</h3>
                        <div style={{ fontWeight: 'lighter', borderRadius: '7px', border: '1px solid #DFDFDF', width: '100%' }}>
                            {!flagPayPal && !flagCreditCard &&
                                <>
                                    <div className="payLogo">
                                        <img src={logoCash} >
                                        </img>
                                        <h4>Cash</h4>
                                    </div>
                                </>}
                            {!flagPayPal &&
                                <><div className="payLogo" onClick={() => { setFlagCreditCard(!flagCreditCard) }}>
                                    <img src={logoCards} >
                                    </img>
                                    <h4>Credit Card</h4>
                                </div> </>}
                            {!flagCreditCard && <div className="payLogo" onClick={() => { setFlagPayPal(!flagPayPal) }}>
                                <img src={logoPayPal}>
                                </img>
                                <h4>PayPal</h4>
                            </div>
                            }
                            {flagPayPal && (
                                <PayPal total={compraTotal(props.listProduct)} redirect={redirect} />
                            )}
                            {flagCreditCard && (
                                <CreditCard total={compraTotal(props.listProduct)} />
                            )}
                        </div>

                    </div>



                </div>
                <div style={{ backgroundColor: '#F5F5F5', height: '70vh', padding: '20px 40px', marginRight: '5em' }}>
                    <h3 style={{ textAlign: 'center' }}>Purchase summary</h3>
                    <hr style={{ border: '1px rgb(230,230,230) solid' }}></hr>

                    <div style={{ display: 'flex', flexDirection: 'column', padding: '0.7em 0' }}>
                        {props.listProduct.map(prod => <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Badge badgeContent={prod.cant}>
                                <img src={prod.remeraActual} style={{ width: '4em' }}></img>
                            </Badge>
                            <p>{prod.title} {prod.color} ({prod.cant}) </p>
                            <p>${prod.price * prod.cant}</p>
                        </div>)}
                    </div>

                    {compraTotal(props.listProduct) > 250 ?
                        <>
                            <div style={{ display: 'flex', justifyContent: 'space-between', textDecoration: 'line-through', padding: '0.7em 0' }}>
                                <p>Shipping</p>
                                <p>$36</p>
                            </div> <hr style={{ border: '1px rgb(230,230,230) solid' }}></hr>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <h4>Total</h4>
                                <h4>${compraTotal(props.listProduct)} </h4>
                            </div>
                        </> :
                        <>
                            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0em 0 0.7em 0' }}>
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
export default connect(mapStateToProps, mapDispatchToProps)(Shipping)