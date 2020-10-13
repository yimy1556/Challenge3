import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { ToastContainer } from 'react-toastify';

// Pages
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import Register from './pages/Register';
import About from './pages/About';
import Buy from './pages/Buy';
import Shop from './pages/Shop';
import Profile from './pages/Profile';
import Success from './pages/Success';
import SelectProduct from './pages/SelectProduct'
import ForgotPass from './pages/ForgotPass'
import AddItem from './pages/AddItem'
import Faqs from './pages/Faqs';
import Payments from './pages/Payments';
import formAdmin from './pages/formAdmin'
import LowNewsletter from './pages/LowNewsletter'

// Components
import Address from './components/Address'
import LogOut from './components/LogOut';

// Actions
import authActions from './redux/actions/authActions'
import shoppingCartActions from './redux/actions/shoppingCartActions'
import itemActions from './redux/actions/itemActions'

// Styles
import './styles/styles.css'
import './styles/RegisterLogIn.css'
import 'react-toastify/dist/ReactToastify.css';
import './styles/home.css'
import './styles/footer.css'
import './styles/shopCart.css'
import './styles/selectProduct.css'

function App(props) {

  if (localStorage.getItem("listProduct"))
    props.forcedPoducts(localStorage.getItem("listProduct"))
  if (localStorage.getItem("shopCart"))
    props.forcedCart(localStorage.getItem("shopCart"))
  if (localStorage.getItem('token') && props.token === "") {
    props.forcedLogIn(localStorage.getItem('token'))
  }
  if (props.rol == "admin") {
    var myRoutes =
      (<Switch>
        <Route exact path="/new" component={AddItem} />
        <Route path="/modify" component={formAdmin} />
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
        <Route path="/success" component={Success} />
        <Route path="/payments" component={Payments} />
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
