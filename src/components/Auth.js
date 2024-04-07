import React, { useContext, useEffect, useState } from 'react';
import { FaRegUser, FaLock } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../MyContext';
import Profile from './Profile';
import { db } from '../config'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Auth = () => {
    const { userInfo, setUserInfo } = useContext(MyContext);

    const authFirebase = getAuth();
    const [auth, setAuth] = useState('signup');
    const [user, setUser] = useState({
        email: '',
        username: '',
        password: '',
        gender: '',
        dob: new Date()
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
                .then(async (userCredential) => {
                    toast('Sign-up successful !')
                    setTimeout(()=>{
                        setAuth('login');
                    }, 6000)  
                    try {
                        await addDoc(collection(db, "users"), (user));
                    } catch (err) {
                        console.log(err);
                    }
                    console.log(userCredential);
                })
                .catch((err) => {
                    setError(err.message);
                    console.log(err);
                });
        } else {
            signInWithEmailAndPassword(authFirebase, user.email, user.password)
                .then(async (userCredential) => {
                    const docRef = query(collection(db, "users"), where ("email", "==", user.email));
                    const userData = await getDocs(docRef);
                    console.log(userData.docs[0]._document.data.value.mapValue.fields)
                    localStorage.setItem('Info', JSON.stringify(userData.docs[0]._document.data.value.mapValue.fields));
                    toast('User Logged In !')
                    setTimeout(()=>{
                        setInfo(false);
                        setUserInfo(true)
                        navigate('/');
                    }, 6000) 
                })
                .catch((err) => {
                    setError(err.message);
                    console.log(err);
                });
        }
    }

    const [Info, setInfo] = useState(true);

    const handleDateChange = (date) => {
        setUser({ ...user, dob: date });
    };

    return (
        <>
            {(Info) ?
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
                                <ToastContainer />
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
                                <div>
                                    Gender:
                                    <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', width: '20rem' }}>
                                        <label>
                                            <input
                                                type='radio'
                                                name='gender'
                                                value='male'
                                                onChange={formDataHAND}
                                                checked={user.gender === 'male'}
                                                style={{ width: '10%' }}
                                            />
                                            Male
                                        </label>
                                        <label>
                                            <input
                                                type='radio'
                                                name='gender'
                                                value='female'
                                                onChange={formDataHAND}
                                                checked={user.gender === 'female'}
                                                style={{ width: '10%' }}
                                            />
                                            Female
                                        </label>
                                        <label>
                                            <input
                                                type='radio'
                                                name='gender'
                                                value='other'
                                                onChange={formDataHAND}
                                                checked={user.gender === 'other'}
                                                style={{ width: '10%' }}
                                            />
                                            Other
                                        </label>
                                    </div>

                                </div>
                                <div className='date'>
                                    Date of Birth:
                                    <DatePicker
                                        selected={user.dob}
                                        onChange={handleDateChange}
                                        dateFormat='dd/MM/yyyy'
                                        inline
                                    />
                                </div>
                                {error && <p className="error">{error}</p>}
                                <button onClick={buttonFunction}>Signup Now</button>
                                <ToastContainer />
                            </form>
                            <div className='optional'>
                                <span>or</span>
                                <p onClick={() => setAuth('login')}>Login</p>
                            </div>
                        </div >
                        <div className='signup-img-bg'>
                            <div className='signup-img-gif'></div>
                        </div>
                    </div >
                ))
                : <Profile />}
        </>
    );
};

export default Auth;
