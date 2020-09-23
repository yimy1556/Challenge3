import React from 'react'
import { connect } from 'react-redux'
import itemActions from '../redux/actions/itemActions'
import itemReducer from '../redux/reducers/itemReducer'
import { NavLink } from 'react-router-dom'
import Product from '../pages/Product'


class Shop extends React.Component {
    
    componentDidMount() {
        this.props.getProducts()
    }
    render() {
        return (
            <>
                {this.props.products == 0 ? <p>no products yet</p> :
                    <>
                        {
                            this.props.products.map(product => {
                                return (
                                    <>
                                       <Product product={product}/>
                                    </>
                                )
                            })
                        }
                    </>
                }
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