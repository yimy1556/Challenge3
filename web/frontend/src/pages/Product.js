import React from 'react'
import { NavLink } from 'react-router-dom'


class Product extends React.Component {

    render() {
        console.log(this.props)
        return (
            <>
                <NavLink to={`./selectProduct/${this.props.product._id}`}>
                    <h1>{this.props.product.title}</h1>
                    <div style={{ backgroundImage: `url(${this.props.product.photo})`, width: '20vw', height: '20vh' }}></div>
                </NavLink>
            </>
        )
    }
}

export default Product