import { connect } from 'react-redux'
import { GoogleLogin } from 'react-google-login';
import React, { useState } from 'react';
import authActions from '../redux/actions/authActions'




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




    const enviarInfo = async e => {
        e.preventDefault()
        console.log(user)
        const uname = RegExp(/^[a-zA-Z0-9._]+$/)
		const reMail = RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)
		const rePass = RegExp(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*[!{}[\]@#$%\^&*)(+=._-]).{5,}/)
        if (user.firstName === '' || user.lastName === '' || user.mail === '' || user.pass === '') {
            alert("please complete all fields")

            // name validation
        } else if (user.firstName.length < 3) {
            alert("Your name must contain at least 3 characters")
        } else if (!uname.test(user.firstName)) {
            alert("Your name must contain only numbers, '_' and '.'")

            // lastName validation
        } else if (user.lastName.length < 3) {
            alert("Your lastName must contain at least 3 characters")
        } else if (!uname.test(user.lastName)) {
            alert("Your lastName must contain only numbers, '_' and '.'")

            // mail validation
        } else if (user.mail.length < 6) {
            alert("Your mail must contain at least 6 characters")
        } else if (!reMail.test(user.mail)) {
            alert("Your mail must be a valid mal, for exaple: 'example@server.com'")

            // pass validation
        } else if (user.pass.length < 5) {
            alert("Your password must contain at least 5 characters")
        } else if (!rePass.test(user.pass)) {
            alert("Your Password must include at least one uppercase letter, at least one lowercase letter, and at least one number. ")


        } else {
            await props.newUser(user)
        }
    }

    const responseGoogle = respuesta => {
        props.newUser({
            firstName: respuesta.profileObj.givenName,
            lastName: respuesta.profileObj.familyName,
            mail: respuesta.profileObj.email,
            pass: respuesta.profileObj.googleId,
        })
        alert("Thank you for signing up")

    }




    return (
        <div id="todoelhome">

            <div id="divFormulario">
                <form>
                    <h3>Complete this form to register</h3>

                    <GoogleLogin id="GoogleLogin"
                        clientId="83311303903-d8eviki4j9rvmabuc0ceg0c5im70b2ab.apps.googleusercontent.com"
                        buttonText="Sing up with Google"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />

                    <div id="divNombre">
                        <input onChange={leerImput} type="text" id="firstName" name="firstName" placeholder="Write your name here"></input>
                    </div>
                    <div id="divApellido">
                        <input onChange={leerImput} type="text" id="lastName" name="lastName" placeholder="Write your lastName here"></input>
                    </div>
                    <div id="divMail">
                        <input onChange={leerImput} type="text" id="mail" name="mail" placeholder="Write your mail here"></input>
                    </div>
                    <div id="divContraseña">
                        <input onChange={leerImput} type="password" id="pass" name="pass" placeholder="Write your password here"></input>
                    </div>
                    <button onClick={enviarInfo}>Create Account</button>
                </form>
            </div>
        </div>
    )
}




const mapDispatchToProps = {
    newUser: authActions.newUser,
}

export default connect(null, mapDispatchToProps)(Register);


