import React, { useEffect } from 'react';
import img from './Images/home_man.png'
import Common from './Common'
import data,{expData,skillData,blogData} from './AllData'
import img2 from './Images/2 (1).jpg';
import Aos from 'aos'
import 'aos/dist/aos.css'




const Contact = () => {
    useEffect(()=>{
        Aos.init({duration:2000},[])
    })
    
    console.log(skillData)
    return (
        <>
        <section className='Header' id='head'>
        <div >
            <div className="container ">
                <div className="row ">
                    <div className="col-6 margin">
                        <h3 className='hello'>Hello, I’m</h3>
                        <h1 className='name'>Abdur Rohman</h1>
                        <h3>Head Of Ideas</h3>
                    </div>
                    <div className="col-6 mt-5">
                        <img  className='img-fluid image' src={img}></img>
                    </div>
                </div>
            </div>
            
        </div>
        </section>

        {/* About me */}

        <section className='about-me'>
            <div className="container">
                <div className="row  size">
                    <div className="col-md-6 col-12">
                        <p className='' style={{color:'#0A7379'}}>ABOUT ME</p>
                        <h4 className='mb-4' >Why hire me for your next project?</h4>
                        <p className='lead'>Meet my startup design agency Shape Rex Currently I am working at CodeNext as Product Designer. Before that I’ve worked at SpurBee, Dhaka as a UX, UI Designer. Meet my startup design agency Shape Rex Currently I am working at CodeNext as Product Designer. Before that I’ve worked at SpurBee, Dhaka as a UX, UI Designer.</p>
                        
                        <a className='mt-4 btn btn-success' href="#head">LEARN MORE</a>
                    </div>
                    <div className="col-md-6">
                        <div className="row justify-content-around">
                                {data.map((val,index)=>{
                                return(
                                    <div data-aos="fade-left" className=" shadow p-5 g-4 gx-4 text-center col-5 box">
                                        
                                    <h1>{val.number}</h1>
                                    <p>{val.title}</p>
                                    </div>
                                )
                                })}
                        </div>
                    </div>
                </div>
            </div>
        </section>

            {/* Experience */}

        <section id='EXPERIENCE'>
            <div  className="container ">
            <div  className="row">
                <Common 
                title='MY EXPERIENCE'
                des='Experience and Skills'
                />
            </div>

            <div  className="row justify-content-around">
                
                {expData.map((val,index)=>{
                    return(<div data-aos="fade-up" className=" p-4 text-light col-md-5 g-4 box ">
                        <span>{val.icon}</span>
                    <h5>{val.time}</h5>
                <h2>{val.title}</h2>
                </div>)
                })}
            </div>
            </div>
        </section>

        {/* MY WORK */}
        
        <section id='MY-WORK'>
            <div className="container">
                <div className="row">
                    <div className="col">
                    <div data-aos="fade-left" className="row">
                <Common 
                
                title='MY WORK'
                des='Our Awesome Projects'
                />
            </div>

            <ul class="nav justify-content-center">
    <li class="nav-item border border-warning bg-danger ">
        <a class="nav-link active text-light" href="#">All Works</a>
    </li>
    <li class="nav-item border border-warning bg-success">
        <a class="nav-link text-light" href="#">Game-Design</a>
    </li>
    <li class="nav-item border border-warning bg-info">
        <a class="nav-link text-light" href="#">Interior</a>
    </li>
    <li class="nav-item border border-warning bg-danger">
        <a class="nav-link text-light" href="#">Product-Design</a>
    </li>
    <li class="nav-item border border-warning bg-warning">
        <a class="nav-link text-light" href="#">Web-Design</a>
    </li>
    
</ul>
                    </div>
                </div>

            </div>
        </section>

        {/* Portfolio */}

        <section id="portfolio">
            <div className="container py-5">
                <div className="row">
                    
                    {skillData.map((val,ind)=>{
                        return(
                            <div data-aos="fade-left" className="col-md-4 g-4 "><img className='img-fluid  ' src={val.img}></img>
                            <h2 className='bg p-2 '>{val.title}</h2>
                            </div>)
                    })}
                    <img src={skillData.img} alt=""/>
                </div>
                
            </div>
        </section>

        {/* TESTIMONIALS */}

        <section id="TESTIMONIALS">
            <div className="container ">
                <div className="row">
                    <div className="col">
                        <Common
                        title='TESTIMONIALS'
                        des='Happy Clients Says'
                        />
                    </div>
                </div>
            </div>
            <div className="container py-5">
                <div className="row text-center ">
                    <div data-aos="fade-up" className="  col-md-8 offset-md-3 ">
                    <div className="card text-center py-4" >
  <img className="card-img-top img-fluid w-25 m-auto rounded-circle" src={img2} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum itaque cumque, est nam voluptatibus quam id, ratione, consequatur delectus repellat laborum maxime cum! Voluptatum impedit, repellendus rerum nemo porro et?</p>
    <a href="#" className="btn btn-primary">Read More</a>
  </div>
</div>
                </div>
                </div>            
            </div>
        </section>

        <section id='GET-UPDATE'>
            <div className="container py-5">
                <div className="row">
                    <div className="col text-center">
                    <Common
                        title='GET UPDATE'
                        des='See Our Blog'
                        />
                    </div>
                </div>
                <div className="row ">
                    {blogData.map((val,index)=>{
                        return(
                        <div data-aos="fade-right" className="col-md-4 g-4">
                            <div class="card" >
  <img class="card-img-top" src={val.img} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
                        </div>)
                    })}
                    
                </div>
            </div>



        </section>
        


        </>
    );
};

export default Contact;