import React from 'react';
import { Link } from 'react-router-dom';
import { OurProducts } from '../../pages/home/HomeItems';

const OurProduct = () => {
    return (
        <div className="Content">
            <h1>Our Product</h1>
            <ul className="Our-Product">
                {OurProducts.map((item, index) => {
                    return (
                        <li key={index}>
                            <div className="Our-Product__Img">
                                <Link to={item.url} >
                                    <img src={item.thumbnail} alt="" />
                                </Link>
                            </div>
                            <div className="Our-Product__Desc">
                                <Link to="{item.url}">{item.name}</Link>
                                <div className="Our-Product__Text">
                                    <p>{item.description}</p>
                                    <p>{'' || item.description2}</p>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default OurProduct;