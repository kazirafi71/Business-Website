import React from 'react';

const Common3 = (props) => {
    return (
        <div>
            <section id="head" style={{backgroundImage: `url(${props.img})`}}>
            
            <div className="overlay ">
                <div className="background">
            <div className="container">
                <div className="row">
                    <div className="col text ">
    <h1>{props.title}</h1>
    <p className='py-3'>{props.des}</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        </div>
    );
};

export default Common3;