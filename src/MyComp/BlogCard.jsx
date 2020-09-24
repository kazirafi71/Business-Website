import React from 'react';

const BlogCard = (props) => {
    const {img,time,title,des}=props;
    return (
        <div>
            <div class="card" >
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