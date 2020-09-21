//import {connect} from 'react-redux'
import { GoogleLogin } from 'react-google-login';
import React, { useState } from 'react';




const Register = (props) => {

    const [user, setUser] = useState({
        name: '',
        surname: '',
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




   const  enviarInfo = async e =>{
     e.preventDefault()
     console.log(user)
        const uname = RegExp(/^[a-zA-Z0-9._]+$/)
		const reMail = RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)
		const rePass = RegExp(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*[!{}[\]@#$%\^&*)(+=._-]).{5,}/)
        if (user.name === '' || user.surname ==='' ||  user.mail ===''  || user.pass ===''){
            alert ("please complete all fields")
            
        // name validation
        } else if (user.name.length < 3){
            alert ("Your name must contain at least 3 characters")
        }else if (!uname.test(user.name)){
			alert ("Your name must contain only numbers, '_' and '.'")
      
        // surname validation
        }else if (user.surname.length < 3){
            alert ("Your surname must contain at least 3 characters")
        }else if (!uname.test(user.surname)){
            alert ("Your surname must contain only numbers, '_' and '.'")
        
        // mail validation
        }else if (user.mail.length < 6){
            alert ("Your mail must contain at least 6 characters")
        }else if (!reMail.test(user.mail)){
            alert ("Your mail must be a valid mal, for exaple: 'example@server.com'")
        
        // pass validation
        } else if (user.pass.length < 5){
            alert ("Your password must contain at least 5 characters")
        }else if (!rePass.test(user.pass)){
            alert ("Your Password must include at least one uppercase letter, at least one lowercase letter, and at least one number. ")
       
        } else{
           // await props.nuevoUsuarios(user)
          //  if(this.props.success){
                alert("Thank you for signing up")
                props.history.push("/home")  
          //  }
            }
    }

   const responseGoogle = respuesta => {
        props.createUser({
            name: respuesta.profileObj.givenName,
            surname: respuesta.profileObj.familyName,
            mail:respuesta.profileObj.email,
            pass:respuesta.profileObj.googleId,
        })
        alert("Thank you for signing up")
        props.history.push("/home")  
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
                         <input onChange={leerImput} type="text" id="name" name="name" placeholder="Write your name here"></input>
                     </div>
                     <div id="divApellido">
                         <input onChange={leerImput} type="text" id="surname" name="surname" placeholder="Write your surname here"></input>
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




//const mapDispatchToProps = {
  //  createUser: usuariosActions.createUser,
 //}

 //export default connect(mapDispatchToProps)(Register);

 export default Register;