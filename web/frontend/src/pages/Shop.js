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
    state = {
        sort: '',
        sortFlag: ''
    }

    componentDidMount() {
        this.scrollToTop()
        this.props.getProducts()
        this.props.getColors()
    }

    scrollToTop() {
        scroll.scrollToTop();
    }
    highestPrice = this.props.products.sort(function (a, b) {
        return (b.price - a.price)
    })
    lowestPrice = this.props.products.sort(function (a, b) {
        return (a.price - b.price)
    })

    sort = (e) => {
        var value = e.target.value
        if (value !== "") {
            console.log(value)
            this.setState({
                sortFlag: true,
                sort: value
            })
        } else {
            this.setState({
                sortFlag: false,
            })
        }

    }
    render() {
        console.log(this.highestPrice)
        console.log(this.lowestPrice)
        return (
            <>
                <Header />
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <div style={{ flex: '1', padding: '50px', display: 'flex', flexDirection: 'column' }}>
                        <h4>Order</h4>
                        <select name="sort" id="sort" onChange={this.sort}>
                            <option value="">Sort by</option>
                            <option value="mostRevelant">Most Relevant</option>
                            <option value="lowestPrice">Lowest Price</option>
                            <option value="highestPrice">Highest Price</option>
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
    getProducts: itemActions.getProducts,
    getColors: itemActions.getColors
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop)
