import React from 'react'
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
import ChevronRightIcon from '@material-ui/icons/ChevronRight';


class Address extends React.Component {

    state = {
        country: '',
        city: '',
        address: '',
        postalCode: '',
        phoneNumber: '',
        mensajes:{
            country: false,
            city1: false,
            city2: false,
            address1: false,
            address2: false,
            postalCode: false,
            phoneNumber: false,
        }
    }
    
    

    componentDidMount() {
        this.scrollToTop()
        this.props.getCountries()
    }

    // componentWillReceiveProps(){
    //     this.props.userlogged()
    // }   

    scrollToTop() {
        scroll.scrollToTop();
    }

    readContact = e => {
        this.setState ({
          ...this.state,
         [e.target.name]: e.target.value
        })
      
    }



    sendContact = async e => {
        e.preventDefault()
        const uname = RegExp(/^[a-zA-Z0-9._]+$/)
        this.state.mensajes.country = false
        this.state.mensajes.city1 = false
        this.state.mensajes.city2 = false
        this.state.mensajes.address1 = false
        this.state.mensajes.address2 = false
        this.state.mensajes.postalCode = false
        this.state.mensajes.phoneNumber = false


        if (this.state.country === '' || this.state.city === '' || this.state.address === '' || this.state.postalCode === '' || this.state.phoneNumber === '') {
            toast.error("please complete all fields")

        } else if (this.state.country.length > 15) {
            toast.error("The country you entered in too long")
        } else if (!uname.test(this.state.city)) {
            toast.error("The City must contain only uppercase letter and lowercase letter")

        }  else if (this.state.city.length > 15) {
            toast.error("The City you entered in too long")
        
        } else if (!uname.test(this.state.address)) {
            toast.error("The address must contain only uppercase letter, lowercase letter and numbers")

       }  else if (this.state.address.length > 25) {
        toast.error("The address you entered in too long")
       
       }  else if (this.state.postalCode.length > 5) {
        toast.error("The postalCode you entered in too long")


        }  else if (this.state.phoneNumber.length > 10) {
            toast.error("The phoneNumber you entered in too long")

        }else{
        let country = this.state.country
        let city = this.state.city
        let address = this.state.address
        let postalCode = this.state.postalCode
        let phoneNumber = this.state.phoneNumber
        await this.props.contact(country, city, address, postalCode, phoneNumber, this.props.userlogged.token)
        // await this.props.getContact(this.props.userlogged.token)
        toast.success("Your adress was successfully updated")
    }
    }

    render() {
        console.log(this.state)
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
                                <div id="mensajesadress" style={{ display: 'flex', justifyContent: 'space-between', margin: '2vh', flexDirection:"column" }}>
                               
                                  {this.state.mensajes.city1 ? <p >*The City must contain only uppercase letter and lowercase letter</p> : this.state.mensajes.city2 ? <p>*The City you entered in too long</p> : <p></p>}
                                     <input style={{ width: '40vw', marginBottom:"3vh" }} onChange={this.readContact} type="text" id="city" name="city" placeholder="Write your city here" />
                                   
                                     {this.state.mensajes.address1 ? <p>*The address must contain only uppercase letter, lowercase letter and numbers</p> : this.state.mensajes.address2 ? <p>*The address you entered in too long</p> : <p></p>}
                                    <input style={{ width: '40vw',marginBottom:"3vh" }} onChange={this.readContact} type="text" id="address" name="address" placeholder="Write your address here" />
                                 
                                    <select style={{ width: '40vw',marginBottom:"3vh" }} name="country" onChange={this.readContact} >
                                        {this.props.countries.map(country => {
                                            return <option name="country">{country.country}</option>
                                        })}
                                    </select>

                                    {this.state.mensajes.postalCode ? <p>*The postalCode you entered in too long</p> : <p></p>}
                                    <input style={{ width: '40vw',marginBottom:"3vh"  }} onChange={this.readContact} type="number" id="postalCode" name="postalCode" placeholder="Write your postal code here" />

                                    {this.state.mensajes.postalCode ? <p>*The phone number you entered in too long</p> : <p></p>}
                                    <input style={{ width: '40vw',marginBottom:"3vh"  }} onChange={this.readContact} type="number" id="phoneNumber" name="phoneNumber" placeholder="Write your phone number here" />
                                </div>
                                   
                                {/* <div>
                                    <select>
                                        {this.props.countries.map(country => {
                                            return <option onChange={this.readContact} name="country">{country.country}</option>
                                        })}
                                    </select>
                                </div> */}
                                <button onClick={this.sendContact} className="createAccount button" style={{ width: '40vw', margin: '0vh auto', marginLeft:"2vw" }}>Send information</button>
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
    // getContact: authActions.getContact
}

export default connect(mapStateToProps, mapDispatchToProps)(Address)