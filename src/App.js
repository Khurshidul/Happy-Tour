import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import Admin from './Pages/Admin/Admin';
import Booking from './Pages/Booking/Booking';
import ManageOrder from './Pages/Booking/ManageOrder/ManageOrder';
import Home from './Pages/Home/Home/Home';
import News from './Pages/Home/News/News';
import ServiceAdd from './Pages/Home/ServiceAdd/ServiceAdd';
import Services from './Pages/Home/Services/Services';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Register from './Pages/Login/Register/Register';
import ManageAddService from './Pages/ManageAddService/ManageAddService';
import MyOrders from './Pages/MyOrders/MyOrders';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/addService">
              <ServiceAdd></ServiceAdd>     
            </Route>
            <Route path="/manageService">
              <ManageAddService></ManageAddService>     
            </Route>
            <Route path="/admin">
              <Admin></Admin>    
            </Route>
            <Route path="/news">
              <News></News>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/booking/:serviceId">
              <Booking></Booking>
            </PrivateRoute>
            <Route path="/myOrder">
              <MyOrders></MyOrders>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
