import React from 'react';
import { ChooseUsItems } from './ChooseUsItems';

const ChooseUs = () => {
    return (
        <>
             <div className="ChooseUs">
                <h1>Why Choose Us</h1>
                <ul className="ChooseUs-List">
                    {ChooseUsItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <div className="ChooseUs-Item">
                                    <img src={item.icon} alt={item.name}/>
                                    <h3>{item.name}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>   
        </>
    );
};

export default ChooseUs;