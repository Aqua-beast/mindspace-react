import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../MyContext';

const Profile = () => {
    const { userInfo, setUserInfo } = useContext(MyContext);
    const InfoUser = JSON.parse(localStorage.getItem('Info'));

    const navigate = useNavigate()

    const LogOut = () => {
        localStorage.removeItem('Info')
        setUserInfo(false)
        navigate('/')
    }

    return (
        <div className='profile-container'>
            <h1 className='profile-head'>Profile</h1>
            <div className='profile-body'>
                <div className='profile-body-text'>
                    <p>Email: {InfoUser.email}</p>
                    <p>Username: {InfoUser.username}</p>
                    <p>password: {'*'.repeat(((InfoUser.password).length))}</p>
                    <button className='profile-body-text-button' onClick={LogOut}>Log Out</button>
                </div>
                <div className='profile-img'>
                </div>
            </div>
        </div>
    );
};

export default Profile;
