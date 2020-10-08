import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import HeaderAdmin from '../components/HeaderAdmin';
import itemActions from '../redux/actions/itemActions'
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem'
import { toast } from 'react-toastify';
import swal from 'sweetalert';


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
        document.getElementById('formProduct').reset()
    }

    const sendInfo = async e => {
        e.preventDefault()
        if (item.title === '' || item.description === '' || item.photo === '' || item.price === '' || item.stock === '' || item.type === '') {

            swal({
                title:'Pyral',
                text: 'air can\'t be sold... yet',
                icon:'error',
                buttons: {
                    confirm: true,
                }
            })

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

            swal({
                title:'Pyral',
                text: 'air can\'t be sold... yet',
                icon:'error',
                buttons: {
                    confirm: true,
                }
            })

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
    const sizes = [
        {
            value: 'S',
            label: 'S',
        },
        {
            value: 'M',
            label: 'M',
        },
        {
            value: 'L',
            label: 'L',
        },
    ];
    const colors = [
        {
            value: 'White',
            label: 'White',
        },
        {
            value: 'Black',
            label: 'Black',
        },
        {
            value: 'Wine',
            label: 'Wine',
        },
        {
            value: 'DarkGrey',
            label: 'DarkGrey',
        },
        {
            value: 'Grey',
            label: 'Grey',
        },
        {
            value: 'Blush',
            label: 'Blush'
        },
        {
            value: 'Flint',
            label: 'Flint'
        },
        {
            value: 'Honeycomb',
            label: 'Honeycomb'
        },
        {
            value: 'Paloma',
            label: 'Paloma'
        },
        {
            value: 'Salt',
            label: 'Salt'
        },
        {
            value: 'Sage',
            label: 'Sage'
        },
        {
            value: 'Anchor',
            label: 'Anchor'
        },
        {
            value: 'Red Rum',
            label: 'Red Rum'
        },
        {
            value: 'Golden Harvest',
            label: 'Golden Harvest'
        },
        {
            value: 'Military Moss',
            label: 'Military Moss'
        },
        {
            value: 'Egg Shell',
            label: 'Egg Shell'
        }

    ];

    return (
        <>
            <HeaderAdmin />
            <main>
                <h2 style={{ textAlign: 'center' }}>Add a new item</h2>
                <div>
                    <form id='formProduct' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '35%', margin: '3vh auto' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                            <div> <input type="radio" onChange={readInput} id="newProduct" name="newProduct" value={true}></input>New Product</div>
                            <div>  <input type="radio" onChange={readInput} id="newProduct" name="newProduct" value={false}></input>New Variant</div>
                        </div>
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
                            <TextField id="title" label="Title" name='title' onChange={readInput} />

                        }
                        {item.newProduct == "true" &&
                            <>
                                <TextField id="description" label="Description" name='description' onChange={readInput} />
                            </>
                        }
                        <label htmlFor="photo">Photo</label>
                        <input onChange={readInput} type='file' name='photo' placeholder='photo' id="photo" />
                        {item.newProduct == "true" &&
                            <>
                                <TextField id="price" label="Price" name='price' onChange={readInput} />
                            </>
                        }
                        <TextField id="stock" label="Stock" name='stock' type='number' onChange={readInput} />

                        <TextField
                            id="size"
                            name="size"
                            select
                            label="Size"

                            onChange={readInput}
                        >
                            {sizes.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField >
                        <TextField
                            id="color"
                            name="color"
                            select
                            label="Color"
                            onChange={readInput}
                        >
                            {colors.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField >
                        {item.newProduct == "true" ? <button onClick={sendInfo} >Send item</button> : <button onClick={putVariant}>Send variant</button>}
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
