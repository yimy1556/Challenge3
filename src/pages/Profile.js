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
                <div style={{ margin: '4em' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', margin: '1vh' }}>
                        <div style={{ margin: 'auto 5vh' }}>
                            <h3 style={{ color: 'gray' }}>Name and Last name</h3>
                            <h3>{this.props.userlogged.firstName} {this.props.userlogged.lastName}</h3>
                            <h3 style={{ color: 'gray' }}>Mail</h3>
                            <p>{this.props.userlogged.mail}</p>
                            <ChangePass />
                        </div>
                        <div>
                            <h3 style={{ margin: '3vh auto' }}>Order History</h3>
                            <h3>Your info</h3>
                            <div>
                                {this.props.userlogged.contact.map((x) => {
                                    return (
                                        <>
                                            <div style={{ border: '3px solid black', margin: '1vh' }}>
                                                <p><strong>Country:</strong> {x.country}</p>
                                                <p><strong>City:</strong> {x.city}</p>
                                                <p><strong>Address:</strong> {x.address}</p>
                                                <p><strong>Postal Code:</strong> {x.postalCode}</p>
                                                <p><strong>Phone Number:</strong> {x.phoneNumber}</p>
                                            </div>
                                        </>
                                    )
                                })}
                            </div>
                            <input onChange={this.readContact} type="text" id="city" name="city" placeholder="Write your city here" />
                            <input onChange={this.readContact} type="text" id="address" name="address" placeholder="Write your address here" />
                            <input onChange={this.readContact} type="number" id="postalCode" name="postalCode" placeholder="Write your postal code here" />
                            <input onChange={this.readContact} type="number" id="phoneNumber" name="phoneNumber" placeholder="Write your phone number here" />
                            <button onClick={this.sendContact}>Enviar dirección</button>
                            <NavLink to="/logOut">Logout</NavLink>
                        </div>
                    </div>
                    {/* <select>
                        {this.props.countries.map(country => {
                            return <option onChange={this.readContact} name="country">{country.country}</option>
                        })}
                    </select> */}
                    <div>

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