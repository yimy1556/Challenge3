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


class Address extends React.Component {

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
                    <div className="loginRegister" style={{ display: "flex", flexDirection: 'column', padding: '1vh 0vh' }}>
                        <NavLink to="/profile"><h3>Profile</h3></NavLink>
                        <h3>Address</h3>
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
                                                <div style={{ fontWeight: 'lighter' }}>
                                                    <p>{x.country}</p>
                                                    <p>{x.city}</p>
                                                    <p>{x.address}</p>
                                                    <p>{x.postalCode}</p>
                                                    <p>{x.phoneNumber}</p>
                                                    <hr />
                                                </div>
                                            )
                                        })}
                                    </>}
                            </div>

                            <div id="divFormulario" style={{ display: 'flex', flexDirection: 'column', boxShadow: '-1px 1px 13px -4px rgba(0,0,0,0.15)', padding: '5vh', margin: '2vh 0vh' }}>
                                <h4>Add your contact information</h4>
                                <div style={{ display: 'flex', justifyContent: 'space-between', margin: '2vh' }}>
                                    <input style={{ width: '45%' }} onChange={this.readContact} type="text" id="city" name="city" placeholder="Write your city here" />
                                    <input style={{ width: '45%' }} onChange={this.readContact} type="text" id="address" name="address" placeholder="Write your address here" />
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', margin: '2vh' }}>
                                    <input style={{ width: '45%' }} onChange={this.readContact} type="number" id="postalCode" name="postalCode" placeholder="Write your postal code here" />
                                    <input style={{ width: '45%' }} onChange={this.readContact} type="number" id="phoneNumber" name="phoneNumber" placeholder="Write your phone number here" />
                                </div>
                                <button onClick={this.sendContact} className="createAccount button" style={{ width: '20%', margin: '2vh auto' }}>Send information</button>
                            </div>
                        </div>
                    </div>
                    {/* <select>
                        {this.props.countries.map(country => {
                            return <option onChange={this.readContact} name="country">{country.country}</option>
                        })}
                    </select> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(Address)