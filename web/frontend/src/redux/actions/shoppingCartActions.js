/*import axios from 'axios'
var path = 'http://localhost:4000/api'*/

// product tiene que ser un 
// objeto que tiene 
// {
//  _id: product,
//  talle: variedad_product,
//  color:  variedad_product
//  canti:
//}

const shoppingCartActions = {
    addProduct: (product) => (dispatch, getState) => {
        const {products} = getState().itemReducer
        const {listProduct}  = getState().shoppingCartActions
        let pos =  listProduct.indexOf(product)
        if(pos !== -1)
            listProduct[pos].cant++
        else
            listProduct.push(product)
        pos = products.indexOf((products.filter(prod => prod._id === product._id)[0]))
        const {talle, color, stock} = product
        let pos2 = products[pos].variant.indexOf({talle, color, stock})
        product[pos].variant[pos2].stock--
        dispatch({type:'addProduct', payload: listProduct}) 
    },
    removeProduct:(product) => (dispatch, getState) => {
        const {products} = getState().itemReducer
        const {listProduct} =  getState().shoppingCartActions
        let pos = listProduct.indexOf(product)
        listProduct[pos].cant--
        pos = products.indexOf(((products.filter(prod => prod._id === product._ud))[0]))
        const {talle, color, stock} = product
        let pos2 = products[pos].variant.indexOf({talle,color,stock})
        if(products[pos].variant[pos2].stock !== 0)
            products[pos].variant[pos2].stock-- 
        dispatch({type: 'REMOVE_PRODUCT',payload: listProduct})
    },
    finishBuying: () => (dispatch, getState) => {
        /// agregar alerta     
        dispatch({type:'FINISH', payload: []})
    }
}

export default shoppingCartActions
