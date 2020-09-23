import React from 'react'
import itemActions from '../redux/actions/itemActions'
import {connect} from 'react-redux'



class SelectProduct extends React.Component {

    async componentDidMount() {
        const productId = this.props.match.params.id
        const response = await this.props.selectProductId(productId)
        console.log(response)
    }

    render(){
        return(

            <>
            </>
        )
    }
}

const mapDispatchToProps = {
    selectProductId: itemActions.selectProductId 
}



export default connect(null, mapDispatchToProps)(SelectProduct)