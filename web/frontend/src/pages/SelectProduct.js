import React, { useEffect, useState } from 'react'
import itemActions from '../redux/actions/itemActions'
import { ImageZoom } from 'react-simple-image-zoom';
import { connect } from 'react-redux'
import shoppingCartActions from '../redux/actions/shoppingCartActions'
import Header from '../components/Header'
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import authActions from '../redux/actions/authActions'
import { NavLink } from 'react-router-dom'
import FacebookIcon2 from '@material-ui/icons/Facebook';
import TwitterIcon2 from '@material-ui/icons/Twitter';
import WhatsappIcon2 from '@material-ui/icons/WhatsApp';
import TelegramIcon2 from '@material-ui/icons/Telegram';
import { animateScroll as scroll } from 'react-scroll'
import {
    MagnifierContainer,
    MagnifierPreview,
    MagnifierZoom,
    SideBySideMagnifier,
    MOUSE_ACTIVATION,
} from "react-image-magnifiers";
import {
    FacebookShareButton,
    TelegramShareButton,
    TwitterShareButton,
    WhatsappShareButton,

} from "react-share";
import ScrollProducts from '../components/ScrollProduts'

const SelectProduct = (props) => {
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
    const [bottom, setBottom] = useState(true)
    const [product, setProduct] = useState({})
    const [prod, setProd] = useState({
        _id: props.match.params.id,
        remeraActual: '', color: '', size: '', cant: 1
    })
    const ratingNum = props.rating

    useEffect(() => {
        scrollToTop()
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
    }, [props.match.params.id])
    const [value, setValue] = useState(0)

    const ratingSet = () => {
        alert(value)
        const productId = props.match.params.id

        props.postRating(productId, value, props.userlogged.token)

    }
    const addProducts = () => {
        props.addProduct(prod)
        setBottom(!bottom)
    }

    const scrollToTop = () => {
        scroll.scrollToTop();
    }

    var arrayFiltrado = props.product.filter(e => e._id === props.match.params.id)

    if (product === {}) return <></>
    props.product.map(product => console.log(`${product.stars}`))
    return (<>
        <Header bott={bottom} />
        <div style={{ display: 'flex', justifyContent: 'space-around', padding: '3em' }}>
            <div style={{ display: 'flex' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>{borrarRepe(product?.variants).map(vari => <img style={{ paddingTop: '20px' }} onClick={() => setProd({ ...prod, remeraActual: vari.photo, color: vari.color })}
                    src={vari.photo} alt={vari.title} style={{ width: '3em', height: '4em' }} />)}
                </div>
                {/* <img src={prod?.remeraActual} alt="remeraActual" style={{ width: '28vw', height: '76vh' }} /> */}

                {/* <MagnifierContainer>
                    <div className="example-class">
                        <MagnifierPreview imageSrc={prod?.remeraActual} style={{ width: '30em'}}
                          mouseActivation={MOUSE_ACTIVATION.DOUBLE_CLICK} fillGapRight // Optional
                          />
                    </div>
                    <MagnifierZoom imageSrc={prod?.remeraActual} style={{ width: '28vw', height: '76vh' }} fillGapRight/>
                </MagnifierContainer> */}

                <SideBySideMagnifier
                    className="input-position"
                    style={{ width: '28vw', height: '76vh' }}
                    imageSrc={prod?.remeraActual}
                    mouseActivation={MOUSE_ACTIVATION.CLICK}
                    overlayOpacity={0.2}
                    alwaysInPlace={true}
                    cursorStyle={'SideBySideMagnifier'}
                />


            </div>
            <div style={{ width: '50vw', height: '76vh' }}>

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
                    hashtag={`${product.title}`}
                >
                    <WhatsappIcon2 style={{ fontSize: 40 }} />
                </WhatsappShareButton>
                <FacebookShareButton
                    url={"https://scapeteamred.herokuapp.com/"}
                    quote={"CampersTribe - World is yours to explore"}
                    hashtag={`${product.title}`}
                >
                    <FacebookIcon2 style={{ fontSize: 40 }} />
                </FacebookShareButton>
                <TwitterShareButton
                    url={"https://scapeteamred.herokuapp.com/"}
                    quote={"CampersTribe - World is yours to explore"}
                    hashtag="#camperstribe"
                >
                    <TwitterIcon2 style={{ fontSize: 40 }} />
                </TwitterShareButton>
                <TelegramShareButton
                    url={"https://scapeteamred.herokuapp.com/"}
                    quote={"CampersTribe - World is yours to explore"}
                    hashtag="#camperstribe"
                >
                    <TelegramIcon2 style={{ fontSize: 40 }} />
                </TelegramShareButton>
                {(prod.size !== '' || prod.size !== 'Choose the size') &&
                    <h3>{(product?.variants?.filter(vari => (vari.color === prod.color && vari.size === prod.size))[0]?.stock < 10 && <p>Last units</p>)}</h3>}

                <button onClick={() => addProducts()} className="createAccount" style={{ display: 'flex', margin: '7em auto', }}>Add to cart</button>
            </div>
        </div>
        <ScrollProducts />
        <div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h3 >Reviews</h3>
                <div style={{ display: 'flex' }}>
                    <p>{(arrayFiltrado[0].stars / arrayFiltrado[0].reviews).toFixed(1)}</p>
                    <Rating name="half-rating" defaultValue={arrayFiltrado[0].stars / arrayFiltrado[0].reviews} precision={0.1} readOnly style={{ color: 'black' }} />
                    <p>{arrayFiltrado[0].reviews} reviews</p>
                </div>
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
