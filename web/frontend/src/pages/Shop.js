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
        list: this.props.products
    }

    async componentDidMount() {
        this.scrollToTop()
        this.props.getProducts()
        this.props.getColors()
    }

    scrollToTop() {
        scroll.scrollToTop();
    }

    lowestPrice = () => {
        var lowestPrice = this.props.products.sort(function (a, b) {
            return (a.price - b.price)
        })
        console.log('hola')
        this.setState({
            list: lowestPrice
        })
    }
    highestPrice = (params) => {
        var highestPrice = this.props.products.sort(function (a, b) {
            return (b.price - a.price)
        })
        console.log('hola')
        this.setState({
            list: highestPrice
        })
    }
    lessRelevant = (params) => {
        var mostVisited = this.props.products.sort((a, b) => a.views - b.views)
        console.log('hola')
        this.setState({
            list: mostVisited
        })
    }
    mostRelevant = (params) => {
        var lessVisited = this.props.products.sort((a, b) => b.views - a.views)
        console.log('hola')
        this.setState({
            list: lessVisited
        })
    }
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


        return (
            <>
                <Header />
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <div style={{ flex: '1', padding: '50px', display: 'flex', flexDirection: 'column' }}>
                        <h4>Order</h4>

                        <button onClick={this.lowestPrice}>Lowest Price</button>
                        <button onClick={this.highestPrice}>Highest Price</button>
                        <button onClick={this.mostRelevant}>most Relevant</button>
                        <button onClick={this.lessRelevant}>less Relevant</button>
                    </div>
                    <div id="paginaShop" style={{ flex: '8' }}>
                        <h2 style={{ color: 'black' }}>All Products</h2>
                        <div id="todoShop">
                            {this.props.products == 0 ? <p>no products yet</p> :
                                <>
                                    {this.state.list.map(product => {
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
        products: state.itemReducer.product,
    }
}
const mapDispatchToProps = {
    getProducts: itemActions.getProducts,
    getColors: itemActions.getColors
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop)
