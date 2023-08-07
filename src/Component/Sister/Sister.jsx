/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { moneyContext } from '../About/About';

const Sister = () => {
    const house = useContext(moneyContext);
    return (
        <div className='flex'>
           <p>Sister</p>
            {house}
        </div>
    );
};

export default Sister;