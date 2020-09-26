import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import { Button } from '@material-ui/core'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import authActions from '../redux/actions/authActions'
import {connect} from 'react-redux'


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
            <div style={{ backgroundColor: 'whitesmoke', padding: '1em', display: 'flex', flexDirection: 'column', margin: '2em 40%' }}>
                <TextField onChange={readInput} name="mail" id="standard-basic" value={mail} label="Sign up for offers & news" placeholder="Sign up with your email" />
                <Button variant="outlined" color="primary" onClick={sendMail}><ArrowRightIcon /></Button>
            </div>
        </>
    )
}

const mapDispatchToProps = {
    addNewsletter: authActions.addNewsletter
}

export default connect(null, mapDispatchToProps) (Newsletter)