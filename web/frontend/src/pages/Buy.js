import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

// MaterialUI
import CreateIcon from '@material-ui/icons/Create';
import Badge from '@material-ui/core/Badge'

// Images
import clothing from "../images/clothing.jpg"

const Buy = (props) => {
    const [render, setRender] = useState(true)

    useEffect(() => {

    }, [render])

    const compraTotal = (list) => {
        let total = 0
        list.forEach(prod => total += prod.cant * prod.price)
        return total
    }

    console.log(props.listProduct);
    return (
        <>
            <div className="buyBanner" style={{ backgroundImage: `url(${clothing})` }}>
                <h1 className="informationText">INFORMATION</h1>
            </div>
            <div className="buyContainer">
                <div style={{ borderRight: '1px solid #DFDFDF', padding: '0vh 7vh', margin: '0vh 7vh', width: '60%' }}>
                    <div >
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <p style={{ margin: '2vh 0vh' }}><strong>Information</strong> {'>'}<NavLink to="payments" style={{ textDecoration: 'none', color: "#111111" }}> Payment</NavLink></p>
                                <h3>Contact information<NavLink to="address" style={{ color: 'grey', paddingLeft: '2em' }}><CreateIcon /></NavLink></h3>
                            </div>
                            <div style={{ fontWeight: 'lighter', borderRadius: '7px', border: '1px solid #DFDFDF', width: '100%', padding: '2vh', margin: '2vh 0vh' }}>
                                {props.userlogged.contact ?
                                    <>
                                        {props.userlogged.contact.map((x) => {
                                            return (
                                                <div style={{ margin: '1vh 0vh', fontWeight: '400' }}>
                                                    <p><strong> Country: </strong>{x.country}</p>
                                                    <p><strong>City: </strong>{x.city}</p>
                                                    <p><strong>Address: </strong>{x.address}</p>
                                                    <p><strong>Postal code:</strong> {x.postalCode}</p>
                                                    <p><strong>Phone number:</strong> {x.phoneNumber}</p>
                                                    <hr />
                                                </div>
                                            )
                                        })}
                                    </>
                                    :
                                    <>
                                        <h5>No address yet.</h5>
                                    </>
                                }
                            </div>
                        </div>

                        <NavLink to="/payments"> <button className="continue">Continue</button></NavLink>
                    </div>
                </div>
                <div style={{ width: '35%', height: '70vh', margin: '1vh 0vh' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', padding: '0.7em 0' }}>
                        {props.listProduct.map(prod => <div style={{ display: 'flex', width: '100%', margin: '1vh 0 ' }}>
                            <div style={{ border: '1px solid #DFDFDF', borderRadius: '15%', }}>
                                <Badge badgeContent={prod.cant}>
                                    <div style={{ backgroundImage: `url(${prod.remeraActual})`, height: '10vh', width: '10vh', backgroundPosition: 'center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}></div>
                                </Badge>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignSelf: 'center', width: '100%' }}>
                                <div style={{ display: 'flex', margin: '0vh 1vh ', justifyContent: 'space-between' }}>
                                    <p style={{ fontWeight: 'bold' }}>{prod.color} {prod.title}</p>
                                    <p style={{ fontWeight: 'bold' }}>${prod.price * prod.cant}</p>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', margin: '0vh 1vh ' }}>
                                    <p>{prod.size}</p>
                                </div>
                            </div>
                        </div>)}
                    </div>

                    {compraTotal(props.listProduct) > 250 ?
                        <>
                            <hr style={{ border: '0.5px solid #DFDFDF' }}></hr>
                            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.7em 0', textDecoration: 'line-through' }}>
                                <p>Shipping</p>
                                <p>$36</p>
                            </div> <hr style={{ border: '0.5px solid #DFDFDF' }}></hr>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <h5>Total</h5>
                                <h4>${compraTotal(props.listProduct)} </h4>
                            </div>
                        </> :
                        <>
                            <hr style={{ border: '0.5px solid #DFDFDF' }}></hr>
                            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0em 0 0.7em 0', }}>
                                <p>Shipping</p>
                                <p>$36</p>
                            </div>
                            <hr style={{ border: '0.5px solid #DFDFDF' }}></hr>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <h4>Total</h4>
                                <h4>${compraTotal(props.listProduct) + 36}  </h4>
                            </div>
                        </>
                    }

                </div>
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        listProduct: state.shoppingCartReducer.listProduct,
        userlogged: state.authReducer,
    }
}
const mapDispatchToProps = {
}
export default connect(mapStateToProps, mapDispatchToProps)(Buy)