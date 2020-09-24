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
            const item = response.data
            if (!response.data.success) {
                alert('Something went wrong')
            } else {
                dispatch({
                    type: 'ADD_ITEM',
                    payload: { title: item.title, description: item.description, photo: item.photo, price: item.price, stock: item.stock, type: item.type }
                })
            }
        }
    },
    getProducts: () => {
        return async (dispatch, getState) => {
            const {listProduct} = getState().shoppingCartReducer
            if(listProduct.length !== 0) return
            const response = await axios.get(path + `/product/getProducts`);
            const info = response.data;
            dispatch({
                type: 'ADD_ITEM',
                payload: info
            })
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

    selectProductId: (productId) => {

        return async (dispatch, getState) => {
            const response = await axios.get(path + `/selectProduct/${productId}`)
            const product = response.data.response
            return (product)
        }
    },

}

export default itemActions
