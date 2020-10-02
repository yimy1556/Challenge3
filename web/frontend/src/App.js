import React from 'react';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import Register from './pages/Register';
import About from './pages/About';
import Buy from './pages/Buy';
import Shop from './pages/Shop';
import Profile from './pages/Profile';
import SelectProduct from './pages/SelectProduct'
import ForgotPass from './pages/ForgotPass'
import AddItem from './pages/AddItem'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import authActions from './redux/actions/authActions'
import shoppingCartActions from './redux/actions/shoppingCartActions'
import itemActions from './redux/actions/itemActions'
import { connect } from 'react-redux'
import FormularioAdmi from './pages/formularioAdmi'
import './styles/styles.css'
import './styles/RegisterLogIn.css'
import LogOut from './components/LogOut';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LowNewsletter from './pages/LowNewsletter'
import Address from './components/Address'
import Faqs from './pages/Faqs';


function App(props) {

  if (localStorage.getItem("listProduct"))
    props.forcedPoducts(localStorage.getItem("listProduct"))
  if (localStorage.getItem("carito"))
    props.forcedCart(localStorage.getItem("carito"))
  if (localStorage.getItem('token') && props.token === "") {
    props.forcedLogIn(localStorage.getItem('token'))
  }
  if (props.rol == "admin") {
    var myRoutes =
      (<Switch>
        <Route exact path="/new" component={AddItem} />
        <Route path="/modify" component={FormularioAdmi} />
        <Route path="/logOut" component={LogOut} />
        <Redirect to="/modify" />
      </Switch>
      )
  } else if (props.token || localStorage.getItem('token')) {
    var myRoutes =
      (<Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/buy" component={Buy} />
        <Route path="/logOut" component={LogOut} />
        <Route path="/selectProduct/:id" component={SelectProduct} />
        <Route path="/profile" component={Profile} />
        <Route path="/lowNewsletter" component={LowNewsletter} />
        <Route path="/buy" component={Buy} />
        <Route path="/address" component={Address} />
        <Route path="/faqs" component={Faqs} />
        <Redirect to="/" />
      </Switch>
      )
  }
  else {
    var myRoutes = (<Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={LogIn} />
      <Route exact path="/about" component={About} />
      <Route exact path="/forgotPass" component={ForgotPass} />
      <Route exact path="/shop" component={Shop} />
      <Route path="/selectProduct/:id" component={SelectProduct} />
      <Route path="/lowNewsletter" component={LowNewsletter} />
      <Route path="/buy" component={Buy} />
      <Route path="/faqs" component={Faqs} />
      <Redirect to="/" />
    </Switch>
    )
  }
  return (
    <>
      <BrowserRouter>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Switch>
          {myRoutes}
        </Switch>
      </BrowserRouter>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    token: state.authReducer.token,
    rol: state.authReducer.rol
  }
}
const mapDispatchToProps = {
  forcedLogIn: authActions.forcedLogIn,
  forcedPoducts: itemActions.forcedPoducts,
  forcedCart: shoppingCartActions.forcedCart
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
