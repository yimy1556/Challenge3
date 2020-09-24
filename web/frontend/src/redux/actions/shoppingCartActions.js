/*import axios from 'axios'
var path = 'http://localhost:4000/api'*/


// product tiene que ser un 
// objeto que tiene 
// {
//  _id: product,
//  talle: variedad_product,
//  color:  variedad_product,
//  canti:;
//}

const sonIguales = (prod1,prod2) => {
let keyProc = ['_id','size','color'] 
    let condicion = true
    keyProc.forEach(key => {
        if(!condicion) return
        condicion = prod1[key] === prod2[key]
    })
    return condicion
}

const modificarCant = (prodMo, listProduct) => {
   let posi =  listProduct.indexOf(prodMo) 
   listProduct[posi].cant++ 
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
        dispatch({
            type:'ADD_PRODUCT',
            payload:listProduct
            
        })
        listProduct.push(prod)  
        console.log(listProduct,'yoyooyoy')
        prod.cant = 1  
    },
    removeProduct:(product) => (dispatch, getState) => {
    },
    finishBuying: () => (dispatch, getState) => {
        /// agregar alerta     
        dispatch({type:'FINISH', payload: []})
    }
}

export default shoppingCartActions
