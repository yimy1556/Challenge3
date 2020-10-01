import React, { useState } from 'react'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import authActions from '../redux/actions/authActions'
import { connect } from 'react-redux'
import Header from '../components/Header'



const LowNewsletter = (props) => {

    const [mail, setMail] = useState('')
    const [errorInput, setErrorInput] = useState(null)

    const readInput = e => {
        const dataMail = e.target.value
        setMail(dataMail)
    }

    const sendMail = async e => {
        e.preventDefault()
        props.lowNewsletter(mail)
        setMail('')
    }


return (
    <>  
        <div>
            <div>
                <input onChange={readInput} name="mail" id="standard-basic" value={mail} label="Sign up for offers & news" placeholder="Sign up with your email"/>
                <ArrowRightIcon  onClick={sendMail} />
            </div>
            <span>{errorInput} </span>
        </div>

    </>
)
}

const mapDispatchToProps = {
    lowNewsletter: authActions.lowNewsletter
}

export default connect(null, mapDispatchToProps)(LowNewsletter)