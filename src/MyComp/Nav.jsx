import React from 'react';
import {NavLink} from 'react-router-dom'
import img from './Images/Group-2685@2x.png'

const Nav = () => {
    return (
        <div className= 'navitems'>
           
            <div className=' container '>
            <nav className="navbar navbar-expand-lg navbar-light ">
            
    <NavLink className="navbar-brand" to='/'><img src={img}></img>
</NavLink>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">

        <li className="nav-item">
            <NavLink exact activeClassName='active-class' className="nav-link xyz" to='/'>Home</NavLink>
        </li>
        <li className="nav-item">
            <NavLink activeClassName='active-class' className="nav-link xyz" to='/price'>Price</NavLink>
        </li>
        <li className="nav-item">
            <NavLink activeClassName='active-class' className="nav-link xyz" to='/blog'>Blog</NavLink>
        </li>
        <li className="nav-item">
            <NavLink activeClassName='active-class' className="nav-link xyz" to='/contact'>Contact</NavLink>
        </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
    </form>
    </div>
</nav>
        </div>
        </div>
    );
};

export default Nav;