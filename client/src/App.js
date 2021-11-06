import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Components
import Navbar from './components/Navbar';
import Announcement from './components/Announcement';


// Pages
import Home from './pages/Home'
// import Product from './pages/ProductDetails'
import Cart from './pages/Cart'
import React from 'react'
import Login from './pages/Login'
import ProductList from './pages/ProductList'
import ProductDetails from './pages/ProductDetails'
import Register from './pages/Register'

const user = {
  firstName: 'Taiwo',
  lastName: 'Olapade'
}
function App() {

  return (
    <Router>
      <Announcement />
        <Navbar  user = {user}/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/product/:id' component={ProductDetails}/>
          <Route path='/cart' component={Cart}/>
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Register}/>
          <Route path='/productlist' component={ProductList}/>
          {/* <Route path='/productdetail' component={ProductDetails}/> */}
        </Switch>
       
        {/* Sidebar */}
        {/* Backdrop */}
    </Router>    
  );
}

export default App;
