import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ItemCarrito from '../components/ItemCarrito'
import { connect } from 'react-redux'
import { Stepper } from '@material-ui/core'
import { NavLink } from 'react-router-dom'

class Buy extends React.Component {
    compraTotal = (list) => {
        let total = 0
        console.log(list, '1')
        list.forEach(prod => total += prod.cant * prod.price)
        return total
    }
    render() {
        return (
            <>
                <Header />
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <div>

                        <div id="buyCloth">
                            {this.props.listProduct.map(prod => <ItemCarrito product={prod} />)}

                            <div id="totalPrecio">
                                <p>Total</p>
                                <p>{this.compraTotal(this.props.listProduct)}</p>
                            </div>
                        </div>
                        <NavLink to="/shipping">  <button>Continue</button></NavLink>
                    </div>
                    <div style={{ backgroundColor: '#F5F5F5', width: '30vw', height: '70vh', padding: '20px 40px' }}>
                        <h3 style={{ textAlign: 'center' }}>Purchase summary</h3>
                        <hr style={{ border: '1px rgb(230,230,230) solid' }}></hr>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                {this.props.listProduct.map(prod => <p>Products({prod.cant}) </p>)}
                                <p>${this.compraTotal(this.props.listProduct)}</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <p>Shipping</p>
                            <p>$100</p>
                        </div>
                        <hr style={{ border: '1px rgb(230,230,230) solid' }}></hr>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <h4>Total</h4>
                            <h4>${this.compraTotal(this.props.listProduct) + 100} </h4>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        listProduct: state.shoppingCartReducer.listProduct,
    }
}
const mapDispatchToProps = {
}
export default connect(mapStateToProps, mapDispatchToProps)(Buy)