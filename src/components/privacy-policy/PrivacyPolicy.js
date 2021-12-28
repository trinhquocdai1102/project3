import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = (props) => {
    // console.log(props)
    return (
        <div className="PrivacyPolicy">
            <label>
                <input type="checkbox" required onChange={() => props.onChange()}/> 
                <span>Agree to the terms of the &nbsp;
                    <Link to="/SubAgreement">Care Subscriber Agreement</Link>
                        &nbsp; and the &nbsp;
                    <Link to="/PrivacyPolicyContent">Care Privacy Policy.</Link>
                </span>
            </label>
        </div>
    );
};

export default PrivacyPolicy;