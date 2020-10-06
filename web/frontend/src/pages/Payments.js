import React, { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import PayPal from '../components/PayPal'
import ItemCarrito from '../components/ItemCarrito'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import banner from '../images/bannerShop.jpg'
import CreditCard from '../components/CreditCard'
import logoPayPal from '../images/paypal.png'
import logoCash from '../images/money.png'
import logoCards from '../images/cards.png'

const Shipping = (props) => {

    const [flagPayPal, setFlagPayPal] = useState(false)
    const [flagCreditCard, setFlagCreditCard] = useState(false)
    const useStyles = makeStyles((theme) => ({
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        paper: {
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    }));
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const compraTotal = (list) => {
        let total = 0
        console.log(list, '1')
        list.forEach(prod => total += prod.cant * prod.price)
        return total
    }

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    console.log(props.history)
    const redirect = destiny => {
        props.history.push(destiny)
    }
    return (

        <>
            <Header />
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', backgroundImage: `url(${banner})`, width: '100%', height: '25vh', backgroundPosition: 'center 35%', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                <h2 style={{ color: 'white', textAlign: 'center', fontSize: 'bold' }}>Payment</h2>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around', background: '#EEEEEE' }}>
                <div style={{ display: 'flex', flexDirection: 'column', width: '60vw', margin: '0 auto', padding: '3em 0' }}>

                    <h3 style={{ textAlign: 'left' }}>How do you want to pay?</h3>
                    <div className="payLogoContainer">
                        {!flagPayPal &&
                            <>
                                <div className="payLogo">
                                    <img src={logoCash} >
                                    </img>
                                    <p>Cash</p>
                                </div>
                            </>}
                        {!flagPayPal &&
                            <><div className="payLogo" onClick={() => { setFlagCreditCard(!flagCreditCard) }}>
                                <img src={logoCards} >
                                </img>
                                <p>Credit Card</p>
                            </div> </>}
                        <div className="payLogo" onClick={() => { setFlagPayPal(!flagPayPal) }}>
                            <img src={logoPayPal}>
                            </img>
                            <p>PayPal</p>
                        </div>
                    </div>
                    {flagCreditCard && (
                        <CreditCard total={compraTotal(props.listProduct)} />
                    )}
                    {flagPayPal && (
                        <PayPal total={compraTotal(props.listProduct)} redirect={redirect} />
                    )}

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
export default connect(mapStateToProps, mapDispatchToProps)(Shipping)