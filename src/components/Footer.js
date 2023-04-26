import React from 'react'
import logo from '../images/logo.png';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';


const Footer = () => {
  return (
    <>
    <div className='footer'>
        <div className='footer-text'>
            <ul>
            <li>
            <a href='/'>TERMS OF USE</a>
            </li>
            <li>
            <a href='/'>PRIVACY POLICY</a>
            </li>
            <li>
            <a href='/'>ACCESSIBILITY AND LANGUAGE</a>
            </li>
            <li>
            <a href='/'>COMMUNICATION MATERIALS</a>
            </li>
           
            </ul>
          <div className='flex'>
         <button className='sm'>
         <FaGithub className='git'/>
         <span>Github</span>
         </button>
         <button className='sm'>
           <FaInstagram className='ig'/>
           </button>
           
           <button className='sm'>
           <FaLinkedin className='linkdn'/>
           </button>
           </div>
        </div>
        <div className='footer-logo'>
            <img size={'20rem'} src={logo}></img>
        </div>
    </div>
    </>
  )
}

export default Footer