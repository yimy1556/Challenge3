import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import HeaderAdmin from '../components/HeaderAdmin';
import itemActions from '../redux/actions/itemActions'

const DeleteItem = props => {

    const [item, setItem] = useState({ title: '', description: '', photo: '', price: '', stock: '', size: '', color: '', newProduct: "true" })

    const readInput = e => {
        const value = e.target.name === "photo" ? e.target.files[0] : e.target.value
        setItem({ ...item, [e.target.name]: value })
    }
    useEffect(async () => {
        await props.getProducts()
    }, [])

    const resetForm = () => {
        document.getElementById('form').reset()
    }

    const DeleteItem = async e => {
        e.preventDefault()
        if (item.title === '') {

            alert('air can\'t be delete... yet')
        } else {
            await props.deleteItem(item.title)

        }
    }
    console.log(item)
    return (
        <>
            <HeaderAdmin />

            <h1 style={{ textAlign: 'center' }}>Delete a item</h1>
            <div id="divFormulario">
                <form>
                    <label>Title</label>

                    <select name="title" id="title" onChange={readInput} className="text-center col-6"
                    >
                        <option className="text-center">
                            Choose your article
                         </option>
                        {props.products.map(product => {
                            return (
                                <option>{product.title}</option>
                            )
                        })}
                    </select>
                    <button onClick={DeleteItem}>Delete Item</button>
                </form>
            </div>

        </>
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.itemReducer.product
    }
}

const mapDispatchToProps = {
    deleteItem: itemActions.deleteItem,
    getProducts: itemActions.getProducts
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteItem)

// export default AddItem
