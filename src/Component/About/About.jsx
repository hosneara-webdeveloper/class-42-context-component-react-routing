/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Unty from '../Unty/Unty';
import './About.css'

export const moneyContext = createContext() // createContext has come from react
export const landContext = createContext(["NewLand"]) // using default value
const About = () => {
    const [house, SetHouse] = useState(2);
    return (

        <div className='about'>
            <landContext.Provider value={"cottage"}>
            <moneyContext.Provider value={[house, SetHouse]}>
                <div className='flex'>
                    <div><h2>Grand Pa</h2> </div>
                    <Father></Father>
                    <Unty house={house}></Unty>
                    <Uncle house={house}></Uncle>
                </div>
            </moneyContext.Provider>
            </landContext.Provider>

        </div>

    );
};

export default About;