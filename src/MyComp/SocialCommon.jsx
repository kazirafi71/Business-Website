import React, { useEffect } from 'react';
import {socialData} from './AllData'
import Aos from 'aos'
import 'aos/dist/aos.css'


const SocialCommon = () => {
    useEffect(()=>{
        Aos.init({duration:2000},[])
    })
    console.log(socialData)
    return (
        <div id='social'>
            <div className="container">
                <div  className="row justify-content-around">
                {socialData.map((val)=>{
                return(<div  className="shadow  g-4 gx-4 text-center col-md-5 box">
                    <div data-aos="fade-up"  className="row rounded abc p-2 bg-dark">
                    <div data-aos="fade-left"  className="col-8 text-light">
                        <h1>{val.title}</h1>
                        <p style={{color:' #00E9A5'}}>{val.des}</p>
                    </div>
                    <div className="col-4">
                    <i style={{fontSize:'40px'}} className='icon-style' className={val.icon} aria-hidden="true"></i>
                    </div>
                    </div>
                    
                
                </div>
                )
            })}
                </div>
            </div>
            
            
            
        </div>
    );
};

export default SocialCommon;