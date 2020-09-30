import React, { useEffect, useState } from 'react'
import itemActions from '../redux/actions/itemActions'
import { connect } from 'react-redux'
import shoppingCartActions from '../redux/actions/shoppingCartActions'
import Header from '../components/Header'
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import authActions from '../redux/actions/authActions'
import { NavLink } from 'react-router-dom'
import {
    FacebookShareButton,
    TelegramShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    FacebookIcon,
    WhatsappIcon,
    TelegramIcon,
    TwitterIcon
} from "react-share";

const borrarRepe = (variants) => {
    const variantsAux = []
    if (variants === undefined) return variantsAux
    variants.forEach(vari => {
        if (variantsAux.filter(varia => varia.color === vari.color).length !== 0)
            return
        variantsAux.push(vari)
    })
    return variantsAux
}
const SelectProduct = (props) => {

    const [product, setProduct] = useState({})
    const [prod, setProd] = useState({
        _id: props.match.params.id,
        remeraActual: '', color: '', size: '', cant: 1
    })
    const ratingNum = props.rating

    useEffect(() => {

        const productId = props.match.params.id
        props.upViews(productId)
        props.selectProductId(productId)
            .then(prodc => {
                setProduct({ ...prodc })
                setProd({
                    ...prod,
                    remeraActual: prodc.variants[0].photo,
                    color: prodc.variants[0].color,
                    title: prodc.title,
                    price: prodc.price
                })
            })
    }, [])
    const [value, setValue] = useState(0)

    const ratingSet = () => {
        alert(value)
        const productId = props.match.params.id

        props.postRating(productId, value, props.userlogged.token)

    }

    var arrayFiltrado = props.product.filter(e => e._id === props.match.params.id)

    if (product === {}) return <></>
    props.product.map(product => console.log(`${product.stars}`))
    return (<>
        <Header />
        <div style={{ display: 'flex', justifyContent: 'space-around', padding: '3em' }}>
            <div style={{ display: 'flex' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>{borrarRepe(product?.variants).map(vari => <img style={{ paddingTop: '20px' }} onClick={() => setProd({ ...prod, remeraActual: vari.photo, color: vari.color })}
                    src={vari.photo} alt={vari.title} style={{ width: '3em', height: '4em' }} />)}
                </div>
                <img src={prod?.remeraActual} alt="remeraActual" style={{ width: '28vw', height: '76vh' }} />

            </div>
            <div style={{ width: '50vw' }}>

                <div style={{ display: 'flex', justifyContent: 'space-between', paddingRight: '7em' }}>
                    <h3>{product.title}</h3>
                    <h3>${product.price}</h3>
                </div>
                <div style={{ display: 'flex' }}>
                    <Rating name="half-rating" defaultValue={arrayFiltrado[0].stars / arrayFiltrado[0].reviews} precision={0.1} readOnly style={{ color: 'black' }} />
                    <p>{arrayFiltrado[0].reviews} reviews</p>
                </div>

                <p style={{ maxWidth: '20em', padding: '20px 0' }}>{product.description}</p>

                <div style={{ display: 'flex', flexDirection: 'column' }} >
                    <label>Size</label>
                    <select name="size" id="size" onChange={(e) => setProd({ ...prod, size: e.target.value })}>
                        <option >Choose the size</option>
                        {(product?.variants?.filter(vari => vari.color === prod.color))?.map(vari => <option>{vari.size}</option>)}
                    </select>
                </div>
                <WhatsappShareButton
                    url={"https://scapeteamred.herokuapp.com/"}
                    quote={"CampersTribe - World is yours to explore"}
                    hashtag="#camperstribe"
                >
                    <WhatsappIcon size={36} />
                </WhatsappShareButton>
                <FacebookShareButton
                    url={"https://scapeteamred.herokuapp.com/"}
                    quote={"CampersTribe - World is yours to explore"}
                    hashtag="#camperstribe"
                >
                    <FacebookIcon size={36} />
                </FacebookShareButton>
                <TwitterShareButton
                    url={"https://scapeteamred.herokuapp.com/"}
                    quote={"CampersTribe - World is yours to explore"}
                    hashtag="#camperstribe"
                >
                    <TwitterIcon size={36} />
                </TwitterShareButton>
                <TelegramShareButton
                    url={"https://scapeteamred.herokuapp.com/"}
                    quote={"CampersTribe - World is yours to explore"}
                    hashtag="#camperstribe"
                >
                    <TelegramIcon size={36} />
                </TelegramShareButton>
                {(prod.size !== '' || prod.size !== 'Choose the size') &&
                    <h3>{(product?.variants?.filter(vari => (vari.color === prod.color && vari.size === prod.size))[0]?.stock < 10 && <p>Last units</p>)}</h3>}

                <button onClick={() => props.addProduct(prod)} className="createAccount" style={{ display: 'flex', margin: '7em auto', }}>Add to cart</button>




                <div id="todoShop">
                    {props.product == 0 ? <p>no products yet</p> :
                        <>
                            {props.product.map(product => {
                                return (
                                    <>
                                        <NavLink to={`/selectProduct/${product._id}`}>
                                            <img src={product.variants.photo}></img>
                                            <div>
                                                <p id="descripcionShop">{product.title}</p>
                                                <p id="precioShop">${product.price}</p>
                                            </div>
                                        </NavLink>
                                    </>
                                )

                            })
                            }

                        </>
                    }
                </div>

                <div>
                    <h3>Reviews</h3>
                    <div style={{ display: 'flex' }}>
                        <p>{(arrayFiltrado[0].stars / arrayFiltrado[0].reviews).toFixed(1)}</p>
                        <Rating name="half-rating" defaultValue={arrayFiltrado[0].stars / arrayFiltrado[0].reviews} precision={0.1} readOnly style={{ color: 'black' }} />
                        <p>{arrayFiltrado[0].reviews} reviews</p>

                    </div>
                    <div style={{ display: 'flex' }}>
                        {props.userlogged.token &&
                            <>
                                {!props.rating.filter(e => e.productId === props.match.params.id).length > 0 &&
                                    <>
                                        <Box component="fieldset" mb={3} borderColor="transparent">
                                            <Typography component="legend">Rating</Typography>
                                            <Rating
                                                name="simple-controlled"
                                                value={value}
                                                onChange={(event, newValue) => {
                                                    setValue(newValue);

                                                }}
                                                style={{ color: 'black' }}
                                            />

                                        </Box>
                                        <button onClick={ratingSet}>Send Rating</button>  </>}
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

const mapDispatchToProps = {
    selectProductId: itemActions.selectProductId,
    addProduct: shoppingCartActions.addProduct,
    postRating: authActions.rating,
    upViews: itemActions.upViews
}

const mapStateToProps = state => {
    return {
        rating: state.authReducer.rating,
        productId: state.authReducer.productId,
        product: state.itemReducer.product,
        userlogged: state.authReducer,

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SelectProduct)
