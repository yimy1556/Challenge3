import React from 'react'
import Header from '../components/Header'
import '../styles/about.css'
import { animateScroll as scroll } from 'react-scroll'
import ChatBotComponent from '../components/ChatBotComponent'
import Footer from '../components/Footer'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'


class Profile extends React.Component {


    componentDidMount() {
        this.scrollToTop()
    }

    scrollToTop() {
        scroll.scrollToTop();
    }


    render() {
        console.log(this.props.userlogged)
        return (
            <>

                <Header />
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: '100vw', height: '20vh', background: '#111111', color: 'white', textAlign: 'center', fontSize: '60px', fontWeight: 'bold' }}>
                    <p>My Account</p>
                </div>
                <div style={{ margin: '4em' }}>
                    <div>
                        <div>
                            <h2>{this.props.userlogged.firstName} {this.props.userlogged.lastName}</h2>
                            <p>{this.props.userlogged.mail}</p>
                        </div>
                        <div>
                            <h3>Order History</h3>
                            <h3>Your adress</h3>
                            <NavLink to="/logOut">Logout</NavLink>
                        </div>
                    </div>
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
        userlogged: state.authReducer
    }
}

export default connect(mapStateToProps)(Profile)