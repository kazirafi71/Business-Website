import React, { useEffect } from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'

const BlogCard = (props) => {
  useEffect(()=>{
    Aos.init({duration:2000},[])
})
    const {img,time,title,des}=props;
    return (
        <div>
            <div data-aos="fade-up" class="card" >
  <img src={img} class="card-img-top" alt="..."/>
  <div class="card-body">
    <span>{time}</span>
    <h5 class="card-title">{title}</h5>
    <p class="card-text">{des}</p>
    <a href="#" class="btn btn-primary">Know More</a>
  </div>
</div>
        </div>
    );
};

export default BlogCard;