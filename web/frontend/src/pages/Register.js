import { connect } from 'react-redux'
import { GoogleLogin } from 'react-google-login';
import React, { useState } from 'react';
import authActions from '../redux/actions/authActions'
import '../styles/RegisterLogIn.css'
import { NavLink } from 'react-router-dom'
import { toast } from 'react-toastify';
import { TextareaAutosize } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import mens from '../images/mens.jpg'

const Register = (props) => {

    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        mail: '',
        pass: ''
    })

    const leerImput = (e) => {
        const valor = e.target.value;
        const campo = e.target.name;
        setUser({
            ...user,
            [campo]: valor
        })
    }

    const [mensajes, setMensajes] = useState({
        firstName1: false,
        firstName2: false,
        lastName1: false,
        lastName2: false,
        mail1: false,
        mail2: false,
        pass1: false,
        pass2: false,
    })





    const enviarInfo = async e => {
        e.preventDefault()
        const uname = RegExp(/^[a-zA-Z0-9._]+$/)
        const reMail = RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)
        const rePass = RegExp(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*[!{}[\]@#$%\^&*)(+=._-]).{5,}/)



        mensajes.firstName1 = false
        mensajes.firstName2 = false
        mensajes.lastName1 = false
        mensajes.lastName2 = false
        mensajes.mail1 = false
        mensajes.mail2 = false
        mensajes.pass1 = false
        mensajes.pass2 = false

        if (user.firstName === '' || user.lastName === '' || user.mail === '' || user.pass === '') {
            toast.error("please complete all fields")

            // name validation
        } else if (user.firstName.length < 3) {
            setMensajes({
                ...mensajes,
                firstName1: true
            })
        } else if (!uname.test(user.firstName)) {
            setMensajes({
                ...mensajes,
                firstName2: true
            })

            // lastName validation
        } else if (user.lastName.length < 3) {
            setMensajes({
                ...mensajes,
                lastName1: true
            })
        } else if (!uname.test(user.lastName)) {
            setMensajes({
                ...mensajes,
                lastName2: true
            })

            // mail validation
        } else if (user.mail.length < 6) {
            setMensajes({
                ...mensajes,
                mail1: true
            })
        } else if (!reMail.test(user.mail)) {
            setMensajes({
                ...mensajes,
                mail2: true
            })

            // pass validation
        } else if (user.pass.length < 5) {
            setMensajes({
                ...mensajes,
                pass1: true
            })
        } else if (!rePass.test(user.pass)) {
            setMensajes({
                ...mensajes,
                pass2: true
            })

        } else {
            await props.newUser(user)
            toast.error("Thank you for Signing Up")

        }


    }

    const responseGoogle = response => {
        props.newUser({
            firstName: response.profileObj.givenName,
            lastName: response.profileObj.familyName,
            mail: response.profileObj.email,
            pass: response.profileObj.googleId,
        })
        toast.success("Thank you for signing up")

    }



    return (
        <>
            <div style={{ display: 'flex' }}>
                <div style={{ backgroundImage: `url(${mens})`, width: '40%', maxHeight: '100vh', backgroundPosition: 'top right', backgroundSize: 'cover' }}>
                </div>
                <div id="divFormulario" style={{ background: ' whitesmoke', width: '60%', maxHeight: '100vh' }}>
                    <form>
                        <div className="loginRegister" style={{ display: "flex" }}>
                            <h3>Register | </h3><NavLink to="/login"> <h3 style={{ paddingLeft: '5px' }}> Log in</h3></NavLink>
                        </div>
                        <GoogleLogin id="GoogleLogin"
                            clientId="83311303903-d8eviki4j9rvmabuc0ceg0c5im70b2ab.apps.googleusercontent.com"
                            buttonText="Sign up with Google"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                        />

                        <div id="divNombre" style={{ color: "red" }}>
                            {mensajes.firstName1 ? <p>*Your name must contain at least 3 characters</p> : mensajes.firstName2 ? <p>*Your name must contain only uppercase letter, lowercase letter, numbers, numbers, '_' and '.'</p> : <p></p>}
                            <TextField onChange={leerImput} type="text" id="firstName" name="firstName" placeholder="Write your name here"></TextField>
                        </div>
                        <div id="divApellido" style={{ color: "red" }}>
                            {mensajes.lastName1 ? <p>*Your lastName must contain at least 3 characters</p> : mensajes.lastName2 ? <p>*Your lastName must contain only uppercase letter, lowercase letter, numbers, numbers, '_' and '.'</p> : <p></p>}
                            <TextField onChange={leerImput} type="text" id="lastName" name="lastName" placeholder="Write your last name here"></TextField>
                        </div>
                        <div id="divMail" style={{ color: "red" }}>
                            {mensajes.mail1 ? <p>*Your mail must contain at least 6 characters</p> : mensajes.mail2 ? <p>*Your mail must be a valid mal, for exaple: 'example@server.com</p> : <p></p>}
                            <TextField onChange={leerImput} type="text" id="mail" name="mail" placeholder="Write your mail here"></TextField>
                        </div>
                        <div id="divContraseña" style={{ color: "red" }}>
                            {mensajes.pass1 ? <p>*Your password must contain at least 5 characters</p> : mensajes.pass2 ? <p>*Your Password must include at least one uppercase letter, at least one lowercase letter, and at least one number.</p> : <p></p>}
                            <TextField onChange={leerImput} type="password" id="pass" name="pass" placeholder="Write your password here"></TextField>
                        </div>
                        <div id="HaveAccount">
                            <p style={{color:'gray'}}>Have an account?<NavLink to="/login" class="clickHere" style={{color:'gray'}}> Click Here</NavLink></p>
                        </div>
                        <button onClick={enviarInfo} className="createAccount button">Create Account</button>
                    </form>
                </div>
            </div>
        </>
    )
}




const mapDispatchToProps = {
    newUser: authActions.newUser,
}

export default connect(null, mapDispatchToProps)(Register);


