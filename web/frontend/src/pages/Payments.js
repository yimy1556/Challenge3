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

const Shipping = (props) => {

    const [flagPayPal, setFlagPayPal] = useState(false)

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
    return (

        <>
            <Header />
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', backgroundImage: `url(${banner})`, width: '100%', height: '25vh', backgroundPosition: 'center 35%', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                <h2 style={{ color: 'white', textAlign: 'center', fontSize: 'bold' }}>Payment</h2>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <div>

                    <p>Elegi el metodo de pago</p>

                    <button>Cash</button>
                    <button>Credit Card</button>
                    <button onClick={() => { setFlagPayPal(!flagPayPal) }}>PayPal</button>
                    {flagPayPal && (
                        <PayPal total={compraTotal(props.listProduct)} />
                    )}

                    <button onClick={handleOpen}>Buy</button>
                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        className={classes.modal}
                        open={open}
                        onClose={handleClose}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                            timeout: 500,
                        }}
                    >
                        <Fade in={open}>
                            <div className={classes.paper} style={{ height: '50vh', width: '70vw', textAlign: 'center' }}>
                                <h2 id="transition-modal-title">Thank you for shopping at pyral</h2>
                                <p id="transition-modal-description">your order will arrive in the next few days</p>
                            </div>
                        </Fade>
                    </Modal>
                </div>
                <div style={{ backgroundColor: '#F5F5F5', width: '30vw', height: '70vh', padding: '20px 40px' }}>
                    <h3 style={{ textAlign: 'center' }}>Purchase summary</h3>
                    <hr style={{ border: '1px rgb(230,230,230) solid' }}></hr>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                            {props.listProduct.map(prod => <p>Products({prod.cant}) </p>)}
                            <p>${compraTotal(props.listProduct)}</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <p>Shipping</p>
                        <p>$100</p>
                    </div>
                    <hr style={{ border: '1px rgb(230,230,230) solid' }}></hr>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <h4>Total</h4>
                        <h4>${compraTotal(props.listProduct) + 100} </h4>
                    </div>
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