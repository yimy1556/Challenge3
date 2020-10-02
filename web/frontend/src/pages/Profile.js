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
        address: [],
    }

    componentDidMount() {
        this.scrollToTop()
        this.props.getCountries()
    }

    scrollToTop() {
        scroll.scrollToTop();
    }

    readAddress = e => {
        this.setState({
            ...this.state,
            address: e.target.value
        })
    }

    sendAddress = async () => {
        await this.props.address(this.state.address, this.props.userlogged.token)
        toast.success("Thank you for signing up")
    }

    render() {
        console.log(this.props.userlogged);
        console.log(this.props.userlogged.direction);
        console.log(this.props.countries)
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
                            <h3>Your address</h3>
                            <h4>{this.props.userlogged.direction}</h4>
                            <input onChange={this.readAddress} type="text" id="address" name="address" placeholder="Write your address here" />
                            <button onClick={this.sendAddress}>Enviar dirección</button>
                            <NavLink to="/logOut">Logout</NavLink>
                        </div>
                    </div>
                    <select>
                        {this.props.countries.map(country => {
                            return <option>{country.country}</option>
                        })}
                    </select>
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
    address: authActions.postDirection,
    getCountries: itemActions.getCountries
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)