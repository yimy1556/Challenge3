import React from 'react'
import { connect } from 'react-redux'
import itemActions from '../redux/actions/itemActions'
import itemReducer from '../redux/reducers/itemReducer'
import '../styles/shop.css'

class Shop extends React.Component {
    componentDidMount() {
        this.props.getProducts()
    }
    render() {
        console.log(this.props.products)

        return (
            <div id="paginaShop">
                <h2>All Products</h2>
                <div id="todoShop">
                    {this.props.products == 0 ? <p>no products yet</p> :
                        <>
                            {
                                this.props.products.map(product => {
                                    console.log(product)
                                    return (
                                        <div id="articulo">
                                            <h3>{product.title}</h3>
                                            <div id="imagenShop" style={{ backgroundImage: `url(${product.photo})`, width: '20vw', height: '20vh' }}></div>
                                            <p id="descripcionShop">{product.description}</p>
                                            <p id="precioShop">{product.price}$</p>
                                        </div>
                                    )
                                })
                            }
                        </>
                    }
                </div>
            </div>
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