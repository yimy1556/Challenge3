import React from 'react';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import Register from './pages/Register';
import About from './pages/About';
import Shop from './pages/Shop';
import SelectProduct from './pages/SelectProduct'
import ForgotPass from './pages/ForgotPass'
import AddItem from './pages/AddItem'
import ModifyItem from './pages/ModifyItem'
import DeleteItem from './pages/DeleteItem'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import authActions from './redux/actions/authActions'
import { connect } from 'react-redux'
import './styles/styles.css'
import './styles/RegisterLogIn.css'
import LogOut from './components/LogOut';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App(props) {
  console.log(props.rol)
  if (localStorage.getItem('token') && props.token === "") {
    props.forcedLogIn(localStorage.getItem('token'))
  }
  if (props.rol == "admin") {
    var myRoutes =
      (<Switch>
        <Route exact path="/new" component={AddItem} />
        <Route exact path="/modify" component={ModifyItem} />
        <Route exact path="/delete" component={DeleteItem} />
        <Route path="/logOut" component={LogOut} />
        <Redirect to="/new" />
      </Switch>
      )
  } else if (props.token || localStorage.getItem('token')) {
    var myRoutes =
      (<Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/shop" component={Shop} />
        <Route path="/logOut" component={LogOut} />
        <Route path="/selectProduct/:id" component={SelectProduct} />
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
  forcedLogIn: authActions.forcedLogIn
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
