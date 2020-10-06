import React, { useEffect, useRef } from 'react'
import Header from '../components/Header'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const Success = (props) => {

    function sumarDias(fecha, dias) {
        fecha.setDate(fecha.getDate() + dias);
        return fecha;
    }
    var d = new Date();
    console.log(d.date)
    return (
        <>
            <Header />
            <div style={{ width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
                <div style={{ width: '50vw' }}>
                    <div style={{ background: '#64C574', height: '25vh', display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
                        <h2 style={{ color: 'whitesmoke', fontWeight: '600' }}>Your purchase has been successful!  </h2>
                        <CheckCircleIcon style={{ color: 'white', fontSize: '40' }} />
                    </div>
                    <div>
                        <p>Arrives betwenn</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Success