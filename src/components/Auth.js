import React, { useContext, useEffect, useState } from 'react';
import { FaRegUser, FaLock } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../MyContext';
import Profile from './Profile';
import {db} from '../config'

const Auth = () => {
    const { userInfo, setUserInfo } = useContext(MyContext);

    const authFirebase = getAuth();
    const [auth, setAuth] = useState('signup');
    const [user, setUser] = useState({
        email: '',
        username: '',
        password: ''
    });
    const [error, setError] = useState(null);
    const navigate = useNavigate()

    const formDataHAND = (e) => {
        const { name, value } = e.target;
        setUser(prevUser => ({
            ...prevUser,
            [name]: value
        }))
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
    };

    const buttonFunction = async () => {
        if (auth === 'signup') {
            createUserWithEmailAndPassword(authFirebase, user.email, user.password)
                .then((userCredential) => {
                    setAuth('login');
                    console.log(userCredential);
                })
                .catch((err) => {
                    setError(err.message);
                    console.log(err);
                });
        } else {
            signInWithEmailAndPassword(authFirebase, user.email, user.password)
                .then(async (userCredential)  => {
                    const userData = {
                        email: user.email,
                        username: user.username,
                        password: user.password
                    };
                    localStorage.setItem('Info', JSON.stringify(userData));
                    setInfo(false);
                    setUserInfo(true)
                    navigate('/');
                })
                .catch((err) => {
                    setError(err.message);
                    console.log(err);
                });
        }
    }

    const [Info, setInfo] = useState(true);

    return (
        <>
        {(Info)? 
            (auth === 'login' ? (
                <div className='signup'>
                    <div className='signup-box'>
                        <h1 className=''>Login</h1>
                        <p>Hey come on let's have some fun?</p>
                        <form className='signup-form' onSubmit={handleFormSubmit}>
                            <div>
                                <MdEmail />
                                <input
                                    type='email'
                                    required
                                    name='email'
                                    placeholder='email'
                                    onChange={formDataHAND}
                                    value={user.email}
                                />
                            </div>
                            <div>
                                <FaRegUser />
                                <input
                                    type='text'
                                    name='username'
                                    required
                                    placeholder='Username'
                                    onChange={formDataHAND}
                                    value={user.username}
                                />
                            </div>
                            <div>
                                <FaLock />
                                <input
                                    type='password'
                                    required
                                    placeholder='password'
                                    name='password'
                                    onChange={formDataHAND}
                                    value={user.password}
                                />
                            </div>
                            <button onClick={buttonFunction}>Login Now</button>
                        </form>
                        <div className='optional'>
                            <span>or</span>
                            <p onClick={() => setAuth('signup')}>Signup</p>
                        </div>
                    </div>
                    <div className='signup-img-bg'>
                        <div className='signup-img-gif'></div>
                    </div>
                </div>
            ) : (
                <div className='signup'>
                    <div className='signup-box'>
                        <h1>Signup</h1>
                        <p>How do I get started here at MindSpace?</p>
                        <form className='signup-form' onSubmit={handleFormSubmit}>
                            <div>
                                <MdEmail />
                                <input
                                    type='email'
                                    required
                                    name='email'
                                    placeholder='email'
                                    onChange={formDataHAND}
                                    value={user.email}
                                />
                            </div>
                            <div>
                                <FaRegUser />
                                <input
                                    type='text'
                                    name='username'
                                    required
                                    placeholder='Username'
                                    onChange={formDataHAND}
                                    value={user.username}
                                />
                            </div>
                            <div>
                                <FaLock />
                                <input
                                    type='password'
                                    required
                                    placeholder='password'
                                    name='password'
                                    onChange={formDataHAND}
                                    value={user.password}
                                />
                            </div>
                            {error && <p className="error">{error}</p>}
                            <button onClick={buttonFunction}>Signup Now</button>
                        </form>
                        <div className='optional'>
                            <span>or</span>
                            <p onClick={() => setAuth('login')}>Login</p>
                        </div>
                    </div>
                    <div className='signup-img-bg'>
                        <div className='signup-img-gif'></div>
                    </div>
                </div>
            ))
            :<Profile />}
        </>
    );
};

export default Auth;
