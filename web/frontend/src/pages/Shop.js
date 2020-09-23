import React from 'react'
import { connect } from 'react-redux'
import itemActions from '../redux/actions/itemActions'
import itemReducer from '../redux/reducers/itemReducer'

class Shop extends React.Component {
    componentDidMount() {
        this.props.getProducts()
    }
    render() {
        console.log(this.props.products)

        return (
            <>
                {this.props.products == 0 ? <p>no products yet</p> :
                    <>
                        {
                            this.props.products.map(product => {
                                return (
                                    <>
                                        <h1>{product.title}</h1>
                                        <div style={{ backgroundImage: `url(${product.photo})`, width: '20vw', height: '20vh' }}></div>
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