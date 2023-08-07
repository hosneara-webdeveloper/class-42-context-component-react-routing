/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import Sister from '../Sister/Sister';
import './Unty.css'

const Unty = ({house}) => {
    return (
        <div className='unt'>
            <div className='flex'>
           <p>Unty</p> 
           {house}
           <Sister house = {house}></Sister>
        </div>
        </div>
    );
};

export default Unty;