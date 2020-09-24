import React from 'react';
import SocialCommon from './SocialCommon'
import Common3 from './Common3'
import Background from './Images/contact-image-1.jpg'
import PriceTable from './PriceTable'
import {price} from './AllData'

const Contact = () => {
    return (
        <>
        <div className='price'>
            <Common3
            img={Background}
            title='Simple pricing that scales
            with your business'
            des='Whether you’re an business in growth mode or a game studio'
            />
            <section id='' className='py-5' style={{backgroundColor:'black'}}>
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <p className='para'>SOCIAL MEDIA</p>
                            <h1 className='text-light'>Let’s Be Friends</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            
                        </div>
                    <SocialCommon/>
                    </div>
                </div>
            </section>


            
        </div>

        <section>
            <div className="container py-5 ">
                <div className="row">
                    {price.map((val,index)=>{
                        return(

                    <div className="col-md-4 ">
                    <PriceTable
                    icon={val.icon}
                    title={val.title}
                    i1={val.i1}
                    i2={val.i2}
                    i3={val.i3}
                    i4={val.i4}
                    i5={val.i5}
                    i6={val.i6}
                    i7={val.i7}
                    p={val.p}
                    />
                    
                    </div>
                        )
                    })}
                    
                </div>
            </div>
            
        </section>
        </>
    );
};

export default Contact;