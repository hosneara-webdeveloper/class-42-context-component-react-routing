/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { moneyContext } from '../About/About';

const Son = () => {
   const [house, SetHouse] = useContext(moneyContext)
    return (
        <div className='flex'>
        
           <p>Son</p> 
            {house} 
         <button onClick={()=>SetHouse(house+1)}>House Increase</button>
        </div>
    );
};

export default Son;