import React, { useEffect } from 'react'
import Header from '../components/Header'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { connect } from 'react-redux'
import shoppingCartActions from '../redux/actions/shoppingCartActions'
const Success = (props) => {

    function sumarDias(fecha, dias) {
        fecha.setDate(fecha.getDate() + dias);
        return fecha;
    }
    useEffect(() => {
        props.removeListProduct()
    }, [])

    var d = new Date();

    return (
        <>
            <Header />
            <div style={{ width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
                <div style={{ width: '100%' }}>
                    <div style={{ background: '#64C574', height: '25vh', display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
                        <h2 style={{ color: 'whitesmoke', fontWeight: '600' }}>Your purchase has been successful!  </h2>
                        <CheckCircleIcon style={{ color: 'white', fontSize: '40' }} />
                    </div>
                    <div>
                        <h1>Thank you for shopping at pyral</h1>
                        <h2>Your purchase will arrive between October 10 and October 15</h2>
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
