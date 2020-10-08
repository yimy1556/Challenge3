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
import itemActions from '../redux/actions/itemActions'
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

class Profile extends React.Component {



    componentDidMount() {
        this.scrollToTop()
        this.props.getCountries()
    }

    scrollToTop() {
        scroll.scrollToTop();
    }

    render() {

        return (
            <>

                <Header />
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: '100vw', height: '20vh', background: '#111111', color: 'white', textAlign: 'center', fontSize: '60px', fontWeight: 'bold' }}>
                    <p>My Account</p>
                </div>
                <div style={{ display: "flex", margin: '4em', justifyContent: "space-around" }}>
                    <div className="loginRegister" style={{ display: "flex", flexDirection: 'column' }}>
                        <h3>Profile<ChevronRightIcon fontSize="medium" /></h3>
                        <NavLink to="/address" style={{ textDecoration: 'none', color: 'gray' }}><h3>Address</h3></NavLink>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', width: '70%' }}>
                        <h2 style={{ padding: '1vh 0vh' }}>Your info</h2>
                        <div style={{ boxShadow: '-1px 1px 13px -4px rgba(0,0,0,0.15)', padding: '5vh', display: 'flex', justifyContent: "space-around" }}>
                            <div style={{ display: 'flex', flexDirection: 'column', width: '55%' }}>
                                <h5 style={{ fontWeight: 'bold' }}>Name and last name</h5>
                                <h5>{this.props.userlogged.firstName} {this.props.userlogged.lastName}</h5>
                                <h5 style={{ fontWeight: 'bold' }}>Mail</h5>
                                <h5>{this.props.userlogged.mail}</h5>
                                <button className="createAccount button" style={{ width: '20%', margin: '2vh 0vh' }}><NavLink to="/logOut" style={{ textDecoration: 'none', color:'whitesmoke' }}>Logout</NavLink></button>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', width: '30%' }}>
                                <ChangePass />
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
        countries: state.itemReducer.countries
    }
}

const mapDispatchToProps = {
    contact: authActions.postContact,
    getCountries: itemActions.getCountries,
    getUser: authActions.logUser,
    // getContact: authActions.getContact
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)