import React, { useEffect, useState } from 'react'
import itemActions from '../redux/actions/itemActions'
import { connect } from 'react-redux'
import shoppingCartActions from '../redux/actions/shoppingCartActions'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import authActions from '../redux/actions/authActions'
import { animateScroll as scroll } from 'react-scroll'
import '../styles/selectProduct.css'
import swal from 'sweetalert';
import {
    SideBySideMagnifier,
    MOUSE_ACTIVATION,
} from "react-image-magnifiers";
import {
    FacebookShareButton,
    TelegramShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    FacebookIcon,
    TwitterIcon,
    WhatsappIcon,
    TelegramIcon
} from "react-share";
import ScrollProducts from '../components/ScrollProduts'
import mens from '../images/mens.jpg'
import ChatBotComponent from '../components/ChatBotComponent'


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
    const variantsAux = []
    const [bottom, setBottom] = useState(true)
    const [product, setProduct] = useState({})
    const [prod, setProd] = useState({
        _id: props.match.params.id,
        remeraActual: '', color: '', size: '', cant: 1
    })

    const [value, setValue] = useState(0)

    useEffect(() => {
        scrollToTop()
        setStars()
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
    }, [props.match.params.id, props.productRating.stars])

    var arrayFiltrado2 = props.productRating.productId === props.match.params.id

    const sendRating = () => {
        props.postRating(props.match.params.id, value, props.userlogged.token)
        props.mandarRating(props.match.params.id, value)
    }

    const addProducts = () => {
        if (prod.size === "") {
            alert('llena todo')
        } else {
            props.addProduct(prod)
            setBottom(!bottom)
        }
    }
    var arrayFiltrado = props.product.filter(e => e._id === props.match.params.id)

    const scrollToTop = () => {
        scroll.scrollToTop();
    }
    const setStars = () => {

        if (!arrayFiltrado2) {
            return arrayFiltrado2 = arrayFiltrado
        }

    }



    if (product === {}) return <></>
    return (<>
        <Header bott={bottom} />
        <div className="oneProduct" style={{ padding: '0.1em 1em ' }}>
            <div className="aProduct" style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column', paddingTop: '5em' }}>{borrarRepe(product?.variants).map(vari => <img style={{ paddingTop: '20px' }} onClick={() => setProd({ ...prod, remeraActual: vari.photo, color: vari.color })}
                    src={vari.photo} alt={vari.title} style={{ width: '4em', height: '5em' }} />)}
                </div>

                <SideBySideMagnifier
                    className="input-position"
                    style={{ width: '60vh' }}
                    imageSrc={prod?.remeraActual}
                    overlayOpacity={0.4}
                    alwaysInPlace={true}
                    fillGap={false}
                    mouseActivation={MOUSE_ACTIVATION.CLICK}
                    cursorStyle={"zoom-in"}
                />


            </div>
            <div className="aProduct" style={{ padding: '2em', justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>

                <div style={{ display: 'flex', justifyContent: 'space-between', paddingRight: '7em' }}>
                    <h3>{product.title}</h3>
                    <h3>${product.price}</h3>
                </div>
                {!arrayFiltrado2 ?
                    <div style={{ display: 'flex' }}>
                        <Rating name="half-rating" defaultValue={arrayFiltrado[0].stars / arrayFiltrado[0].reviews} precision={0.1} readOnly style={{ color: '#111111' }} />
                        <p>{arrayFiltrado[0].reviews} reviews</p>
                    </div>
                    :
                    <div style={{ display: 'flex' }}>
                        <Rating name="half-rating" defaultValue={props.productRating.stars / props.productRating.reviews} precision={0.1} readOnly style={{ color: 'black' }} />
                        <p>{props.productRating.reviews} reviews</p>
                    </div>
                }
                <p style={{ maxWidth: '80%', padding: '20px 0' }}>{product.description}</p>

                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: 10, width: '50%' }}>
                    <div>
                        <h5>Colors:</h5>
                        <div style={{ display: 'flex' }}>

                            {borrarRepe(product.variants).map(variant => {
                                return (<div id="imagenShopChica2" style={{

                                    backgroundColor: `${variant.color === 'Wine' ? '#44282D' :
                                        variant.color === 'Black' ? '#111111' :
                                            variant.color === 'DarkGrey' ? '#34343D' :
                                                variant.color === 'White' ? 'whitesmoke' :
                                                    variant.color === 'Blush' ? '##EFC6B4' :
                                                        variant.color === 'Flint' ? '#C2B1C1' :
                                                            variant.color === 'Honeycomb' ? '#C98E2A' :
                                                                variant.color === 'Paloma' ? '#F2BBBE' :
                                                                    variant.color === 'Salt' ? '#ECE9E2' :
                                                                        variant.color === 'Sage' ? '#737B7D' :
                                                                            variant.color === 'Anchor' ? '#4B4545' :
                                                                                variant.color === 'Red Rum' ? '#774A47' :
                                                                                    variant.color === 'Golden Harvest' ? '#E6B968' :
                                                                                        variant.color === 'Military Moss' ? '#695530' :
                                                                                            variant.color === 'Grey' ? '#303B4F' : ''}`
                                }} > </div>)
                            })}
                        </div>
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }} >

                    <div name="size" id="size" style={{ display: 'flex', flexDirection: 'column' }}>
                        <h5>Size:{prod.size} </h5>
                        <div style={{ display: 'flex' }}>
                            {(product?.variants?.filter(vari => vari.color === prod.color))?.map(vari => <button onClick={(e) => setProd({ ...prod, size: e.target.value })}
                                value={vari.size} className='buttonSize'>
                                {vari.size}</button>)}
                            {(prod.size !== '' || prod.size !== 'Choose the size') &&
                                <>{(product?.variants?.filter(vari => (vari.color === prod.color && vari.size === prod.size))[0]?.stock < 10 && <p>Last units</p>)}</>}
                        </div>

                    </div>
                </div>

                <div style={{ margin: '1em 0' }}>
                    <h6 style={{ paddingBottom: '0.3em' }}>Share this product:</h6>
                    <WhatsappShareButton
                        url={"https://scapeteamred.herokuapp.com/"}
                        quote={"CampersTribe - World is yours to explore"}
                        hashtag={`${product.title}`}
                    >
                        <WhatsappIcon size={30} round={true} />
                    </WhatsappShareButton>
                    <FacebookShareButton
                        url={"https://scapeteamred.herokuapp.com/"}
                        quote={"CampersTribe - World is yours to explore"}
                        hashtag={`${product.title}`}
                    >
                        <FacebookIcon size={30} round={true} />
                    </FacebookShareButton>
                    <TwitterShareButton
                        url={"https://scapeteamred.herokuapp.com/"}
                        quote={"CampersTribe - World is yours to explore"}
                        hashtag="#camperstribe"
                    >
                        <TwitterIcon size={30} round={true} />
                    </TwitterShareButton>
                    <TelegramShareButton
                        url={"https://scapeteamred.herokuapp.com/"}
                        quote={"CampersTribe - World is yours to explore"}
                        hashtag="#camperstribe"
                    >
                        <TelegramIcon size={35} round={true} />
                    </TelegramShareButton>
                </div>

                <button onClick={() => addProducts()} className="addToCart" style={{ margin: '1em 5em 0 0', }}>Add to cart</button>
            </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '1em' }}>
            <h3 >Reviews</h3>
            {!arrayFiltrado2 ?
                <div style={{ display: 'flex' }}>
                    <p>{(arrayFiltrado[0].stars / arrayFiltrado[0].reviews).toFixed(1)}</p>
                    <Rating name="half-rating" defaultValue={arrayFiltrado[0].stars / arrayFiltrado[0].reviews} precision={0.1} readOnly style={{ color: '#111111' }} />
                    <p>{arrayFiltrado[0].reviews} reviews</p>
                </div>
                :
                <div style={{ display: 'flex' }}>
                    <p>{(props.productRating.stars / props.productRating.reviews).toFixed(1)}</p>
                    <Rating name="half-rating" defaultValue={props.productRating.stars / props.productRating.reviews} precision={0.1} readOnly style={{ color: '#111111' }} />
                    <p>{props.productRating.reviews} reviews</p>
                </div>
            }
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
                                        setValue(newValue)

                                    }}
                                    style={{ color: '#111111' }}
                                />

                            </Box>
                            <button onClick={sendRating}>Send Rating</button>  </>}
                </>
            }
        </div>
        <ScrollProducts />
        <ChatBotComponent />
        <div>


            <div className="bottomText" style={{ padding: '50px', justifyContent: 'center' }}>
                <div className="fotosHome" style={{ backgroundImage: `url(${mens})`, height: '40vw' }}></div>
                <div className="foto2Home" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', }}>
                    <h3>Products That Wear in Not Out</h3>
                    <p style={{ margin: '0vh 3vh' }}>We’ve always considered ourselves a shirting company at our very core. Always have. Always will. In fact, when we were just getting our vision for Taylor Stitch off the ground ten years ago, we turned to the country’s oldest family of shirtmakers to learn from the very best. And we were spared no lesson of construction—from fit and balance to the importance of French seams to why 22 stitches-per-inch matters on a shirt.</p>
                    <p style={{ margin: '0vh 3vh' }}>You can bet this technical DNA is central to every single product we make. Build for the long haul, design products that wear in not out, and use the best most sustainable fabrics available—even if that means making them yourself.</p>
                </div>

            </div>
            <Footer />
        </div>
    </>
    )
}

const mapDispatchToProps = {
    selectProductId: itemActions.selectProductId,
    addProduct: shoppingCartActions.addProduct,
    postRating: authActions.rating,
    mandarRating: itemActions.rating,
    upViews: itemActions.upViews
}

const mapStateToProps = state => {
    return {
        rating: state.authReducer.rating,
        productId: state.authReducer.productId,
        product: state.itemReducer.product,
        productRating: state.itemReducer.rating,
        userlogged: state.authReducer,

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SelectProduct)
