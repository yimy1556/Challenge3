import React from 'react'
import { connect } from 'react-redux'
import itemActions from '../redux/actions/itemActions'
import '../styles/shop.css'
import Header from '../components/Header'
import banner from '../images/bannerShop.jpg'
import Product from '../pages/Product'
import Footer from '../components/Footer'
import { animateScroll as scroll } from 'react-scroll'
import ChatBotComponent from '../components/ChatBotComponent'
import ViewListIcon from '@material-ui/icons/ViewList';
import ViewModuleIcon from '@material-ui/icons/ViewModule';

class Shop extends React.Component {
    state = {
        list: this.props.products,
        viewList: false
    }

    async componentDidMount() {
        this.scrollToTop()
        this.props.getProducts()

    }

    scrollToTop() {
        scroll.scrollToTop();
    }

    // Muestra productos de menor precio
    lowestPrice = () => {
        var lowestPrice = this.props.products.sort(function (a, b) {
            return (a.price - b.price)
        })
        this.setState({
            list: lowestPrice
        })
    }

    // Muestra productos de mayor precio
    highestPrice = (params) => {
        var highestPrice = this.props.products.sort(function (a, b) {
            return (b.price - a.price)
        })
        this.setState({
            list: highestPrice
        })
    }

    // Muestra productos de menor relevancia
    lessRelevant = (params) => {
        var mostVisited = this.props.products.sort((a, b) => a.views - b.views)
        this.setState({
            list: mostVisited
        })
    }

    // Muestra productos de mayor relevancia
    mostRelevant = (params) => {
        var lessVisited = this.props.products.sort((a, b) => b.views - a.views)
        this.setState({
            list: lessVisited
        })
    }

    // Muestra productos en forma de lista
    viewList = (params) => {
        this.setState({
            viewList: true
        })
    }

    // Muestra productos en forma de modulos
    viewModule = (params) => {
        this.setState({
            viewList: false
        })
    }

    render() {
        console.log(this.state)

        return (
            <>
                <Header />
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', backgroundImage: `url(${banner})`, width: '100%', height: '45vh', backgroundPosition: 'center 35%', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                    <h2 style={{ color: 'white', textAlign: 'center', fontSize: 'bold' }}>ALL PRODUCTS</h2>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-around', verticalAlign: 'center' }}>
                    <div style={{ flex: '1', padding: '50px', display: 'flex', flexDirection: 'column' }}>
                        <h4>Order products</h4>

                        <button onClick={this.lowestPrice} className="orderButton">Lowest Price</button>
                        <button onClick={this.highestPrice} className="orderButton">Highest Price</button>
                        <button onClick={this.mostRelevant} className="orderButton">Most Relevant</button>
                        <button onClick={this.lessRelevant} className="orderButton">Less Relevant</button>
                        <div>
                            <ViewListIcon onClick={this.viewList} />
                            <ViewModuleIcon onClick={this.viewModule} />
                        </div>
                    </div>

                    <div id="paginaShop" style={{ flex: '8' }}>
                        <div id={!this.state.viewList && "todoShop"} >
                            {this.props.products == 0 ? <p>no products yet</p> :
                                <>
                                    {this.state.list.map(product => {
                                        return (
                                            <>
                                                <Product product={product} view={this.state.viewList} />
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

}

export default connect(mapStateToProps, mapDispatchToProps)(Shop)
