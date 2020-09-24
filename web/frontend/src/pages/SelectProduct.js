import React from 'react'
import itemActions from '../redux/actions/itemActions'
import { connect } from 'react-redux'
import Footer from '../components/Footer'
import Header from '../components/Header'

class SelectProduct extends React.Component {

    state = {
        selectProduct: null
    }

    async componentDidMount() {
        const productId = this.props.match.params.id
        const response = await this.props.selectProductId(productId)
        console.log(response)
        this.setState({
            ...this.state,
            selectProduct: response.product
        })
    }

    render() {

        
        if (this.state.selectProduct === null) {
            return null
        } else if (this.state.selectProduct !== null) {
            var title = this.state.selectProduct.title
            var description = this.state.selectProduct.description
            var price = this.state.selectProduct.price
            var variants = this.state.selectProduct.variants
        }


        console.log(variants)
        return (
            <>
            <Header/>
                {variants.map(variant => {
                    return (
                        <div id="articulo">
                        <h3>{title}</h3>
                        <div id="imagenShop" style={{ backgroundImage: `url(${variant.photo})`, width: '20vw', height: '20vh' }}></div>
                        <p id="descripcionShop">{description}</p>
                        <p id="precioShop">{price}$</p>
                        <p id="colorShop">{variant.color}</p>
                    </div>
                    )
                })}
                <Footer></Footer>
            </>

        )
    }
}

const mapDispatchToProps = {
    selectProductId: itemActions.selectProductId
}



export default connect(null, mapDispatchToProps)(SelectProduct)