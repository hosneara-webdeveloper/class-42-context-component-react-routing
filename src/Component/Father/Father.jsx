/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import Brother from '../Brother/Brother';
import './Father.css'

const Father = ({house}) => {
    return (
        <div className='fath'>
            <div className='flex'>
            
            <p>Father</p>
            <h5>House: {house}</h5>
            <Brother ></Brother>
        </div>
        </div>
    );
};

export default Father;