import React from 'react';
import { PartnerItems } from './PartnerItems';

const PartneredWith = () => {
    return (
        <div className='PartnerWith'>
            <h1>We're Partnered With</h1>
            <ul className="PartnerWith-List">
                {PartnerItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <img src={item.url} alt={item.description}/>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default PartneredWith;