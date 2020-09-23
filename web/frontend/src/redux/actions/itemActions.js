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
            const response = await axios.get(path + `/product/getProducts`);
            const info = response.data;
            console.log(info)
            dispatch({
                type: 'ADD_ITEM',
                payload: info
            })
        }
    },
    setProduct: (x,content) => {
        return async (dispatch, getState) => {
            const response = await axios.put(path + `/product/addProducts`, { x, content })
            dispatch({
                type: 'ADD_ITEM',
                payload: response.data
            })
        }
    },
}

export default itemActions