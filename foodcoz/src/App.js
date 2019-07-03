import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route } from 'react-router-dom'
import OrderPage from './OrderPage'
import Login from './Login'
import EditTable from './EditTable'
import MenuPage from './MenuPage';
import MEditMenu from './MEditMenu'
// import totalbill from './totalbill.html'

const App = () => {
  return(
    <Router >
        <div>
        <Route path="/" exact component={Login}/>
        <Route path="/orderPage" component={OrderPage}/>
        <Route path="/menuPage" component={MenuPage}/>
        <Route path="/editTable" component={EditTable}/>
        <Route path="/meditMenu" component={MEditMenu}/>
        {/* <Route path="/totalbill" component={totalbill}/> */}
        </div>
    </Router>
        
  )
}  

export default App;