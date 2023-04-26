import React from 'react';
import logo from '../images/logo.png';

const Navbar = () => {
    return (
        <>
            <nav className='main-nav'>
                <div className='logo'>
                    <li>
                        <img src={logo} alt='my-logo'></img>
                    </li>
                </div>
                <div className='authentication'>
                    <ul>
                        <li>
                            <a href='/about'>About</a>
                        </li>

                        <li>
                            <a href='/login'>Login/Signup</a>
                        </li>
                    </ul>

                </div>
            </nav>
        </>
    )
}

export default Navbar