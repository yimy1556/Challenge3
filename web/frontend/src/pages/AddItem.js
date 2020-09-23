import React, { useState } from 'react';
import { connect } from 'react-redux';
import itemActions from '../redux/actions/itemActions'

const AddItem = (props) => {

    const [item, setItem] = useState({ title: '', description: '', photo: '', price: '', stock: '', type: '' })

    const readInput = e => {
        const value = e.target.name === 'photo' ? e.target.files[0] : e.target.value
        setItem({ ...item, [e.target.name]: value })
    }

    const sendInfo = async e => {
        e.preventDefault()
        if (item.title === '' || item.description === '' || item.price === '' || item.stock === '' || item.type === '') {

            alert('air can\'t be sold... yet')

        } else {

            const formItem = new FormData()
            formItem.append('title', item.title)
            formItem.append('description', item.description)
            formItem.append('photo', item.photo)
            formItem.append('price', item.price)
            formItem.append('stock', item.stock)
            formItem.append('type', item.type)
            
            console.log(formItem);
            await props.addItem(formItem)
        }
    }

    return (
        <main>
            <div id="divFormulario">
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '30%', margin: '5vh auto' }}>
                    <label>Title</label>
                    <input onChange={readInput} type='text' name='title' placeholder='Title' />
                    <label>Description</label>
                    <input onChange={readInput} type='text' name='description' placeholder='Description' />
                    <label >Photo</label>
                    <input onChange={readInput} type='file' name='photo' id="photo"/>
                    <label>Price $</label>
                    <input onChange={readInput} type='number' name='price' placeholder='Price' />
                    <label>Stock</label>
                    <input onChange={readInput} type='number' name='stock' placeholder='Stock' />
                    <label>Type</label>
                    <input onChange={readInput} type='text' name='type' placeholder='Type' />
                    <button onClick={sendInfo}>Send item</button>
                </div>
            </div>
        </main>
    )
    // input select(limited types)
}

const mapStateToProps = state => {
    return{
        item: state.itemReducer
    }
}

const mapDispatchToProps = {
    addItem: itemActions.addItem
}

export default connect(mapStateToProps, mapDispatchToProps)(AddItem)

// export default AddItem
