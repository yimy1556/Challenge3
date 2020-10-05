import React, { useState } from 'react'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import authActions from '../redux/actions/authActions'
import { connect } from 'react-redux'
import '../styles/lowNewsLetter.css'
import { FormControlLabel, RadioGroup, Radio, Button, Checkbox, responsiveFontSizes, Link } from '@material-ui/core'
import Swal from 'sweetalert2'
import { Redirect } from 'react-router-dom'



const LowNewsletter = (props) => {

    const [mail, setMail] = useState('')

    const readInput = e => {
        const dataMail = e.target.value
        setMail(dataMail)
    }

    const sendMail = async e => {
        setMail('')
        const response = await props.lowNewsletter(mail)
        if (response.data.success) {
            Swal.fire({ title: 'You are no longer subscribed to our website.' })
        }
    }

    console.log(props)
    return (
        <>
            <div className="container__super__lowNewsletter">
                <div>
                    <p>Subscription Center</p>
                </div>
                <div>
                    <label htmlFor="mail">Indicate your mailbox to be removed:</label>
                    <input onChange={readInput} name="mail" id="standard-basic" value={mail} label="Sign up for offers & news" />
                </div>
                <div>
                    <FormControlLabel control={<Checkbox name="checkedB" color="default" />} label="I get too many notifications." />
                    <FormControlLabel control={<Checkbox name="checkedB" color="default" />} label="I don't like your products anymore." />
                    <FormControlLabel control={<Checkbox name="checkedB" color="default" />} label="I don't like your products." />
                </div>
                <Button variant="contained" color="primary" onClick={sendMail}>unsubscribe</Button>
            </div>

        </>
    )
}

const mapDispatchToProps = {
    lowNewsletter: authActions.lowNewsletter
}

export default connect(null, mapDispatchToProps)(LowNewsletter)