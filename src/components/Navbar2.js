import React from 'react';
import { FaHome } from 'react-icons/fa';

const Navbar2 = () => {
    return (
        <>
            <nav className='white-nav'>
                <a href='/'>
                    <FaHome size={'3rem'} className='homeIcon' />
                </a>
                <div className='Links'>
                    <ul>
                        <li>
                            <a href='#quiz'>Take a Quiz</a>
                        </li>

                        <li>
                            <a href='#community'>Community</a>
                        </li>

                        <li>
                            <a href='/shared-experiences'>Shared Experiences</a>
                        </li>

                        <li>
                            <a href='/volunteers'>Volunteers</a>
                        </li>

                        <li>
                            <a href='/blogs'>Blogs</a>
                        </li>
                    </ul>
                </div>
            </nav></>
    )
}

export default Navbar2