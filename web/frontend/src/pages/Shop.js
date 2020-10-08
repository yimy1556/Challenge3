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
import shopNow from '../images/shopNow.jpg'

const Shop = (props) => {

    const [state, setState] = useState(
        {
            list: props.products,
            viewList: false
        }
    )
    const [render, setRender] = useState(true)
    useEffect(() => {
        props.getProducts()
        scrollToTop()
    }, [])

    const scrollToTop = () => {
        scroll.scrollToTop();
    }

    // Muestra productos de menor precio
    const lowestPrice = () => {
        var lowestPrice = props.products.sort(function (a, b) {
            return (a.price - b.price)
        })
        setRender(!render)
        setState({
            list: lowestPrice
        })

    }

    // Muestra productos de mayor precio
    const highestPrice = (params) => {
        var highestPrice = props.products.sort(function (a, b) {
            return (b.price - a.price)
        })
        setRender(!render)
        setState({
            list: highestPrice
        })
    }

    // Muestra productos de menor relevancia
    const lessRelevant = (params) => {
        var mostVisited = props.products.sort((a, b) => a.views - b.views)
        setRender(!render)
        setState({
            list: mostVisited
        })
    }

    // Muestra productos de mayor relevancia
    const mostRelevant = (params) => {
        var lessVisited = props.products.sort((a, b) => b.views - a.views)
        setRender(!render)
        setState({
            list: lessVisited
        })
    }
    // Mas de 50 dolares
    const moreThanEighty = () => {
        var filterEighty = props.products.filter(product => product.price > 80)
        setRender(!render)
        setState({
            list: filterEighty
        })
    }
    // Mas de 50 dolares
    const untilSeventy = () => {
        var untilSeventy = props.products.filter(product => product.price < 70)
        setRender(!render)
        setState({
            list: untilSeventy
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



    return (
        <>
            <Header />
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'left', backgroundImage: `url(https://cdn.shopify.com/s/files/1/0238/2821/collections/HP_Hero_Banner_Blanco2_2020_2000x.jpg?v=1588902043)`, minWidth: '100%', height: '45vh', backgroundPosition: 'center 85%', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                <h2 style={{ color: 'whitesmoke', textAlign: 'left', fontSize: 'bold', fontWeight: '700', marginLeft: '2em', fontSize: '6vh' }}>ALL PRODUCTS</h2>
            </div>
            <div className="orderProducts" style={{ display: 'flex', justifyContent: 'space-around', verticalAlign: 'center' }}>
                <div style={{ flex: '1', padding: '10vh 2vw 2vh 4vw', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid grey', justifyContent: 'space-between' }}>
                        <h4 style={{ color: '#1E1E1E' }}>Filter</h4>
                        <div>
                            <ViewListIcon onClick={viewList} />
                            <ViewModuleIcon onClick={viewModule} />
                        </div>
                    </div>
                    <span onClick={mostRelevant} className="orderFilter">Most Relevant</span>
                    <span onClick={lessRelevant} className="orderFilter">Less Relevant</span>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <h4 style={{ borderBottom: '1px solid grey', color: '#1E1E1E' }}>Price</h4>

                        <span onClick={lowestPrice} className="orderFilter">Lowest Price</span>
                        <span onClick={highestPrice} className="orderFilter">Highest Price</span>
                        <span onClick={untilSeventy} className="orderFilter">Until $70</span>
                        <span onClick={moreThanEighty} className="orderFilter">More than $80</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <h4 style={{ borderBottom: '1px solid grey', color: '#1E1E1E' }}>Ranking</h4>

                        <span onClick={lowestPrice} className="orderFilter">Most value</span>
                        <span onClick={highestPrice} className="orderFilter">Less value</span>
                    </div>
                    <div>
                        <img className="imgShop" src={shopNow} style={{ width: '100%', paddingTop: '3em' }}>
                        </img>
                    </div>
                </div>

                <div id="paginaShop" style={{ flex: '5', paddingTop: '15vh 0' }}>
                    <div id={!state.viewList && "todoShop"} >


                        {state.list.map(product => {
                            return (
                                <>
                                    <Product product={product} render={render} view={state.viewList} />
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