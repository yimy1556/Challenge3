import { GoogleLogin } from 'react-google-login';
import React, { useState } from 'react';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

// Actions
import authActions from '../redux/actions/authActions'

// Images
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
                        clientId="83311303903-hdo87f3cuq80fnscbb96ru5g0kqkg5vh.apps.googleusercontent.com"
                        buttonText="Log in with google"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />

                    <div id="divMail">
                        <input onChange={leerImput} type="text" id="mail" name="mail" placeholder="Write your mail here" style={{ border: '0', background: 'none', borderBottom: '1px solid gray' }}></input>
                    </div>
                    <div id="divContraseña">
                        <input onChange={leerImput} type="password" id="pass" name="pass" placeholder="Write your password here" style={{ border: '0', background: 'none', borderBottom: '1px solid gray' }}></input>
                    </div>
                    <div id="HaveAccount" style={{ color: 'gray' }}>
                        <p>Don't have an account?<NavLink to="/register" style={{ color: 'gray' }}> Sign up</NavLink></p>
                        <NavLink to="/forgotPass" style={{ color: 'gray' }} s>Forgot password?</NavLink>
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
