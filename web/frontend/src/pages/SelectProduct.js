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
import { toast } from 'react-toastify';

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
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

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

    const useStyles = makeStyles((theme) => ({
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        paper: {
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    }));

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
            toast.error("Please complete size")
        } else {
            props.addProduct(prod)
            setBottom(!bottom)
            toast.success("The item was successfully added to your cart ")

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
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    if (product === {}) return <></>
    return (<>
        <Header bott={bottom} />
        <div className="oneProduct" style={{ padding: '0.1em 1em ', margin: '0vh auto', width: '100%' }}>
            <div className="aProduct1" style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column', paddingTop: '5em' }}>{borrarRepe(product?.variants).map(vari => <img style={{ paddingTop: '20px' }} onClick={() => setProd({ ...prod, remeraActual: vari.photo, color: vari.color })}
                    src={vari.photo} alt={vari.title} style={{ width: '4em', height: '5em', margin: '0.5vh 2vh', border: '1px solid #F1F1F1', cursor: 'pointer' }} />)}
                </div>
                <SideBySideMagnifier
                    className="input-position"
                    style={{ width: '65vh' }}
                    imageSrc={prod?.remeraActual}
                    overlayOpacity={0.4}
                    alwaysInPlace={true}
                    fillGap={false}
                    mouseActivation={MOUSE_ACTIVATION.CLICK}
                    cursorStyle={"zoom-in"}
                />


            </div>
            <div className="aProduct2" style={{ justifyContent: 'center', alignItems: 'center', alignContent: 'center', margin: '7vh 0vh' }}>

                <div style={{ display: 'flex', justifyContent: 'space-between', width: '54vh' }}>
                    <h4>{product.title}</h4>
                    <h4>${product.price}</h4>
                </div>
                <div>

                    {!arrayFiltrado2 ?
                        <div style={{ display: 'flex', margin: '2vh 0vh' }} onClick={handleOpen}>
                            <p>{(arrayFiltrado[0].stars / arrayFiltrado[0].reviews).toFixed(1)}</p>
                            <Rating name="half-rating" onClick={handleOpen} defaultValue={arrayFiltrado[0].stars / arrayFiltrado[0].reviews} precision={0.1} readOnly style={{ color: '#111111' }} />
                        </div>
                        :
                        <div style={{ display: 'flex' }} onClick={handleOpen}>
                            <p>{(props.productRating.stars / props.productRating.reviews).toFixed(1)}</p>
                            <Rating name="half-rating" defaultValue={props.productRating.stars / props.productRating.reviews} precision={0.1} readOnly style={{ color: 'black' }} />
                        </div>
                    }

                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        className={classes.modal}
                        open={open}
                        onClose={handleClose}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                            timeout: 500,
                        }}
                    >
                        <Fade in={open}>
                            <div className={classes.paper}>
                                <div style={{ margin: '2vh auto', display: 'flex', flexDirection: 'column', margin: '5vh 10vh' }}>
                                    {props.userlogged.token &&
                                        <>
                                            {!props.rating.filter(e => e.productId === props.match.params.id).length > 0 ?
                                                <>
                                                    <Box component="fieldset" borderColor="transparent">
                                                        <p>Did you like the product? Rate it!</p>
                                                        <Rating
                                                            name="simple-controlled"
                                                            value={value}
                                                            onChange={(event, newValue) => {
                                                                setValue(newValue)

                                                            }}
                                                            style={{ color: '#111111' }}
                                                        />

                                                    </Box>
                                                    <button className="addToCart" style={{ width: '15vh', height: '5vh', fontSize: '2vh' }} onClick={sendRating} onClick={handleClose}>Send Rating</button> </> :
                                                <p>Ya diste tu opinion</p>}
                                        </>}
                                </div>
                            </div>
                        </Fade>
                    </Modal>
                </div>

                <p style={{ padding: '7px 0 20px 0', fontWeight: 'lighter', width: '55vh' }}>{product.description}</p>

                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: 10, width: '50%' }}>
                    <div>
                        <h6 style={{ margin: '1.5vh 0vh' }}>Colors:</h6>
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

                    <div name="size" id="size" style={{ display: 'flex', flexDirection: 'column', width: '55vh' }}>
                        <h6 style={{ margin: '1.5vh 0vh' }}>Size: {prod.size} </h6>
                        <div style={{ display: 'flex', width: '10vw' }}>
                            {(product?.variants?.filter(vari => vari.color === prod.color))?.map(vari => <button id="buttonShop" style={{ border: '1px solid #BEBEBE' }} onClick={(e) => setProd({ ...prod, size: e.target.value })}
                                value={vari.size} className='buttonSize'>
                                {vari.size}</button>)}
                            <div>
                                {(prod.size !== '' || prod.size !== 'Choose the size') &&
                                    <>{(product?.variants?.filter(vari => (vari.color === prod.color && vari.size === prod.size))[0]?.stock < 10 && <p style={{ margin: '1vh 1vh' }}>Last units</p>)}</>}
                            </div>
                        </div>


                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', margin: '3vh 0vh', width: '55vh' }}>
                    <h6 style={{}}>Share this product:</h6>
                    <WhatsappShareButton style={{ margin: '0vh 1vh' }}
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
                    <TwitterShareButton style={{ margin: '0vh 1vh' }}
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
                </div>
                <button onClick={() => addProducts()} className="addToCart" style={{ width: '54vh' }}>Add to cart</button>

            </div>
        </div>

        <ScrollProducts />
        <ChatBotComponent />
        <div>


            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%' }}>
                {/* <div style={{ backgroundImage: `url(https://cdn-yotpo-images-production.yotpo.com/instagram/30/17842593536342330/standard_resolution.jpg)`, height:'60vh',backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}></div> */}
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginBottom: '3vh' }}>
                    <h3 style={{ margin: '2vh auto' }}>#wemakeit</h3>
                    <h5 className="hashtags" style={{ margin: '2vh auto', fontWeight: 'lighter', textAlign: 'center' }}>Demand versatile performance. Follow the journey for originality and expression at @pyral</h5>
                    <div className="instaDiv" style={{ textAlign: 'center', justifyContent: 'center', alignContent: 'center', margin: '5vh 0vh' }}>
                        <div className="oneDiv">
                            <div className="instaPhotos" style={{ backgroundImage: `url(https://cdn-yotpo-images-production.yotpo.com/instagram/25/17891492716647625/standard_resolution.jpg)` }}></div>
                            <div className="instaPhotos" style={{ backgroundImage: `url(https://cdn-yotpo-images-production.yotpo.com/instagram/14/17848977176285314/standard_resolution.jpg)` }}></div>
                        </div>
                        <div className="oneDiv">
                            <div className="instaPhotos" style={{ backgroundImage: `url(https://cdn-yotpo-images-production.yotpo.com/instagram/57/17878968142792357/standard_resolution.jpg)` }}></div>
                            <div className="instaPhotos" style={{ backgroundImage: `url(https://cdn-yotpo-images-production.yotpo.com/instagram/30/17842593536342330/standard_resolution.jpg)` }}></div>
                        </div>
                    </div>
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
