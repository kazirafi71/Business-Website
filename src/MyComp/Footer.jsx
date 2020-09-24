import React from 'react';
import data from './AllData';
import img from './Images/Group-2684@2x (1).png'

const Footer = () => {
    const date=new Date();
    
    
    return (
        <div  style={{backgroundColor:'black'}}>
            <div className="container text-light">
                <div className="row py-5 text-center">
                    <div className="col-md-4 mb-sm-5 ">
                        <img src={img}></img>
                    </div>
                    <div className="col-md-4 mb-sm-5">
                        <h1>Let’s Talk?</h1>
                    </div>
                    <div className="col-md-4 ">
                        <a href="#" className='btn btn-warning'>LET'S CHAT</a>
                    </div>
                </div>
                <p className='text-center py-5'>Copyright By@Kazi Rafi-{date.getFullYear()}</p>
            </div>
            
        </div>
    );
};

export default Footer;