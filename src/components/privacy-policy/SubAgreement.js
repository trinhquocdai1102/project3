import React from 'react';
import { Link } from 'react-router-dom';
import { SubAgreementItems } from './PrivacyItems';

const SubAgreement = () => {
    return (
        <div className="Content Privacy-Content">
            <h1>Care Subscriber Agreement</h1>
             {SubAgreementItems.map((item, index) => {
                 return (
                     <p key={index}>{item.description}</p>
                 )
             })}
            <div className="PrivacyPolicy-Content">
                <span>
                    <Link to="/SubAgreement">Care Subscriber Agreement</Link>
                        &nbsp; and the &nbsp;
                    <Link to="/PrivacyPolicyContent">Care Privacy Policy.</Link>
                </span>
            </div>
        </div>
    );
};

export default SubAgreement;