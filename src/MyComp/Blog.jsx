import React from 'react';
import Common3 from './Common3'
import img from './Images/portfolio__6.jpg'
import BlogCard from './BlogCard'
import {blData} from './AllData'



const Contact = () => {
    return (
        <div>
            
            <Common3
            img={img}
            title='News Feeds'
            des='Just another Growth site'
            />

            <section id="blog" className='bg-dark py-5'>
                <div className="container">
                    <div className="row">
                        <h1 style={{color:'#0AE9A5'}} className='text-center py-5'>Our Blogs</h1>
                        {blData.map((val,ind)=>{
                            return(
                                <div className="col-md-9 mx-auto m-4">
                            <BlogCard 
                            img={val.img}
                            time={val.time}
                            title={val.title}
                            des={val.des}
                            />
                        </div>

                            )
                        })}
                        
                    </div>
                </div>
            </section>
            
            

        </div>
    );
};

export default Contact;