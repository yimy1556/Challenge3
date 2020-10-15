import React, { useEffect } from 'react'
import { connect } from 'react-redux'

// Components
import Header from '../components/Header'

// Actions
import shoppingCartActions from '../redux/actions/shoppingCartActions'

// Material UI
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

// Images
import photoBanner2 from '../images/bannerShip2.jpg'

const Success = (props) => {

    useEffect(() => {
        props.removeListProduct()
    }, [])

    return (
        <>
            <Header />
            <div style={{ maxWidth: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center', margin: '0px' }}>
                <div style={{ width: '50%', marginTop: '4rem' }}>
                    <img src={photoBanner2} style={{ width: '100%' }} alt="" />
                    <div style={{ background: '#64C574', height: '25vh', display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
                        <h2 style={{ color: 'whitesmoke', fontWeight: '600' }}>Your purchase has been successful!  </h2>
                        <CheckCircleIcon style={{ color: 'white', fontSize: '40' }} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center', flexDirection: 'column', textAlign: 'center', marginBottom: '2rem' }}>
                        <p style={{ fontSize: '1.5rem', marginTop: '2rem' }}>Customer Care</p>
                        <p>
                            If you need help with placing an order, tracking your purchase, or arranging an exchange or return, <br />
                             we are here to help 24 hours a day, 7 days a week.
                        </p>
                        <p>
                            Email us at customer@pyral.com
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

const mapDispatchToProps = {
    removeListProduct: shoppingCartActions.removeListProduct
}

export default connect(null, mapDispatchToProps)(Success)
