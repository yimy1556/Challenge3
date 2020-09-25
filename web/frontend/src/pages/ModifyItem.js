import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import HeaderAdmin from '../components/HeaderAdmin';
import itemActions from '../redux/actions/itemActions'

const Delete = props => {

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

    const changeVariant = async e => {
        e.preventDefault()
        if (item.title === '' || item.description === '' || item.photo === '' || item.price === '' || item.stock === '' || item.type === '') {

            alert('air can\'t be sold... yet')
        } else {

            const fd = new FormData()
            fd.append('title', item.title)
            fd.append('description', item.description)
            fd.append('photo', item.photo)
            fd.append('price', item.price)
            fd.append('stock', item.stock)
            fd.append('color', item.color)
            fd.append('size', item.size)

            await props.addItem(fd)
            resetForm()
        }
    }
    console.log(item)

    return (
        <>
            <HeaderAdmin />

            <h1 style={{ textAlign: 'center' }}>Modify a item</h1>
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

                    <label>Description</label>
                    <input onChange={readInput} type='text' name='description' placeholder='Description' />


                    <label htmlFor="photo">Photo</label>
                    <input onChange={readInput} type='file' name='photo' placeholder='Photo' />


                    <label>Price $</label>
                    <input onChange={readInput} type='number' name='price' placeholder='Price' />


                    <label>Stock</label>
                    <input onChange={readInput} type='number' name='stock' placeholder='Stock' />
                    <label>Size</label>
                    <select name="size" id="size" onChange={readInput} className="text-center col-6"
                    >
                        <option value={-1} className="text-center">
                            Choose your article
                         </option>
                        {props.products.map(product => {
                            return (
                                <option>{product.variants.size}</option>
                            )
                        })}
                    </select>
                    <label>Color</label>
                    <select name="color" id="color" onChange={readInput}>
                        <option >Choose the color</option>
                        <option>White</option>
                        <option>Black</option>
                        <option>Blue</option>
                        <option>Red</option>
                        <option>Green</option>
                    </select>
                    <button onClick={changeVariant}>Send Change</button>
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
    addItem: itemActions.addItem,
    putVariant: itemActions.putVariant,
    getProducts: itemActions.getProducts
}

export default connect(mapStateToProps, mapDispatchToProps)(Delete)

// export default AddItem
