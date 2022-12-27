import React from 'react';
import BrandLogo from '../assets/images/BeSmart-modified 1.png';
import Button from './Button';
import { Link } from 'react-router-dom';

export default function Navigation() {
    return (
        <nav className='navigation container'>
            <div className="brand-icon">
                <img src={BrandLogo} alt="brand-icon" />
            </div>
            <div className="menu-nav">
                <ul>
                    <Link to='/'>Home</Link>
                    <Link to='/services'>Services</Link>
                    <Link to='/contact'>Contact Us</Link>
                    <Link to='/portofolio'>Portofolio</Link>
                    <div className="btn-regis">
                        <Button name='Login' />
                        <button className='btn-register'>Register</button>
                    </div>
                </ul>

            </div>
        </nav>
    )
}
