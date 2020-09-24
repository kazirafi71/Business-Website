import React from 'react';

const PriceTable = (props) => {
    const {icon,i1,i2,i3,i4,i5,i6,i7,p,title}=props
    return (
        <div className='rounded-circle'>
            
            <div className="card bg-dark text-light" >
  <img src={icon} className='img-fluid py-4 m-2' style={{width:'60px'}} alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    
  </div>
  <ul className="list-group list-group-flush ">
    <li className="list-group-item bg-dark">{i1}</li>
    <li className="list-group-item bg-dark">{i3}</li>
    <li className="list-group-item bg-dark">{i4}</li>
    <li className="list-group-item bg-dark">{i2}</li>
    <li className="list-group-item bg-dark">{i5}</li>
    <li className="list-group-item bg-dark">{i6}</li>
    <li className="list-group-item bg-dark">{i7}</li>
    <li className="list-group-item bg-dark"><h2>{p}</h2></li>
    
  </ul>
  <div class="card-body">
    
    <a href="#" className="card-link btn btn-outline-success btn-lg bg-dark">Get Started</a>
  </div>
</div>
        </div>
    );
};

export default PriceTable;