import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../MyContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Profile = () => {
    const { userInfo, setUserInfo } = useContext(MyContext);
    const InfoUser = JSON.parse(localStorage.getItem('Info'));

    const navigate = useNavigate()

    const LogOut = () => {
        toast('User has logged out !')
        setTimeout(()=>{
            localStorage.removeItem('Info')
            setUserInfo(false)
            navigate('/')
        }, 6000) 
    }



    return (
        <div className='profile-container'>
            <h1 className='profile-head'>Profile</h1>
            <div className='profile-body'>
                <div className='profile-body-text'>
                    <p>Email: {InfoUser.email.stringValue}</p>
                    <p>Username: {InfoUser.username.stringValue}</p>
                    <p>Password: {'*'.repeat(((InfoUser.password.stringValue).length))}</p>
                    <p>Gender: {InfoUser.gender.stringValue}</p>
                    <p>Date of Birth: {InfoUser.dob.timestampValue.slice(0, 10)}</p>
                    <button className='profile-body-text-button' onClick={LogOut}>Log Out</button>
                    <ToastContainer />
                </div>
                <div className='profile-img'>
                    <img src={InfoUser.gender.stringValue === 'male' ? 'https://img.freepik.com/premium-photo/boy-with-anime-character-his-hoodie_662214-103222.jpg': 'https://qph.cf2.quoracdn.net/main-qimg-71084ba615efcd5cd00716e7613ff6c4'} />
                </div>
            </div>
        </div>
    );
};

export default Profile;
