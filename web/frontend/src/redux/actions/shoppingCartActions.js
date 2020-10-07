import axios from 'axios'
var path = `http://localhost:4000/api`

const key1 = ['_id', 'size', 'color']
const key2 = ['size', 'color']


const sonIguales = (prod1, prod2, keyProc) => {
    let condicion = true
    keyProc.forEach(key => {
        if (!condicion) return
        condicion = prod1[key] === prod2[key]
    })
    return condicion
}

const updateLocal = (listProduct, carrito) => {
    localStorage.removeItem("listProduct")
    localStorage.removeItem("carrito")
    localStorage.setItem("listProduct", JSON.stringify(listProduct))
    localStorage.setItem("carito", JSON.stringify(carrito))
}

const modificarCant = (prodMo, listProduct, cant = 1) => {
    let posi = listProduct.indexOf(prodMo)
    listProduct[posi].cant = listProduct[posi].cant + cant
}

const updateProduct = (product, listProduct, cant) => {
    let productUpdate = listProduct.filter(prod => prod._id === product._id)[0]
    let pos = listProduct.indexOf(productUpdate)
    const varientsUpdate = listProduct[pos].variants
    productUpdate = varientsUpdate.filter(varie => sonIguales(varie, product, key2))[0]
    pos = varientsUpdate.indexOf(productUpdate)
    varientsUpdate[pos].stock = Number(varientsUpdate[pos].stock) + cant
}

const shoppingCartActions = {
    addProduct: (prod) => (dispatch, getState) => {
        const { product } = getState().itemReducer
        const { listProduct } = getState().shoppingCartReducer
        const pertenece = listProduct.filter(produ => sonIguales(produ, prod, key1))
        if (pertenece.length !== 0)
            modificarCant(pertenece[0], listProduct)
        else
            listProduct.push(prod)
        updateProduct(prod, product, -1)
        updateLocal(product, listProduct)
        prod.cant = 1
    },
    updateQuantity: (prod, cant) => (dispatch, getState) => {
        const { product } = getState().itemReducer
        const { listProduct } = getState().shoppingCartReducer
        updateProduct(prod, product, -cant)
        modificarCant(prod, listProduct, cant)
        updateLocal(product, listProduct)
    },
    removeProduct: (prod) => (dispatch, getState) => {
        const { product } = getState().itemReducer
        updateProduct(prod, product, prod.cant)
        const { listProduct } = getState().shoppingCartReducer
        const updateListProduct = listProduct.filter(produ => produ !== prod)
        updateLocal(product, updateListProduct)
        dispatch({
            type: 'REMOVE_PRODUCT',
            payload: updateListProduct
        })
    },
    removeListProduct: () => (dispatch, getState) => {
        dispatch({
            type: 'REMOVE_LIST_PRODUCT'
        })
    },
    finishBuying: () => async (dispatch, getState) => {
        const { listProduct } = getState().shoppingCartReducer
        const response = await axios.put(path + `/finishBuying`, { listProduct })
        dispatch({ type: 'ADD_PRODUCT', })
    },
    forcedCart: (cart) => (dispatch, getState) => {
        const cartParse = JSON.parse(cart)
        dispatch({
            type: 'REMOVE_PRODUCT',
            payload: cartParse
        })

    }
}

export default shoppingCartActions
