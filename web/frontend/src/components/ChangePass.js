import React from 'react'
import { connect } from 'react-redux'
import { useState } from 'react'
import authActions from '../redux/actions/authActions'
import swal from 'sweetalert'



const ChangePass = (props) => {

    const [dataNewPass, setDatanewPass] = useState({ mail: '', password: '' })

    const readInput = e => {
        const dataPassword = e.target.value
        const dataMail = props.userlogged.mail
        setDatanewPass({
            password: dataPassword,
            mail: dataMail
        })
    }

    const sendNewPass = async e => {
        e.preventDefault()
        const mail = dataNewPass.mail
        const password = dataNewPass.password
        props.changePassword(mail, password)
        const response = await props.changePassword(mail, password)
        if(response.success){
            swal("Your password was changed successfully!")
            setDatanewPass({password:''})
        }        
    }

    return (
        <>
            <h5>Forgot your password?</h5>
            <label style={{ fontWeight: 'lighter', fontSize:'2vh', margin:'1vh 0vh' }} htmlFor="">Enter your new password</label>
            <input onChange={readInput} name="password" type="password" value={dataNewPass.password}></input>
            <button onClick={sendNewPass} className="createAccount button" style={{ width: '60%', margin: '2vh auto' }}>Change Pass</button>
        </>
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

