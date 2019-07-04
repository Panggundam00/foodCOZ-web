import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route } from 'react-router-dom'
import OrderPage from './pages/PayPage'
import Login from './pages/Login'
import MEditMenu from './pages/ManagerEditMenu'
import MenuEditPage from './pages/OrderPage'

const App = () => {
  return(
    <Router >
        <div>
          <Route path="/" exact component={Login}/>
          <Route path="/orderPage" component={OrderPage}/>
          <Route path="/meditMenu" component={MEditMenu}/>
          <Route path="/menueditpage" component={MenuEditPage}/>
        </div>
    </Router>
        
  )
}  

export default App;