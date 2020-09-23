import React from 'react'
import itemActions from '../redux/actions/itemActions'
import {connect} from 'react-redux'



class SelectProduct extends React.Component {

    state = {
        selectProduct:null
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

    render(){
     

        if (this.state.selectProduct === null) {
            return null
        } else if (this.state.selectProduct !== null) {
            var title = this.state.selectProduct.title
            var price = this.state.selectProduct.price
        }

        console.log(this.state.selectProduct)
        console.log(title)
        console.log(price)
        return(
            <>
            <div>
        <p>{title}</p>
        <p>${price}</p>
            </div>
            </>
        )
    }
}

const mapDispatchToProps = {
    selectProductId: itemActions.selectProductId 
}



export default connect(null, mapDispatchToProps)(SelectProduct)