import React from 'react'
import { connect } from 'react-redux'
import itemActions from '../redux/actions/itemActions'
import '../styles/shop.css'
import Header from '../components/Header'
import Product from '../pages/Product'


class Shop extends React.Component {

    componentDidMount() {
        this.props.getProducts()
    }
    render() {
        return (
            <>
                <Header />
                <div id="paginaShop">
                    <h2>All Products</h2>
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
