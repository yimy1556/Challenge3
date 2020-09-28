import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import HeaderAdmin from '../components/HeaderAdmin';
import itemActions from '../redux/actions/itemActions'

const AddItem = props => {

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

    const sendInfo = async e => {
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
    const putVariant = async e => {
        e.preventDefault()
        if (item.title === '' || item.photo === '' || item.stock === '' || item.color === '') {

            alert('air can\'t be sold... yet')

        } else {

            const formItem = new FormData()
            formItem.append('title', item.title)
            formItem.append('photo', item.photo)
            formItem.append('stock', item.stock)
            formItem.append('color', item.color)
            formItem.append('size', item.size)

            await props.putVariant(formItem)
        }
    }
    console.log(item)

    return (
        <>
            <HeaderAdmin />
            <main>
                <h1 style={{ textAlign: 'center' }}>Add a new item</h1>
                <div id="divFormulario">
                    <form id='form' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '30%', margin: '5vh auto' }}>
                        <div id="radioContainer">
                            <input type="radio" onChange={readInput} id="newProduct" name="newProduct" value={true}></input>New Product
                        <input type="radio" onChange={readInput} id="newProduct" name="newProduct" value={false}></input>New Variant
                    </div>
                        <label>Title</label>
                        {item.newProduct == "false" ?
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
                            </select> :
                            <input onChange={readInput} type='text' name='title' placeholder='Title' />
                        }
                        {item.newProduct == "true" &&
                            <>
                                <label>Description</label>
                                <input onChange={readInput} type='text' name='description' placeholder='Description' />
                            </>
                        }
                        <label htmlFor="photo">Photo</label>
                        <input onChange={readInput} type='file' name='photo' placeholder='Photo' />
                        {item.newProduct == "true" &&
                            <>
                                <label>Price $</label>
                                <input onChange={readInput} type='number' name='price' placeholder='Price' />
                            </>
                        }
                        <label>Stock</label>
                        <input onChange={readInput} type='number' name='stock' placeholder='Stock' />
                        <label>Size</label>
                        <select name="size" id="size" onChange={readInput}>
                            <option >Choose the size</option>
                            <option>S</option>
                            <option>M</option>
                            <option>L</option>
                        </select>
                        <label>Color</label>
                        <select name="color" id="color" onChange={readInput}>
                            <option >Choose the color</option>
                            <option>White</option>
                            <option>Black</option>
                            <option>DarkGrey</option>
                            <option>Grey</option>
                            <option>Wine</option>
                            <option>Cream</option>
                        </select>
                        {item.newProduct == "true" ? <button onClick={sendInfo}>Send item</button> : <button onClick={putVariant}>Send variant</button>}
                    </form>
                </div>
            </main>
        </>
    )
    // input select(limited types)
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

export default connect(mapStateToProps, mapDispatchToProps)(AddItem)

// export default AddItem
