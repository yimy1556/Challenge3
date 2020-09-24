import { connect } from 'react-redux'
import { GoogleLogin } from 'react-google-login';
import React, { useState } from 'react';
import authActions from '../redux/actions/authActions'
import '../styles/RegisterLogIn.css'
import { toast } from 'react-toastify';



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
            toast("please complete all fields")

            // name validation
        } else if (user.firstName.length < 3) {
            toast("Your name must contain at least 3 characters")
        } else if (!uname.test(user.firstName)) {
            toast("Your name must contain only uppercase letter, lowercase letter, numbers, numbers, '_' and '.'")

            // lastName validation
        } else if (user.lastName.length < 3) {
            toast("Your lastName must contain at least 3 characters")
        } else if (!uname.test(user.lastName)) {
            toast("Your lastName must contain only uppercase letter, lowercase letter, numbers, '_' and '.'")

            // mail validation
        } else if (user.mail.length < 6) {
            toast("Your mail must contain at least 6 characters")
        } else if (!reMail.test(user.mail)) {
            toast("Your mail must be a valid mal, for exaple: 'example@server.com'")

            // pass validation
        } else if (user.pass.length < 5) {
            toast("Your password must contain at least 5 characters")
        } else if (!rePass.test(user.pass)) {
            toast("Your Password must include at least one uppercase letter, at least one lowercase letter, and at least one number. ")


        } else {
            await props.newUser(user)
            toast("Thank you for Signing Up")
        }
    }

    const responseGoogle = response => {
        props.newUser({
            firstName: response.profileObj.givenName,
            lastName: response.profileObj.familyName,
            mail: response.profileObj.email,
            pass: response.profileObj.googleId,
        })
        toast("Thank you for signing up")

    }


    console.log(user)

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
                    <div id="HaveAccount">
                       <p>Have an account?</p>
                       <button >Log in</button>
                    </div>
                    <button onClick={enviarInfo} className="createAccount">Create Account</button>
                </form>
            </div>
        </div>
    )
}




const mapDispatchToProps = {
    newUser: authActions.newUser,
}

export default connect(null, mapDispatchToProps)(Register);


