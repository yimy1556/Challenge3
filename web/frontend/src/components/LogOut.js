import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import authActions from '../redux/actions/authActions'

const LogOut = (props) => {

    useEffect(() => {
        props.logOutUser()
        props.history.push('/')
    }, [])

    return (
        null
    )
}

const mapDispatchToProps = {
    logOutUser: authActions.logOutUser
}

export default connect(null, mapDispatchToProps)(LogOut)