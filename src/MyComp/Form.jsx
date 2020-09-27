
import React, { useEffect } from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'
const Form = () => {
  useEffect(()=>{
    Aos.init({duration:2000},[])
})
    return (
        <div data-aos="fade-left" >

            <form >
  <div  className="row ">
    <div  className="col m-4">
      <input type="text" className="form-control" placeholder="Full name"/>
    </div>
    <div className="col m-4">
      <input type="text" className="form-control" placeholder="Email"/>
    </div>
  </div>
  <div className="row">
    <div className="col m-4">
      <input type="text" className="form-control" placeholder="Organization Name"/>
    </div>
    <div class="col m-4">
      <input type="text" className="form-control" placeholder="Date OF Birth"/>
    </div>
  </div>
  <div className="row">
    <div class="col m-4">
      <input type="text" className="form-control" placeholder="Budget"/>
    </div>
    <div className="col m-4">
      <input type="text" class="form-control" placeholder="Phone Number"/>
    </div>
  </div>
  <div class="form-group m-4 mb-0">
    
    <textarea placeholder='Massage' class="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
  </div>
  <button className='btn btn-outline-success btn-lg m-4'>Submit</button>
  
</form>

        </div>
    );
};

export default Form;