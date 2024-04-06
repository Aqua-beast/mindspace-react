import React from 'react';
import { FaHome } from 'react-icons/fa';

const Navbar2 = () => {
    return (
        <>
            <nav className='white-nav'>
                <FaHome size={'3rem'} className='homeIcon' />
                <div className='Links'>
                    <ul>
                        <li>
                            <a href='/'>Take a Quiz</a>
                        </li>

                        <li>
                            <a href='/shared-experiences'>Shared Experiences</a>
                        </li>

                        <li>
                            <a href='/'>Resources</a>
                        </li>

                        <li>
                            <a href='/blogs'>Blogs</a>
                        </li>

                        <li>
                            <a href='/'>Who We Are ?</a>
                        </li>
                    </ul>
                </div>
            </nav></>
    )
}

export default Navbar2