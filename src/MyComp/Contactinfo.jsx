import React from 'react';

const Contactinfo = (props) => {

    const {icon,title,des1,des2}=props
    return (
        <div className='contactInfo'>
            <div className="card mb-3 bg-dark text-white">
  <div className="row no-gutters">
    <div className="col-md-2">
    <i className='icons' style={{fontSize:'35px', padding:'20px' }} className={icon} aria-hidden="true"></i>
    </div>
    <div className="col-md-10">
      <div className="card-body">
    <h5 style={{color:'#0AE9A5'}} className="card-title">{title}</h5>
    <p className="card-text">{des1}</p>
    <p className="card-text">{des2}</p>
        
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Contactinfo;