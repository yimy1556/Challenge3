import React from 'react'
import { connect } from 'react-redux'
import authActions from '../redux/actions/authActions'
import { animateScroll as scroll } from 'react-scroll'
import Swal from 'sweetalert2'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/forgotPass.css'

class ForgotPass extends React.Component {

    componentDidMount() {
        this.scrollToTop()
    }

    scrollToTop() {
        scroll.scrollToTop();
    }

    state = {
        email: "",
        error: "",
        disabled: false
    }

    getForm = e => {
        e.preventDefault()
        const value = e.target.value
        this.setState({
            ...this.state,
            email: value,
            error: ""
        })
    }

    submit = async e => {

        e.preventDefault()

        this.setState({
            ...this.state,
            disabled: true
        })
        if (this.state.error === "") {


            const sendMail = await this.props.sendMail(this.state.email)
            if (sendMail === false) {
                this.setState({
                    error: "That email address is not associated with an existing account"
                })
                this.setState({
                    ...this.state,
                    disabled: false
                })
            } else {
                Swal.fire({ title: 'A email has been sent!', text: "Please check your mail box", icon: 'success', showConfirmButton: false, timer: 3000, allowOutsideClick: false })
                this.props.history.push('/')
                this.setState({
                    ...this.state,
                    disabled: false
                })
            }
        }
    }
    render() {
        return (
            <>
                <Header />
                <div id="container__primary" >
                    <p id="title__container" >Enter your recovery email address:</p>
                    <div id="container__form" className="signContainer">
                        <div>
                            <span className={this.state.error === "" ? "" : "logError"}>{this.state.error}</span>
                            <input className="account" onChange={this.getForm} name="email" type="text" placeholder="Your email"></input>
                            <button disabled={this.state.disabled} onClick={this.submit}>Send new password.</button>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}

const mapDispatchToProps = {
    sendMail: authActions.sendMail
}

export default connect(null, mapDispatchToProps)(ForgotPass)