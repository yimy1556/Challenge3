/*import axios from 'axios'
var path = 'http://localhost:4000/api'*/

const sonIguales = (prod1,prod2) => {
let keyProc = ['_id','size','color'] 
    let condicion = true
    keyProc.forEach(key => {
        if(!condicion) return
        condicion = prod1[key] === prod2[key]
    })
    return condicion
}

const modificarCant = (prodMo, listProduct, cant = 1) => {

   let posi =  listProduct.indexOf(prodMo) 
   listProduct[posi].cant = listProduct[posi].cant + cant
}


const shoppingCartActions = {
    addProduct: (prod) => (dispatch, getState) => {
        /**const {product} = getState().itemReduce*/
        const {listProduct} = getState().shoppingCartReducer
        const pertenece = listProduct.filter(produ => sonIguales(produ,prod))
        if(pertenece.length !== 0){
            modificarCant(pertenece[0],listProduct)
            return
        }
        listProduct.push(prod)  
        prod.cant=1
    },
    updateQuantity: (product, cant) => (dispatch, getState) => {
        const {listProduct} =  getState().shoppingCartReducer
        modificarCant(product, listProduct, cant)
        console.log('pase por aqui')
    },
    removeProduct:(product) => (dispatch, getState) => {
        const {listProduct} = getState().shoppingCartReducer
        dispatch({
            type:'REMOVE_PRODUCT',
            payload:listProduct.filter(prod => prod !== product)
        })
    },

    finishBuying: () => (dispatch, getState) => {
        /// agregar alerta     
        dispatch({type:'FINISH', payload: []})
    }
}

export default shoppingCartActions
