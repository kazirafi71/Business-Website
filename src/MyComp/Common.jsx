import React from 'react';

const Common = (props) => {
    console.log(props)
    return (
        <div>
            <div className="py-5 col text-center ">
            <p>{props.title}</p>
            <h2>{props.des}</h2>
        </div>
        </div>
    );
};

export default Common;