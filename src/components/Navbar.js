import React, { useContext, useEffect, useState } from 'react';
import logo from '../images/logo.png';
import { MyContext } from '../MyContext';

const Navbar = () => {
    const {userInfo, setUserInfo} = useContext(MyContext);

    useEffect(()=> {
        localStorage.getItem('Info') ? setUserInfo(true) : setUserInfo(false);
    }, []); 

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
                            {userInfo ? <a href='/profile'>Profile</a> : <a href='/auth'>Login/Signup</a>}
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
