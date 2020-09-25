import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import { Button } from '@material-ui/core'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'

const Newsletter = () => {

    const [mail, setMail] = useState('')

    const readInput = e => {
        const dataMail = e.target.value
        console.log(dataMail)
        setMail({
            mail:dataMail
        })
    }

    

    console.log(mail)
    return (
        <>
            <div style={{ backgroundColor: 'whitesmoke', padding: '1em', display: 'flex', flexDirection: 'column', margin: '2em 40%' }}>
                <TextField onChange={readInput} name="mail" id="standard-basic" label="Sign up for offers & news" placeholder="Sign up with your email" />
                <Button variant="outlined" color="primary" /*onClick={sendMail}*/><ArrowRightIcon /></Button>
            </div>
        </>
    )
}

export default Newsletter