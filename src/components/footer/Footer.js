import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css'
import { ContactItems, HelpItems } from './FooterItems';

const Footer = () => {
    return (
        <div className="Footer">
            <ul className="Footer-List">
                <li className="FooterLogo">
                    <img src='/image//logo/logo.jpg' alt='logo' />
                    <span>Care</span>
                </li>
                <li className="FooterHelp">
                    <ul>
                        {HelpItems.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Link to={item.url}>
                                        {item.name}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </li>
                <li className="FooterContact">
                    <ul>
                        {ContactItems.map((item, index) => {
                            return (
                                <li key={index}>
                                        {item.name}{' '}{item.description}
                                </li>
                            )
                        })}
                    </ul>
                </li>
            </ul>
            <div className="Copy-Right">&copy; FreshShop All rights reserved</div>
        </div>
    );
};

export default Footer;