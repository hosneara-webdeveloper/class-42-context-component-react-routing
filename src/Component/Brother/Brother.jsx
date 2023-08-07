/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import Son from '../Son/son';
import { landContext } from '../About/About';
import './Brother.css'

const Brother = ({house}) => {
  const land = useContext(landContext)
    return (
        <div className='bro'>
          <div className='flex'>
          <p>brother's Property: {land}</p>
          
          {house}
          <Son></Son>  
        </div>
        </div>
    );
};

export default Brother;