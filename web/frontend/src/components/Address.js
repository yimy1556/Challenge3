import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { toast } from 'react-toastify';
import { animateScroll as scroll } from 'react-scroll'

// Components
import Header from '../components/Header'
import ChatBotComponent from '../components/ChatBotComponent'
import Footer from '../components/Footer'

// Actions
import authActions from '../redux/actions/authActions'
import itemActions from '../redux/actions/itemActions'

// materialUI
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

// Styles
import '../styles/about.css'

class Address extends React.Component {

    state = {
        country: '',
        city: '',
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
        const response = this.props.contact(country, city, address, postalCode, phoneNumber, this.props.userlogged.token)
        if (response !== "") {
            toast.dark('Your address was successfully changed!', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }
        this.setState({
            country: '',
            city: '',
            address: '',
            postalCode: '',
            phoneNumber: '',
        })
    }

    render() {
        this.constOrder = this.props.countries
        this.constOrder.sort(function (a, b) {
            if (a.country < b.country) { return -1; }
            if (a.country > b.country) { return 1; }
            return 0;
        })

        return (
            <>
                <Header />
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: '100vw', height: '20vh', background: '#111111', color: 'white', textAlign: 'center', fontSize: '60px', fontWeight: 'bold' }}>
                    <p>My Account</p>
                </div>
                <div style={{ display: "flex", margin: '4em', justifyContent: "space-around" }}>
                    <div className="loginRegister" style={{ display: "flex", flexDirection: 'column', padding: '1vh 0vh' }}>
                        <NavLink to="/profile" style={{ textDecoration: 'none', color: 'gray' }}><h3>Profile</h3></NavLink>
                        <h3>Address<ChevronRightIcon fontSize="medium" /></h3>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', width: '70%' }}>
                        <h2 style={{ padding: '1vh 0vh' }}>Your info</h2>
                        <div>
                            <div style={{ boxShadow: '-1px 1px 13px -4px rgba(0,0,0,0.15)', padding: '5vh' }}>
                                <h4>Contact information</h4>
                                {this.props.userlogged.contact &&
                                    <>
                                        {this.props.userlogged.contact.map((x) => {
                                            return (
                                                <div style={{ margin: '1vh 0vh' }}>
                                                    <p><strong>Country:</strong> {x.country}</p>
                                                    <p><strong>City:</strong> {x.city}</p>
                                                    <p><strong>Address:</strong> {x.address}</p>
                                                    <p><strong>Postal code:</strong> {x.postalCode}</p>
                                                    <p><strong>Phone number:</strong> {x.phoneNumber}</p>
                                                    <hr />
                                                </div>
                                            )
                                        })}
                                    </>
                                }
                            </div>

                            <div id="divFormulario" style={{ display: 'flex', flexDirection: 'column', boxShadow: '-1px 1px 13px -4px rgba(0,0,0,0.15)', padding: '5vh', margin: '2vh 0vh' }}>
                                <h4>Add your contact information</h4>
                                <div style={{ display: 'flex', justifyContent: 'space-between', margin: '2vh' }}>
                                    <input style={{ width: '30%' }} onChange={this.readContact} type="text" id="city" name="city" placeholder="Write your city here"
                                        value={this.state.city} />
                                    <input style={{ width: '30%' }} onChange={this.readContact} type="text" id="address" name="address" placeholder="Write your address here"
                                        value={this.state.address} />
                                    <select style={{ width: '30%' }} name="country" onChange={this.readContact} value={this.state.country}>
                                        <option value="">
                                            Select your country</option>
                                        {this.constOrder.map(country => {
                                            return <option name="country">{country.country}</option>
                                        })}
                                    </select>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', margin: '2vh' }}>
                                    <input style={{ width: '45%' }} onChange={this.readContact} type="number" id="postalCode" name="postalCode" placeholder="Write your postal code here"
                                        value={this.state.postalCode} />
                                    <input style={{ width: '45%' }} onChange={this.readContact} type="number" id="phoneNumber" name="phoneNumber" placeholder="Write your phone number here"
                                        value={this.state.phoneNumber} />
                                </div>
                                <button onClick={this.sendContact} className="createAccount button" style={{ width: '20%', margin: '2vh auto' }}>Send information</button>
                            </div>
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
        countries: state.itemReducer.countries,
        contact: state.authReducer
    }
}

const mapDispatchToProps = {
    contact: authActions.postContact,
    getCountries: itemActions.getCountries,
    getUser: authActions.logUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(Address)