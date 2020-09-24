import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import './MyComp/Style.scss'
import {Switch,Route, Redirect} from 'react-router-dom'
import Home from './MyComp/Home'
import Blog from './MyComp/Blog'
import Price from './MyComp/Price'
import Nav from './MyComp/Nav'
import Contact from './MyComp/Contact'
import Footer from './MyComp/Footer'


function App() {
  return (
    <div className="App">
      <Nav/>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/price' component={Price}></Route>
        <Route exact path='/blog' component={Blog}></Route>
        <Route exact path='/contact' component={Contact}></Route>
        <Redirect to='/'></Redirect>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
