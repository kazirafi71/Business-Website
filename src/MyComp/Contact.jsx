import React from 'react';
import SocialCommon from './SocialCommon'
import Common3 from './Common3'
import bg from './Images/price-header-bg.jpg'
import Contactinfo from  './Contactinfo'
import Form from './Form';
import {cData} from './AllData'

const Contact = () => {
    return (
        <>
        <section>
        <Common3 
            img={bg}
            title='Get an estimate'
            des='Fill out this simple form. Our team will contact you promptly to discuss next steps.'
            />
        </section>

        <section className='bg-dark'>
            <div className="container py-5" style={{backgroundColor:'black'}}>
                <div className="row">
                    <div className="col text-center text-light" >
                        <p style={{color:'#0AE9A5'}}>CONTACT ME</p>
                        <h1>Let’s Chat</h1>
                        <p>Fill this out so we can learn more about you and your needs.</p>
                    </div>
                </div>
                <Form/>
                    </div>
                    
                
        </section>

        <section className='bg-dark py-5'>
            <div className="container">
            <div className="row">
                
                    {cData.map((val,index)=>{
                        return(
                            <div className="col-md-4">
                        <Contactinfo
                        icon={val.icon}
                        title={val.title}
                        des1={val.des1}
                        des2={val.des2}
                        />
                        </div>
                        )
                    })}
                    
                
            </div>
            </div>
            
        </section>
        
        <div className='py-5' style={{backgroundColor:'black'}}>
            <div className="row">
                <div className="col text-center">
                <p className='para'>SOCIAL MEDIA</p>
                <h1 className='text-light '>Let’s Be Friends</h1>
                </div>
            </div>
            
            <div className="container ">
                <div className="row ">
                <SocialCommon/>
                    </div>
                </div>
            
        </div>

        
        </>
    );
};

export default Contact;