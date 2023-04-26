import React from 'react'
import astro1 from '../images/astro1.png';
import astro2 from '../images/astro2.png';
import astro3 from '../images/astro3.png';
import astro4 from '../images/astro4.png';
import astro5 from '../images/astro5.png';

const Astronaut = () => {
  return (
    <>
    <div className='astro bg'>
        {/* <div className='astro1'>
            <img src={astro1} alt="/"></img>
        </div> */}
        <div className='astro2'>
        <img src={astro2} alt="/"></img>
        </div>
        <div className='astro3'>
        <img src={astro3} alt="/"></img>
        </div>
        <div className='astro4'>
        <img src={astro4} alt="/"></img>
        </div>
        <div className='astro5'>
        <img src={astro5} alt="/"></img>
        </div>
        
    </div>
    </>
  )
}

export default Astronaut