import { GoogleLogin } from 'react-google-login';
import React, { useState, useEffect } from 'react';
import authActions from '../redux/actions/authActions'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { toast } from 'react-toastify';
import mens from '../images/mens.jpg'

const LogIn = props => {

    const [ingresoUsuario, setIngresoUsuario] = useState({
        mail: '',
        pass: ''
    })

    const leerImput = e => {
        const campo = e.target.name
        const valor = e.target.value
        setIngresoUsuario({
            ...ingresoUsuario,
            [campo]: valor
        })
    }

    const enviarInfo = async e => {
        e.preventDefault()
        await props.logUser(ingresoUsuario)

    }



    const responseGoogle = response => {
        props.logUser({
            mail: response.profileObj.email,
            pass: response.profileObj.googleId
        })
    }

    return (

        <div style={{ display: 'flex' }}>
            <div style={{ backgroundImage: `url(${mens})`, width: '40%', maxHeight: '100vh', backgroundPosition: 'top right', backgroundSize: 'cover' }}>

            </div>
            <div id="divFormulario" style={{ background: ' whitesmoke', width: '60%', height: '100vh' }}>
                <form>
                    <div className="loginRegister" style={{ display: "flex" }}>
                        <NavLink to="/register">  <h3>Register | </h3> </NavLink><h3 style={{ paddingLeft: '5px' }}>Log in </h3>
                    </div>
                    <GoogleLogin id="GoogleLogin"
                        clientId="83311303903-d8eviki4j9rvmabuc0ceg0c5im70b2ab.apps.googleusercontent.com"
                        buttonText="Log in with google"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />

                    <div id="divUsuario">
                        <input onChange={leerImput} type="text" id="mail" name="mail" placeholder="Write your mail here"></input>
                    </div>
                    <div id="divContraseña">
                        <input onChange={leerImput} type="password" id="pass" name="pass" placeholder="Write your password here"></input>
                    </div>
                    <div id="HaveAccount">
                        <p>Don't have an account?</p>
                        <NavLink to="/register"> Sign up</NavLink>
                        <NavLink to="/forgotPass">Forgot password?</NavLink>
                    </div>
                    <button className="login" onClick={enviarInfo}>Log in</button>
                </form>
            </div>
        </div>
    )

}

const mapStateToProps = state => {
    return {
        user: state.authReducer
    }
}

const mapDispatchToProps = {
    logUser: authActions.logUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn)
