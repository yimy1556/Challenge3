import React from 'react'
import { connect } from 'react-redux'
import itemActions from '../redux/actions/itemActions'
import '../styles/shop.css'
import Header from '../components/Header'
import Slider from '../components/Slider'
import Product from '../pages/Product'
import Footer from '../components/Footer'
import { animateScroll as scroll } from 'react-scroll'
import ChatBotComponent from '../components/ChatBotComponent'


class Shop extends React.Component {

    componentDidMount() {
        this.scrollToTop()
        this.props.getProducts()
    }

    scrollToTop() {
        scroll.scrollToTop();
    }

    render() {
        return (
            <>
                <Header />
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <div style={{ flex: '1', padding: '50px', display: 'flex', flexDirection: 'column' }}>
                        <h4>Order</h4>
                        <select name="color" id="color" >
                            <option >Most Relevant</option>
                            <option>Lowest Price</option>
                            <option>Highest Price</option>
                        </select>
                        <h3>Indumentaria</h3>
                        <Slider />
                    </div>
                    <div id="paginaShop" style={{ flex: '8' }}>
                        <h2 style={{ color: 'black' }}>All Products</h2>
                        <div id="todoShop">
                            {this.props.products == 0 ? <p>no products yet</p> :
                                <>
                                    {this.props.products.map(product => {
                                        return (
                                            <>
                                                <Product product={product} />
                                            </>
                                        )

                                    })
                                    }
                                </>
                            }
                        </div>
                    </div>
                </div>
                <ChatBotComponent />
                <Footer></Footer>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        products: state.itemReducer.product
    }
}
const mapDispatchToProps = {
    getProducts: itemActions.getProducts
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop)
