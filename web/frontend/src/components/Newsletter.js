import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import { Button } from '@material-ui/core'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import authActions from '../redux/actions/authActions'
import { connect } from 'react-redux'


const Newsletter = (props) => {

    const [mail, setMail] = useState('')

    const readInput = e => {
        const dataMail = e.target.value
        console.log(dataMail)
        setMail(dataMail)
    }

    const sendMail = async e => {
        e.preventDefault()
        props.addNewsletter(mail)
        setMail('')
    }



    console.log(props)
    return (
        <>
            <div style={{ display: 'flex', alignItems: 'center', color: 'white', flexDirection: 'column' }}>
                <h4>Sign up for offers & news</h4>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <input onChange={readInput} name="mail" id="standard-basic" value={mail} label="Sign up for offers & news" placeholder="Sign up with your email" style={{ border: 'none', borderBottom: '1px white solid', color: 'white', background: 'none', padding: '10px' }} />
                    <ArrowRightIcon style={{ color: 'white' }} onClick={sendMail} />
                </div>
            </div>
        </>
    )
}

const mapDispatchToProps = {
    addNewsletter: authActions.addNewsletter
}

export default connect(null, mapDispatchToProps)(Newsletter)