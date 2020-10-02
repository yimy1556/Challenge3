import React, { Children } from 'react'
import Header from '../components/Header'
import '../styles/about.css'
import { animateScroll as scroll } from 'react-scroll'
import ChatBotComponent from '../components/ChatBotComponent'
import Footer from '../components/Footer'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import ChangePass from '../components/ChangePass'
import authActions from '../redux/actions/authActions'
import { toast } from 'react-toastify';
import itemActions from '../redux/actions/itemActions'


class Profile extends React.Component {

    state = {
        country: '',
        address: '',
        postalCode: '',
        phoneNumber: '',
    }

    componentDidMount() {
        this.scrollToTop()
        this.props.getCountries()

    }

    scrollToTop() {
        scroll.scrollToTop();
    }

    readContact = e => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    sendContact = async () => {
        let country = this.state.country
        let city = this.state.city
        let address = this.state.address
        let postalCode = this.state.postalCode
        let phoneNumber = this.state.phoneNumber
        await this.props.contact(country, city, address, postalCode, phoneNumber, this.props.userlogged.token)
        toast.success("Thank you for signing up")
    }

    render() {
        // console.log(this.state);
        // console.log(this.props.userlogged);
        console.log(this.props.userlogged.contact);
        // console.log(this.props.countries)
        return (
            <>

                <Header />
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: '100vw', height: '20vh', background: '#111111', color: 'white', textAlign: 'center', fontSize: '60px', fontWeight: 'bold' }}>
                    <p>My Account</p>
                </div>
                <div style={{ display: "flex", margin: '4em', justifyContent: "space-around" }}>
                    <div className="loginRegister" style={{ display: "flex", flexDirection: 'column' }}>
                        <h3>Profile</h3>
                        <NavLink to="/address"><h3>Address</h3></NavLink>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', width: '70%' }}>
                        <h2 style={{ padding: '1vh 0vh' }}>Your info</h2>
                        <div style={{ boxShadow: '-1px 1px 13px -4px rgba(0,0,0,0.15)', padding: '5vh' }}>
                            <p style={{ color: 'gray' }}>Name and last name</p>
                            <h5>{this.props.userlogged.firstName} {this.props.userlogged.lastName}</h5>
                            <p style={{ color: 'gray' }}>Mail</p>
                            <h5>{this.props.userlogged.mail}</h5>
                            <div>
                                <ChangePass />
                            </div>
                            <NavLink to="/logOut">Logout</NavLink>
                        </div>
                    </div>
                </div>
                <ChatBotComponent />
                <Footer />
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        userlogged: state.authReducer,
        countries: state.itemReducer.countries
    }
}

const mapDispatchToProps = {
    contact: authActions.postContact,
    getCountries: itemActions.getCountries,
    getUser: authActions.logUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)