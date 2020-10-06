import axios from 'axios'
import swal from 'sweetalert';
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
                swal({
                    title:'Pyral',
                    text: 'The product was uploaded successfully!',
                    buttons: {
                        confirm: true,
                    }
                })
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

            const response = await axios.get(path + `/product/getProducts`);
            var info = response.data;
            console.log(info);

            localStorage.setItem("listProduct", JSON.stringify(info.product))
            localStorage.setItem("carito", JSON.stringify([]))
            dispatch({
                type: 'ADD_ITEM',
                payload: info.product
            })
        }
    },
    
    getCountries: () => {
        return async (dispatch, getState) => {
            const response = await axios.get('https://quiet-savannah-25909.herokuapp.com/api/countries')
            var info = response.data
            console.log(info)
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
            console.log(response.data);
            if (!response.data.success) {
                swal('Something went wrong')
            } else {
                dispatch({
                    type: 'RATING',
                    payload: {  rating: response.data.rating }
                })
                swal('Rating mandado')
            }
        }
    },
}

export default itemActions
//Up views by product
