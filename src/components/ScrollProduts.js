import React from 'react'
import { connect } from 'react-redux'
import Product from '../pages/Product'
import '../styles/shop.css'

const ScrollProducts = (props) => {
    return (
        <div  style={{display:'flex' ,justifyContent:'center'}} >
            <div className="scrollProduts" style={{display: 'flex',overflowX: 'scroll',width:'94%'}} >
                {props.products.map(product => <div><Product product={product} selectProduct={true}/></div>)}
            </div>    
        </div>            
    );
}

const mapStateToProps = (state) => {
    return {
        products: state.itemReducer.product
    }
}

export default connect(mapStateToProps)(ScrollProducts)
