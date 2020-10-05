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
import { NavLink } from 'react-router-dom'
import FacebookIcon2 from '@material-ui/icons/Facebook';
import TwitterIcon2 from '@material-ui/icons/Twitter';
import WhatsappIcon2 from '@material-ui/icons/WhatsApp';
import TelegramIcon2 from '@material-ui/icons/Telegram';
import { animateScroll as scroll } from 'react-scroll'
import swal from 'sweetalert';
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
    FacebookIcon,
    TwitterIcon,
    WhatsappIcon,
    TelegramIcon
} from "react-share";
import ScrollProducts from '../components/ScrollProduts'
import mens from '../images/mens.jpg'


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
    // RATING


    const [value, setValue] = useState(0)

    useEffect(() => {
        scrollToTop()
        rickyfort()
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
    
    const rickyfort = () =>{
            
    if(!arrayFiltrado2){
        return arrayFiltrado2 = arrayFiltrado
    }

        }
    

    const sendRating = () => {
        props.postRating(props.match.params.id, value, props.userlogged.token)
        props.mandarRating(props.match.params.id, value)
    }

    const addProducts = () => {
        console.log(prod.size === "")
        if (prod.size === "") {
            alert('llena todo')
        } else {
            props.addProduct(prod)
            setBottom(!bottom)
        }
    }
    var arrayFiltrado = props.product.filter(e => e._id === props.match.params.id)


    console.log(arrayFiltrado2);

    const scrollToTop = () => {
        scroll.scrollToTop();
    }

    console.log(props.product);
    console.log(props.productRating);

    if (product === {}) return <></>
    // props.product.map(product => console.log(`${product.stars}`))
    return (<>
        <Header bott={bottom} />
        <div style={{ display: 'flex', justifyContent: 'space-around', padding: '3em' }}>
            <div style={{ display: 'flex' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>{borrarRepe(product?.variants).map(vari => <img style={{ paddingTop: '20px' }} onClick={() => setProd({ ...prod, remeraActual: vari.photo, color: vari.color })}
                    src={vari.photo} alt={vari.title} style={{ width: '3em', height: '4em' }} />)}
                </div>

                <SideBySideMagnifier
                    className="input-position"
                    style={{ width: '28vw', height: '76vh' }}
                    imageSrc={prod?.remeraActual}
                    mouseActivation={MOUSE_ACTIVATION.CLICK}
                    overlayOpacity={0.2}
                    alwaysInPlace={true}
                    fillGap={true}
                    cursorStyle={'SideBySideMagnifier'}
                />


            </div>
            <div style={{ width: '50vw', height: '76vh' }}>

                <div style={{ display: 'flex', justifyContent: 'space-between', paddingRight: '7em' }}>
                    <h3>{product.title}</h3>
                    <h3>${product.price}</h3>
                </div>
                {!arrayFiltrado2 ? 
                <div style={{ display: 'flex' }}>
                    <Rating name="half-rating" defaultValue={arrayFiltrado[0].stars / arrayFiltrado[0].reviews} precision={0.1} readOnly style={{ color: 'black' }} />
                    <p>{arrayFiltrado[0].reviews} reviews</p>
                </div>
                :
                <div style={{ display: 'flex' }}>
                    <Rating name="half-rating" defaultValue={props.productRating.stars / props.productRating.reviews} precision={0.1} readOnly style={{ color: 'black' }} />
                    <p>{props.productRating.reviews} reviews</p>
                </div>
                }
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
                    <WhatsappIcon size={35} round={true} />
                </WhatsappShareButton>
                <FacebookShareButton
                    url={"https://scapeteamred.herokuapp.com/"}
                    quote={"CampersTribe - World is yours to explore"}
                    hashtag={`${product.title}`}
                >
                    <FacebookIcon size={35} round={true} />
                </FacebookShareButton>
                <TwitterShareButton
                    url={"https://scapeteamred.herokuapp.com/"}
                    quote={"CampersTribe - World is yours to explore"}
                    hashtag="#camperstribe"
                >
                    <TwitterIcon size={35} round={true} />
                </TwitterShareButton>
                <TelegramShareButton
                    url={"https://scapeteamred.herokuapp.com/"}
                    quote={"CampersTribe - World is yours to explore"}
                    hashtag="#camperstribe"
                >
                    <TelegramIcon size={35} round={true} />
                </TelegramShareButton>
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
                {/* {props.productRating.productId === props.match.params.id &&
                <> */}
                {!arrayFiltrado2 ?
                <div style={{ display: 'flex' }}>
                    <p>{(arrayFiltrado[0].stars / arrayFiltrado[0].reviews).toFixed(1)}</p>
                    <Rating name="half-rating" defaultValue={arrayFiltrado[0].stars / arrayFiltrado[0].reviews} precision={0.1} readOnly style={{ color: 'black' }} />
                    <p>{arrayFiltrado[0].reviews} reviews</p> 
                </div>
                :                 
                <div style={{ display: 'flex' }}>
                    <p>{(props.productRating.stars / props.productRating.reviews).toFixed(1)}</p>
                        <Rating name="half-rating" defaultValue={props.productRating.stars / props.productRating.reviews} precision={0.1} readOnly style={{ color: 'black' }} />
                    <p>{props.productRating.reviews} reviews</p> 
                </div>
                }
                {/* </>} */}
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
                                        style={{ color: 'black' }}
                                    />

                                </Box>
                                <button onClick={sendRating}>Send Rating</button>  </>}
                    </>
                }
            </div>
            <div style={{ display: 'flex', padding: '50px' }}>
                <div className="fotosHome" style={{ backgroundImage: `url(${mens})`, height: '40vw', width: '41vw' }}></div>
                <div style={{ width: '60vw', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', }}>
                    <h3>Products That Wear in Not Out</h3>
                    <p style={{ padding: '2em 5em' }}>We’ve always considered ourselves a shirting company at our very core. Always have. Always will. In fact, when we were just getting our vision for Taylor Stitch off the ground ten years ago, we turned to the country’s oldest family of shirtmakers to learn from the very best. And we were spared no lesson of construction—from fit and balance to the importance of French seams to why 22 stitches-per-inch matters on a shirt.</p>
                    <p style={{ padding: '1em 5em' }}>You can bet this technical DNA is central to every single product we make. Build for the long haul, design products that wear in not out, and use the best most sustainable fabrics available—even if that means making them yourself.</p>
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
