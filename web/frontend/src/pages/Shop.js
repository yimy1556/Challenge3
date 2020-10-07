import React, { useEffect, useState } from 'react'
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


const Shop = (props) => {

    const [state, setState] = useState(
        {
            list: props.products,
            viewList: false
        }
    )

    useEffect(() => {
        props.getProducts()
    }, [...props.products])

    const scrollToTop = () => {
        scroll.scrollToTop();
    }

    // Muestra productos de menor precio
    const lowestPrice = () => {
        var lowestPrice = props.products.sort(function (a, b) {
            return (a.price - b.price)
        })
        setState({
            list: lowestPrice
        })
    }

    // Muestra productos de mayor precio
    const highestPrice = (params) => {
        var highestPrice = props.products.sort(function (a, b) {
            return (b.price - a.price)
        })
        setState({
            list: highestPrice
        })
    }

    // Muestra productos de menor relevancia
    const lessRelevant = (params) => {
        var mostVisited = props.products.sort((a, b) => a.views - b.views)
        setState({
            list: mostVisited
        })
    }

    // Muestra productos de mayor relevancia
    const mostRelevant = (params) => {
        var lessVisited = props.products.sort((a, b) => b.views - a.views)
        setState({
            list: lessVisited
        })
    }

    // Muestra productos en forma de lista
    const viewList = (params) => {
        setState({
            ...state,
            viewList: true
        })
    }

    // Muestra productos en forma de modulos
    const viewModule = (params) => {
        setState({
            ...state,
            viewList: false
        })
    }
    console.log(state.list)
    return (
        <>
            <Header />
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'left', backgroundImage: `url(https://cdn.shopify.com/s/files/1/0238/2821/collections/HP_Hero_Banner_Blanco2_2020_2000x.jpg?v=1588902043)`, minWidth: '100%', height: '45vh', backgroundPosition: 'center 85%', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                <h2 style={{ color: 'whitesmoke', textAlign: 'left', fontSize: 'bold', fontWeight: '700', marginLeft: '2em', fontSize: '6vh' }}>ALL PRODUCTS</h2>
            </div>
            <div className="orderProducts" style={{ display: 'flex', justifyContent: 'space-around', verticalAlign: 'center' }}>
                <div style={{ flex: '1', padding: '7vh', display: 'flex', flexDirection: 'column' }}>
                    <h4>Order products</h4>

                    <button onClick={lowestPrice} className="orderButton">Lowest Price</button>
                    <button onClick={highestPrice} className="orderButton">Highest Price</button>
                    <button onClick={mostRelevant} className="orderButton">Most Relevant</button>
                    <button onClick={lessRelevant} className="orderButton">Less Relevant</button>
                    <div>
                        <ViewListIcon onClick={viewList} />
                        <ViewModuleIcon onClick={viewModule} />
                    </div>
                </div>

                <div id="paginaShop" style={{ flex: '8' }}>
                    <div id={!state.viewList && "todoShop"} >


                        {state.list.map(product => {
                            return (
                                <>
                                    <Product product={product} view={state.viewList} />
                                </>
                            )
                        })
                        }


                    </div>
                </div>
            </div>
            <ChatBotComponent />
            <Footer></Footer>
        </>
    )
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