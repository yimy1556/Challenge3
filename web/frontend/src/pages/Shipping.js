import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ItemCarrito from '../components/ItemCarrito'
import { connect } from 'react-redux'
import { Stepper } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import banner from '../images/bannerShop.jpg'


const Shipping = (props) => {

    const compraTotal = (list) => {
        let total = 0
        console.log(list, '1')
        list.forEach(prod => total += prod.cant * prod.price)
        return total
    }
    console.log(props.userlogged)
    return (

        <>
            <Header />
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', backgroundImage: `url(${banner})`, width: '100%', height: '25vh', backgroundPosition: 'center 35%', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                <h2 style={{ color: 'white', textAlign: 'center', fontSize: 'bold' }}>SHIPPING</h2>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around', background: '#EEEEEE' }}>
                <div>

                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', width: '40vw', paddingTop: '40px' }}>
                        {props.userlogged.contact ?
                            <>
                                <h2>My addresses</h2>
                                {props.userlogged.contact.map((x) => {
                                    return (
                                        <div style={{ fontWeight: 'lighter', padding: '15px', border: '1px solid #EEEEEE', backgroundColor: '#FFFFFF', borderRadius: '5px', margin: '5px 0' }}>
                                            <h3>{x.address}</h3>
                                            <p>{x.country}</p>
                                            <p>{x.city}</p>
                                            <p>{x.postalCode}</p>
                                            <p>{x.phoneNumber}</p>
                                        </div>
                                    )
                                })}
                            </> : <p>Put your direction</p>}
                    </div>
                    <NavLink to="/payments">  <button>Continue</button></NavLink>
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
        userlogged: state.authReducer,
    }
}
const mapDispatchToProps = {
}
export default connect(mapStateToProps, mapDispatchToProps)(Shipping)