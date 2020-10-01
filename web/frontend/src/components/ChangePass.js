import React from 'react'
import {connect} from 'react-redux'
import {useState} from 'react'
import authActions from '../redux/actions/authActions'



const ChangePass = (props) => {

    const [dataNewPass, setDatanewPass] = useState({mail: '', password:''})

    const readInput = e => {
        const dataPassword = e.target.value
        const dataMail = props.userlogged.mail
        setDatanewPass({
            
            password:dataPassword,
            mail: dataMail
        })
    }

    const sendNewPass = async e => {
        e.preventDefault()
        const mail = dataNewPass.mail
        const password = dataNewPass.password
        props.changePassword(mail, password)
        const response = await props.changePassword(mail, password)
        console.log(response)
    }

   

    return (
        <div>
          <label htmlFor="">Enter a new password</label>
          <div>
            <input onChange={readInput} name="password" type="password"></input>
            <button onClick={sendNewPass}>Change Pass</button>
          </div>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        userlogged: state.authReducer
    }
}

const mapDispatchToProps = {
    changePassword: authActions.changePassword
}


export default connect(mapStateToProps, mapDispatchToProps)(ChangePass)

