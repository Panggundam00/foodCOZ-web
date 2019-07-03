import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route } from 'react-router-dom'
import OrderPage from './OrderPage'
import Login from './Login'
import MenuPage from './MenuPage';
import MEditMenu from './MEditMenu'
import MenuEditPage from './pages/MenuEditPage'
// import Test from './pages/Test'
// import totalbill from './totalbill.html'

const App = () => {
  return(
    <Router >
        <div>
          <Route path="/" exact component={Login}/>
          <Route path="/orderPage" component={OrderPage}/>
          <Route path="/menuPage" component={MenuPage}/>   {/* <------ didn't use*/}
          {/* <Route path="/editTable" component={EditTable}/> */}
          <Route path="/meditMenu" component={MEditMenu}/>    
          <Route path="/menueditpage" component={MenuEditPage}/>
          {/* <Route path="/totalbill" component={totalbill}/> */}
        </div>
    </Router>
        
  )
}  

export default App;