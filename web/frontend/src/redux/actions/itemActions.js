import axios from 'axios'

var path = `http://localhost:4000/api`

const itemActions = {

    addItem: formItem => {

        return async (dispatch, getState) => {
            const response = await axios.post(path + `/product/addProduct`, formItem, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            // const item = response.data
            if (!response.data.success) {
                alert('Something went wrong')
            } else {
                alert('the product was uploaded successfully')
                // dispatch({
                //     type: 'ADD_ITEM',
                //     payload: { title: item.title, description: item.description, photo: item.photo, price: item.price, stock: item.stock, type: item.type }
                // })
            }
        }
    },
    getProducts: () => {
        return async (dispatch, getState) => {
            const { listProduct } = getState().shoppingCartReducer
            if (listProduct.length !== 0) {
                console.log(911)
                return
            }
            console.log('ssdsdw')
            const response = await axios.get(path + `/product/getProducts`);
            const info = response.data;
            console.log(info.product, 'yimyyy')
            localStorage.setItem("listProduct", JSON.stringify(info.product))
            localStorage.setItem("carito", JSON.stringify([]))
            dispatch({
                type: 'ADD_ITEM',
                payload: info.product
            })
        }
    },
    getColors: () => {
        return async (dispatch, getState) => {
            const response = await axios.get('http://127.0.0.1:5000/colors')
            console.log(response)
        }
    },
    putVariant: (formItem) => {
        return async (dispatch, getState) => {
            const response = await axios.put(path + `/product/addProduct`, formItem, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
        }
    },
    deleteItem: (product) => {
        console.log(product)
        return async (dispatch, getState) => {

            const response = await axios.put(path + `/product/deleteProduct`, product)
        }
    },
    modifyVariant: async (product) => {
        return async (dispatch, getState) => {
            const response = await axios.put(path + `/product/modifyProduct`, { product })
        }
    },  
    modifyProduct : (product) => async (dispatch,getState) => {
        const response = await axios.put(`${path}/product/modifyProduct`,{...product})
    },
    selectProductId: (productId) => async (dispatch, getState) => {
        const { product } = getState().itemReducer
        const prod = product.filter(pro => pro._id === productId)
        return (prod[0])
    },
    forcedPoducts: (products) => (dispatch, getState) => {
        const productsParse = JSON.parse(products)
        dispatch({
            type: 'ADD_ITEM',
            payload: productsParse
        })
    }
}

export default itemActions
