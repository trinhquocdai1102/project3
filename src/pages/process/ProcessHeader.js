import React from 'react';
import {Link} from 'react-router-dom'
import { ProcessDistanceItems } from './ProcessItems';

const ProcessHeader = () => {
    return (
        <div>
            <ul className="Process-Header">
                {ProcessDistanceItems.map((item, index) => {
                    return(
                        <li key={index} className={item.className}>
                            <Link key={index} to={item.url}>
                                <div>
                                    <img src={item.thumbnail} alt={item.name}/>
                                </div>
                                <div>{item.name}</div>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default ProcessHeader;