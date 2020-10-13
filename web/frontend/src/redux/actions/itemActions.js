import axios from 'axios'
import { toast } from 'react-toastify';
import swal from 'sweetalert';
var path = `https://pyral.herokuapp.com/api`

const itemActions = {

    addItem: formItem => {

        return async (dispatch, getState) => {
            const response = await axios.post(path + `/product/addProduct`, formItem, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            if (!response.data.success) {
                alert('Something went wrong')
            } else {
                swal({
                    title: 'Pyral',
                    text: 'The product was uploaded successfully!',
                    buttons: {
                        confirm: true,
                    }
                })
            }
        }
    },
    getProducts: () => {
        return async (dispatch, getState) => {
            const { listProduct } = getState().shoppingCartReducer
            if (listProduct.length !== 0) {
                return
            }

            const response = await axios.get(path + `/product/getProducts`);
            var info = response.data;

            localStorage.setItem("listProduct", JSON.stringify(info.product))
            localStorage.setItem("shopCart", JSON.stringify([]))
            dispatch({
                type: 'ADD_ITEM',
                payload: info.product
            })
        }
    },

    getCountries: () => {
        return async (dispatch, getState) => {
            const response = await axios.get('https://ancient-brushlands-16914.herokuapp.com/api/countries')
            var info = response.data
            dispatch({
                type: 'GET_COUNTRIES',
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
            return response
        }
    },
    deleteItem: (product) => {
        return async (dispatch, getState) => {

            const response = await axios.put(path + `/product/deleteProduct`, product)
        }
    },
    modifyVariant: async (product) => {
        return async (dispatch, getState) => {
            const response = await axios.put(path + `/product/modifyProduct`, { product })
        }
    },
    modifyProduct: (product) => async (dispatch, getState) => {
        const response = await axios.put(`${path}/product/modifyProduct`, { ...product })
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
    },
    upViews: (productId) => {
        return async (dispatch, getState) => {
            const response = await axios.get(path + '/viewsProduct/' + productId)
            dispatch({
                type: 'UP_VIEWS'
            })
        }
    },
    rating: (productId, stars) => {

        return async (dispatch, getState) => {
            const response = await axios.post(path + `/product/ratingProduct`, { productId, stars })
            if (!response.data.success) {
                swal('Something went wrong')
            } else {
                dispatch({
                    type: 'RATING',
                    payload: { rating: response.data.rating }
                })
                toast.dark(
                    'Rating sent',
                    { autoClose: 4000, }

                )
            }
        }
    },
}

export default itemActions
//Up views by product
